window.addEventListener('load', loadedPage => {
  // Obtener botón que ordena cifrar
  let cipherBtn = document.getElementById('cipher-btn');
  // Obtener botón que ordena descifrar
  let decipherBtn = document.getElementById('decipher-btn');

  /* FUNCIÓN PARA CIFRAR AL DARLE CLIC A BOTÓN DE CIFRAR */
  cipherBtn.addEventListener('click', cipher => {
    // Variable del input a cifrar
    let cipherInput = document.getElementById('cipher-input');
    // Variable que captura el valor del input a cifrar
    let cipherInputValue = cipherInput.value;
    console.log(cipherInputValue);
    // Variable para mostrar el mensaje cifrado en el HTML
    let cipherParagraph = document.getElementById('ciphered-message');
    let newPhrase = '';
    // Iterar el valor del mensaje a cifrar
    for (let i = 0; i < cipherInputValue.length; i++) {
      let toAscci = cipherInputValue.charCodeAt(i); // convierte el string ingresado a su equivalente en Ascii en la posicion i
      if (toAscci > 64 && toAscci < 91) // Fórmula para mayúsculas
        newPhrase += String.fromCharCode((toAscci - 65 + 33) % 26 + 65);
      else if (toAscci > 96 && toAscci < 123) // Fórmula para minúsculas
        newPhrase += String.fromCharCode((toAscci - 97 + 33) % 26 + 97);
      else
        newPhrase += String.fromCharCode(toAscci);
    }
    if (cipherInputValue.length === 0) {
      alert('Lo siento, no ha ingresado frase a cifrar');
    }
    // Limpiar input
    cipherInput.value = '';
    // Imprimir mensaje cifrado en HTML
    cipherParagraph.textContent = newPhrase;
  });

  // /* FUNCIÓN PARA DESCIFRAR AL DARLE CLIC A BOTÓN DE DESCIFRAR */
  decipherBtn.addEventListener('click', decipher => {
    // Variable del input a descifrar
    let decipherInput = document.getElementById('decipher-input');
    // Variable que captura el valor del input a decifrar
    let decipherInputValue = decipherInput.value;
    console.log(decipherInputValue);
    // Variable para mostrar el mensaje decifrado en el HTML
    let decipherParagraph = document.getElementById('deciphered-message');
    let newPhrase = '';
    // Iterar el valor del mensaje a decifrar
    for (let i = 0; i < decipherInputValue.length; i++) {
      let toAscci = decipherInputValue.charCodeAt(i); // Convierte el string ingresado a su equivalente en Ascii en la posicion i
      if (toAscci > 64 && toAscci < 91) // Para mayúsculas
        newPhrase += String.fromCharCode((toAscci - 65 - 33 + 26 * 2) % 26 + 65);// 26*2 porque recorre el abecedario dos veces para decifrar
      else if (toAscci > 96 && toAscci < 123) // Para minúsculas
        newPhrase += String.fromCharCode((toAscci - 97 - 33 + 26 * 2) % 26 + 97);
      else
        newPhrase += String.fromCharCode(toAscci);
    }
    if (decipherInputValue.length === 0) {
      alert('Lo siento, no ha ingresado frase a decifrar');
    }
    // Limpiar input
    decipherInput.value = '';
    // Imprimir mensaje decifrado en HTML
    decipherParagraph.textContent = newPhrase;
  });

  // Llave de cierre de función general
});
