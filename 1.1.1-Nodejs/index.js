//Importamos picocolors
const pc = require('picocolors')

console.log("Hola mundo");
//Cambio el texto en consola a color verde
console.log(
    pc.green(`How are ${pc.italic(`you`)} doing?`)
)

console.log(
    pc.magenta(`How are ${pc.italic(`you`)} doing?`)
)

console.log(
    pc.red(`How are ${pc.italic(`you`)} doing?`)
)

console.log(
    pc.blue(`How are ${pc.italic(`you`)} doing?`)
)

console.log(
    pc.bgGreen(
      pc.red(`Tom appeared on the sidewalk with a bucket of whitewash and a long-handled brush.`)
    )
  )