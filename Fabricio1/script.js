function user (ident, campo) {
    var i, c;
    var strTel = campo.value;
    if ( strTel.length !=8 ){
    alert ("Telfone tem de ter 8 digitos!");
    return false;
    }
    for (i = 0; i < 8; i++ ){
    c = strTel.charAt (i);}
    if ( (c < '0') || (c > '9')){
    alert("Telefone so pode ter 8 digitos");
    return false;
    }}
    return true;
    }