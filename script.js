let first = document.querySelector('#first')
let second = document.querySelector('#second')
let third = document.querySelector('#third')
let forth = document.querySelector('#forth')

/* got this arrow function from stackoverflow */

let password = (
    length = 20,
    wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
  ) =>
    Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => wishlist[x % wishlist.length])
      .join('')
  
 
function generatePassword() {
    first.textContent = password()
    second.textContent = password()
    third.textContent = password()
    forth.textContent = password()
}

/* https://www.youtube.com/watch?v=_qtaEkpnP68 função para copiar onclick*/

function copiarFirstBtn() {
  let copiado = first.textContent
  navigator.clipboard.writeText(copiado)
  alert(`A senha ${copiado} foi copiada para a área de transferência`)
}

function copiarSecondBtn() {
  let copiado = second.textContent
  navigator.clipboard.writeText(copiado)
  alert(`A senha ${copiado} foi copiada para a área de transferência`)
}

function copiarThirdBtn() {
  let copiado = third.textContent
  navigator.clipboard.writeText(copiado)
  alert(`A senha ${copiado} foi copiada para a área de transferência`)
}

function copiarForthBtn() {
  let copiado = forth.textContent
  navigator.clipboard.writeText(copiado)
  alert(`A senha ${copiado} foi copiada para a área de transferência`)
}



