/*Questão 1*/

const lado1: number = +prompt('Lado1: ');
const lado2: number = +prompt('Lado2: ');
const lado3: number = +prompt('Lado3: ');
    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2)
{ 
             document.write("True");
             } 
             else {
             document.write( "False");
}





