const media = require('../src/media');

describe('1. Cenário apenas com notas de unidades', () => {

 test('1.1 Notas 9 e 7, Média = 8', () => {
     
   expect(media.calcularMedia(9, 7)).toBe(8);
   
 });

 test('1.2 Notas 2 e 3, Média = 2,5', () => {
     
    expect(media.calcularMedia(2, 3)).toBe(2.5);
    
 });

});

describe('2. Cenário com Segunda chamada (sem final)', () => {

 test('2.1 Nota1 = 4, Nota2 = null, sgCh = 10, Média = 7', () => {
  
    expect(media.calcularMedia(4, null, 10)).toBe(7);
     
 }); 

 test('2.2 Nota1 = null, Nota2 = 8, sgCh = 9, Média = 8,5', () => { 

    expect(media.calcularMedia(null, 8, 9)).toBe(8.5); 

 }); 

 test('2.3 Nota1 = null, Nota2 = null, sgCh = 9, Média = 4,5', () => { 

    expect(media.calcularMedia(null, null, 9)).toBe(4.5); 

 });

 describe('3. Cenário com Final', () => {

   

 });

});