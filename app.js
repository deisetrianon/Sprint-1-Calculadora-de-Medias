function calcular() {
  var nota1 = document.getElementById("nota1").value;
  var nota2 = document.getElementById("nota2").value;
  var nota3 = document.getElementById("nota3").value;
    
  if (!nota1 || !nota2 || !nota3) {
    document.getElementById("mensagem").innerHTML = "Preencha todos os campos.";
    return false;
  } 
    
  nota1 = parseFloat(nota1);
  nota2 = parseFloat(nota2);
  nota3 = parseFloat(nota3);
    
  var resultado = calculoMedia(nota1, nota2, nota3);
    
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    document.getElementById("mensagem").innerHTML = "Preencha somente números.";
    return false;
  } else if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
    document.getElementById("mensagem").innerHTML = "Preencha somente números positivos.";
    return false;
  } else if (resultado >= 6) {
    document.getElementById("mensagem").innerHTML = "Aprovada!";
    return false;
  } else if (resultado < 6) {
    document.getElementById("mensagem").innerHTML = "Reprovada!";
    return false;
  } 
    
}
  
function calculoMedia(nota1, nota2, nota3) {
  var conta = (nota1 + nota2 + nota3) / 3;
  return conta;
}