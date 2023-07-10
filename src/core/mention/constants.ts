
// refs : https://github.com/sheepla/pingu/blob/master/main.go
export const pingu = [
  ` ...        .     ...   ..    ..     .........           `,
  ` ...     ....          ..  ..      ... .....  .. ..      `,
  ` ...    .......      ...         ... . ..... BBBBBBB     `,
  `.....  ........ .BBBBBBBBBBBBBBB.....  ... BBBBBBBBBB.  .`,
  ` .... ........BBBBBBBBBBBBBBBBBBBBB.  ... BBBBBBBBBBB    `,
  `      ....... BBWWWWBBBBBBBBBBBBBBBB.... BBBBBBBBBBBB    `,
  `.    .  .... BBWWBBWWBBBBBBBBBBWWWWBB... BBBBBBBBBBB     `,
  `   ..   ....BBBBWWWWBBRRRRRRBBWWBBWWB.. .BBBBBBBBBBB     `,
  `    .       BBBBBBBBRRRRRRRRRRBWWWWBB.   .BBBBBBBBBB     `,
  `   ....     .BBBBBBBBRRRRRRRRBBBBBBBB.      BBBBBBBB     `,
  `  .....      .  BBBBBBBBBBBBBBBBBBBB.        BBBBBBB.    `,
  `......     .. . BBBBBBBBBBBBBBBBBB . .      .BBBBBBB     `,
  `......       BBBBBBBBBBBBBBBBBBBBB  .      .BBBBBBB      `,
  `......   .BBBBBBBBBBBBBBBBBBYYWWBBBBB  ..  BBBBBBB       `,
  `...    . BBBBBBBBBBBBBBBBYWWWWWWWWWBBBBBBBBBBBBBB.       `,
  `       BBBBBBBBBBBBBBBBYWWWWWWWWWWWWWBBBBBBBBB .         `,
  `      BBBBBBBBBBBBBBBYWWWWWWWWWWWWWWWWBB    .            `,
  `     BBBBBBBBBBBBBBBYWWWWWWWWWWWWWWWWWWW  ........       `,
  `  .BBBBBBBBBBBBBBBBYWWWWWWWWWWWWWWWWWWWW    .........    `,
  ` .BBBBBBBBBBBBBBBBYWWWWWWWWWWWWWWWWWWWWWW       .... . . `,
]


// eslint-disable-next-line no-irregular-whitespace
// export const pinguAA =
//   `　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　_,..-=ヽ.
// 　　　　　　　　　　　　　　　 　 　 　 _,x-='''''=--..._　　　　　　　,.;;';;;;;;;;;;;;;;;;;ﾞ;
// 　　　　　　　　　　　　　 　 　 　 ／;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;｀ヽ.　　　　/;;;;;;;;;;;;;;;;;;;;;;;;:|
// 　　　　　　　　　　　　 　 　 　 /;;;;;r'ﾆヽ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ヽ　　 |;;;;;;;;;;;;;;;;;;;;;;;;;;/
// 　　　　　　　　　　　　　　　　 /::::弋ﾞ'"ﾉ;;;;;;;;;;;;;;;;;;;;;f´ヽ;;;ﾞ.　　|;;;;;;;;;;;;;;;;;;;;;;;;;|
// 　　　　　　　　　　　　　　　　 |;;;;;;;;;;;;;;／￣￣｀ヽ.弋ノﾉ;;;|　　ヽ;;;;;;;;;;;;;;;;;;;;;|
// 　　　　　　　　　　 　 　 　 　 ﾞ.;;;;;;;;;;;弋　　　　　 ﾞ.;;;;;;;;;;;;;|　　 　ヾ;;;;;;;;;;;;;;;;|
// 　　　　　　　　　　　　　　　　　｀ヽ.;;;;;;;;;;ﾞ=-.....___ノ;;;;;;;;;;;/ 　 　 　 V;;;;;;;;;;;;;|
// 　　　　　　　　　　　　　　　　　_,.-'"｀'--.:;;;;;;;;;;;;;;;;;;;;:::＜　　　　　 /;;;;;;;;;;;;/
// 　　　　　　　　　　　　　　　 ／;;;;;;;;;;;;;;;;;;;;;;;;;;;_-----,,_;;;;:ヽ　 ＿ノ;;;;;;;;;;;;;/
// 　　　　　　　　　　　　　 ／;;;;;;;;;;;;;;;;;;;;;;;;;;;／;;／￣｀ﾞヽ.ヽ;;;;;;;;;;;;;;;;;;;;;;;;;;;;/
// 　　　　　　　　　　　　 /;;;;;;;;;;;;;;;;;;;;;;;;;;:;／;;／ : '　　　　｀:ヾ;;;;;;;;;;;;;;;;;;:_／
// 　　　　　　　　　　　 /;;;;;;;;;;;;;;;;;;;;;;;;;;:/;;;;／: : '　　　　　　 ｀ヾ---'''"
// 　　　 　 　 　 　 　 /;;;;;;;;;;;;;;;;;;;;;;;;;;;;/;;;/: : '　　　　　　　　｀ ﾞ.
// 　　　　　　　　　　/;;;;;;;;;;;;;;;;;;;;;;;;;;;/;;;;/: : '　　　　　　　　　　 ﾞ.
// 　　　　　　　　　 /;;;;;;;;;;;;;;;;;;;;;;;;;;/;;;;/: : '　　　　　　　　　　　　ﾞ.
// `


export const getPingSquare = () => {

  const s = pingu.map(x => {
    return x
      .replace(/R/g, `🟥`)
      .replace(/W/g, `⬜`)
      .replace(/B/g, `⬛`)
      .replace(/Y/g, `🟨`)
  })

  // console.log(s)

  return s

}
