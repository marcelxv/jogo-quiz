/* 
JOGO ANDRESSA
*/
var pontos = 0;


// 2. Store the rank of a player


// 3. Select the <main> HTML element
var main = document.querySelector('main');


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/


function comeca() {
var q1 = prompt('Qual minha idade?');
if (q1 === '26') 
{
  pontos += 1;
}
var q2 = prompt('Qual meu signo?').toUpperCase();
if (q2 === 'ÁRIES') 
{
  pontos += 1;
}
var q3 = prompt('Qual o nome do minha cachorrinha?').toUpperCase();
if (q3 === 'TYRA') 
{
  pontos += 1;
}
var q4 = prompt('Em que ano me formei em marketing');
if (q4 === '2016') 
{
  pontos += 1;
}
var q5 = prompt('Como se chama minha mãe?').toUpperCase();
if (q5 === 'ANGELA') 
{
  pontos += 1;
}
var q6 = prompt('Qual é meu segundo sobrenome').toUpperCase();
if (q6 === 'GOMES') 
{
  pontos += 1;
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

let mensagem

if (pontos === 6) {
        mensagem = (`Ouro!!! 🥇 Você sabe tudo sobre mim. Acertos: ${pontos}`)
} else if
    (pontos >= 3) {
        mensagem =(`Prata! 🥈 Obrigado por se importar 😅(ironia mode) Acertos: ${pontos}`)
} else if 
    (pontos >= 2) {
        mensagem =(`Bronze. 🥉 Você ainda se diz meu amigo? 😡 Acertos: ${pontos}`)
} else if 
    (pontos === 1) {
        mensagem =(`Poxa, apenas ${pontos} acerto... 😭 `)
}

else {
    mensagem =('Ooops...')

    

}


// 6. Output results to the <main> element

document.querySelector('main').innerHTML =`${mensagem}`;

document.querySelector('#botaoreset').style = 'display: initial'
document.querySelector('#botaostart').style = 'display: none'
}


