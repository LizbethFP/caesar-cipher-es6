window.addEventListener('load', loadedPage => {
  // Obtener elementos para cifrar
  var cipherInput = document.getElementById('cipher-input');
  var cipherBtn = document.getElementById('cipher-btn');

  /* FUNCIÓN PARA CIFRAR AL DARLE CLIC A BOTÓN DE CIFRAR */
  cipherBtn.addEventListener('click', cipher = secret => {
    // Variable que captura el valor del input de cifrar
    let cipherInputValue = cipherInput.value;
    // Variables para mostrar el mensaje cifrado en el HTML
    let cipherParagraph = document.getElementById('ciphered-message');
    let cipherParagraphText = document.createTextNode(cipherInputValue);

    cipherParagraph.appendChild(cipherParagraphText);
    console.log(cipherInputValue);
  });

  // Llave de cierre de función general
});


// /* FUNCIÓN PARA CIFRAR */
// let cipher = secret => {
//   let newPhrase = '';
//   // Recorremos todo  el string
//
//   for (let j = 0; j < secret.length; j++) {
//     let toAscci = secret.charCodeAt(j); // convierte el string ingresado a su equivalente en Ascii en la posicion i
//
//     if (toAscci > 64 && toAscci < 91) // Fórmula para mayúsculas
//       newPhrase += String.fromCharCode((toAscci - 65 + 33) % 26 + 65);
//     else if (toAscci > 96 && toAscci < 123) // Fórmula para minúsculas
//       newPhrase += String.fromCharCode((toAscci - 97 + 33) % 26 + 97);
//     else
//       newPhrase += String.fromCharCode(toAscci);
//   }
//
//   return newPhrase;
// };
//
// /* FUNCIÓN PARA DESCIFRAR */
// let decipher = secret => {
//   let newPhrase = '';
//
//   for (let i = 0; i < secret.length; i++) {
//     let toAscci = secret.charCodeAt(i); // Convierte el string ingresado a su equivalente en Ascii en la posicion i
//
//     if (toAscci > 64 && toAscci < 91) // Para mayúsculas
//       newPhrase += String.fromCharCode((toAscci - 65 - 33 + 26 * 2) % 26 + 65);// 26*2 porque recorre el abecedario dos veces para decifrar
//     else if (toAscci > 96 && toAscci < 123) // Para minúsculas
//       newPhrase += String.fromCharCode((toAscci - 97 - 33 + 26 * 2) % 26 + 97);
//     else
//       newPhrase += String.fromCharCode(toAscci);
//   }
//
//   return newPhrase;
// };
//
// /* FUNCIÓN DE VALIDACIÓN DE DATOS */
//
// // Evalúa solo el primer valor del string ingresado
// let validate = phrase => {
//   for (let i = 0; i < phrase.length; i++) {
//     if ((phrase.charCodeAt(i) > 64 && phrase.charCodeAt(i) < 91) || (phrase.charCodeAt(i) > 96 && phrase.charCodeAt(i) < 123)) // condicionamos a que solo se ingrese letras o mayusculas o minusculas pasando a ascii, una vez convertido condicionamos a que este entre el rango
//       return phrase;
//     else if (phrase === null)
//       return document.write('[ERROR]'); // no ingrese nada
//     else
//       return document.write('[ERROR]'); // ingrese números o símbolos en el primer valor
//   }
// };


/*
// Menú principal
let menu = prompt('MENU PRINCIPAL CIFRADO CESAR \n\n' + '1- Para cifrar frases  \n\n ' + '2.- Para decifrar frases  \n\n' + '3.- Salir');
let phrase;
switch (menu) {
case '1':
  phrase = prompt('Ingrese un texto a cifrar');
  document.write('<p>El texto cifrado es: \n\n </p> ' + cipher(validate(phrase))); // la frase ingresada primero es validada y luego pasa a la funcion cipher
  break;
case '2':
  phrase = prompt('Ingrese un texto a descifrar');
  document.write('<p>El texto descifrado es: \n\n </p> ' + decipher(validate(phrase))); // la frase ingresada primero es validada y luego pasa a la funcion decipher
  break;
case '3':
  document.write('Gracias');
  break;
default:
  alert('Vuelva a realizar el proceso, recuerde ingresar un numero valido de la lista');
}
*/
