/* 
JOGO MARCEL
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

alert(`Olá, jogador! Será que você conhece a Andressa de VERDADE? Vejamos como você se sai...`);


var q1 = prompt('Qual minha idade?');
if (q1 === '29') 
{
  pontos += 1;
}
var q2 = prompt('Qual meu signo?').toUpperCase();
if (q2 === 'LEÃO') 
{
  pontos += 1;
}
var q3 = prompt('Qual o nome do meu gato?').toUpperCase();
if (q3 === 'BUDA') 
{
  pontos += 1;
}
var q4 = prompt('Em qual ano eu viagei pra Europa?');
if (q4 === '2017') 
{
  pontos += 1;
}
var q5 = prompt('Como se chama minha mãe?').toUpperCase();
if (q5 === 'CELMA') 
{
  pontos += 1;
}
var q6 = prompt('Qual o apelido da minha namorada?').toUpperCase();
if (q6 === 'DEDA') 
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
        mensagem =(`Prata! 🥈 Obrigado por se importar Acertos: ${pontos}`)
} else if 
    (pontos >= 2) {
        mensagem =(`Bronze. 🥉 Você ainda se diz meu amigo? :@ Acertos: ${pontos}`)
} else if 
    (pontos === 1) {
        mensagem =(`Poxa, apenas ${pontos} acerto... 😭 `)
}

else {
    mensagem =('Ooops...')
}

// 6. Output results to the <main> element

document.querySelector('main').innerHTML =`${mensagem}`;
