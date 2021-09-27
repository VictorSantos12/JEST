

function calcularMedia(nota1, nota2, segCh) {
   
   var media;

   if(nota1 != undefined && nota2 != undefined) {
     
     media = (nota1 + nota2) / 2;

   } else if(nota1 != undefined && nota2 == undefined && segCh != undefined) {
     
     media = (nota1 + segCh) / 2;

   } else if(nota1 == undefined && nota2 != undefined && segCh != undefined) {
      
      media = (nota2 + segCh) / 2;

   } else if(nota1 == undefined && nota2 == undefined && segCh != undefined) {
      
      media = segCh / 2;

  }

  // Média (sem final) está calculada
  
  var mediaFinal;

  if(media >= 3 && media < 7 && media != undefined) {

    mediaFinal = (media + final) / 3;

  }

   return media;
}

module.exports.calcularMedia = calcularMedia;