//Elementos HTML
var textoOriginal = document.querySelector("#textoOriginal");
var textoEncriptado = document.querySelector("#textoEncriptado");
var btnEncriptar = document.querySelector("#btnEncriptar");
var btnDesencriptar = document.querySelector("#btnDesencriptar");
var btnCopiar = document.querySelector("#btnCopiar");

//Arreglos encriptar-desencriptar
var caracteresOriginales = ["e", "i", "a", "o", "u"];
var caracteresCifrados = ["enter", "imes", "ai", "ober", "ufat"];

//Regex sólo minusculas (sin mayúsculas, acentos y caracteres especiales)
var caracteresPermitidos= /([^a-z \r])/g;


//Función que imprime la frase en el textarea de retorno
function imprimir(frase){
    
    document.getElementById("div-temporal").style.display = "none";
    document.getElementById("form-output").style.display = "block";
    
    textoEncriptado.value=frase;
}


//Funcion que realiza la encriptación
function encriptar(){   

    var texto = textoOriginal.value;

    //Validando que se hayan introducido caracteres válidos para hacer la encriptación
    valido = validarTexto(texto);
    if(valido){
        for(var i = 0; i < caracteresCifrados.length ; i++){
            texto = texto.replaceAll(caracteresOriginales[i], caracteresCifrados[i]);
        }

        imprimir(texto);
    }
}


//Funcion que realiza la desencriptación
function desencriptar(){

    var texto = textoOriginal.value;

    //Validando que se hayan introducido caracteres válidos para hacer la desencriptación
    valido = validarTexto(texto);
    if(valido){
        for(var i = 0; i < caracteresCifrados.length ; i++){
            texto = texto.replaceAll(caracteresCifrados[i], caracteresOriginales[i]);
        }

        imprimir(texto);   
    }    
}


//Función que válida que sólo se introduzcan caracteres válidos
function validarTexto(frase){

    if(frase.match(caracteresPermitidos)){ //El texto a encriptar/desencriptar contiene algún caracter no permitido
        alert('Se deben introducir sólo letras minusculas sin acentos o cáracteres especiales');
        return false;
    }
    else{
        return true;
    }
}


//Copiar al portapapeles
function copiar() {

    textoEncriptado.select();
    document.execCommand('copy');

}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;