const textFrase = document.querySelector("#frase");
const textFraseEncriptada = document.querySelector("#frase-encriptada");
const sugerencia = document.querySelector(".form__sugerencia");
const desencriptarMsg = document.querySelector(".desencriptar__mensaje");
const desencriptarResultado = document.querySelector(
  ".desencriptar__resultado"
);
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopy = document.querySelector("#btn-copiar");
const btnPaste = document.querySelector("#btn-pegar");
const regexInput = /^[a-z0-9 ]*$/;

let mensaje = true;
let resultado = false;

function encriptarFrase() {
  if (!regexInput.test(textFrase.value) || textFrase.value.length === 0) {
    sugerencia.style.display = "flex";
    mensaje = true;
    mostrarMensaje();
    resultado = false;
    mostrarResultado();
  } else {
    sugerencia.style.display = "none";

    let fraseEncriptada = textFrase.value
      .replaceAll("a", "atras")
      .replaceAll("e", "elles")
      .replaceAll("i", "hipi")
      .replaceAll("o", "otro")
      .replaceAll("u", "ututu");

    textFraseEncriptada.value = fraseEncriptada;

    mensaje = false;
    mostrarMensaje();
    resultado = true;
    mostrarResultado();
    textFrase.value = "";
  }
}

function copy() {
  textFraseEncriptada.select();
  document.execCommand("copy");
  textFraseEncriptada.setAttribute("disabled", true);
  alert("Texto copiado");
}

function paste() {
  textFrase.value = textFraseEncriptada.value;
  alert("Texto pegado");
  textFraseEncriptada.value = "";
}

function desencriptarFrase() {
  let fraseDesencriptada = textFrase.value
    .replaceAll("ututu", "u")
    .replaceAll("otro", "o")
    .replaceAll("hipi", "i")
    .replaceAll("elles", "e")
    .replaceAll("atras", "a");
  textFraseEncriptada.value = fraseDesencriptada;

  mensaje = false;
  mostrarMensaje();
  resultado = true;
  mostrarResultado();
  textFrase.value = "";
}

function mostrarMensaje() {
  if (mensaje) {
    desencriptarMsg.style.display = "flex";
  } else {
    desencriptarMsg.style.display = "none";
  }
}

function mostrarResultado() {
  if (resultado) {
    desencriptarResultado.style.display = "flex";
  } else {
    desencriptarResultado.style.display = "none";
  }
}

btnEncriptar.addEventListener("click", encriptarFrase);
btnCopy.addEventListener("click", copy);
btnPaste.addEventListener("click", paste);
btnDesencriptar.addEventListener("click", desencriptarFrase);
