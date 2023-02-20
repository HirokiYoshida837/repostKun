### build

## refs : https://maku.blog/p/ehxgwt4/

FROM node:18.7.0-alpine3.15 as builder

WORKDIR /work

COPY package*.json ./
RUN npm install

# TypeScript コードをコピーしてビルド
COPY . ./
RUN npm run build:modules


### 実行用イメージの作成
FROM node:18.7.0-alpine3.15 as runner
WORKDIR /work

ENV NODE_ENV production

# 本番環境用のパッケージをインストール
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

# builder からビルド結果だけコピー
COPY --from=builder /work/dist ./dist

# Node.js アプリを起動. enrypointが node なのでこれだけでOK。
CMD ["./dist/main.js"]
