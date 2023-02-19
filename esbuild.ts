import * as esbuild from 'esbuild'
import type { BuildOptions } from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'
import pkg from './package.json'

const dependencies = [...Object.keys(pkg?.dependencies ?? {})]
const peerDependencies = [...Object.keys(pkg?.dependencies ?? {})]

const shared: BuildOptions = {
  entryPoints: ['src/main.ts'],
  bundle: true,
  external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  // watch: process.env.NODE_ENV === 'development',
  tsconfig: 'tsconfig.json',
  plugins: [nodeExternalsPlugin()],
}

esbuild.build({
  ...shared,
  outdir: 'dist',
  platform: 'node'
})

// export default {}
