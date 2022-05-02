
function proximaFase()
{
  
let escolha1;

  while(escolha1 !== 'a' && escolha1 !== 'b' && escolha1 !== 'c') {

    escolha1 = prompt('Escolha uma alternativa!');

    if(escolha1 === 'b') {
        location.href = '../morty/mortyFase2.html';
        alert('Muito bem, você avançou para a próxima fase!');
    } else if (escolha1 === 'a') {
        location.href = '../morty/mortyGameOver.html'
    } else if (escolha1 === 'c') {
         location.href = '../morty/mortyGameOver.html'
    }else {
        alert('Escolha Inválida, escolha entre a b ou c');
    }

  }

    
}



function proximaFase2()
{
  
let escolha1;

  while(escolha1 !== 'a' && escolha1 !== 'b' && escolha1 !== 'c') {

    escolha1 = prompt('Escolha uma alternativa!');

    if(escolha1 === 'a') {
        location.href = '../morty/mortyFase3.html';
        alert('Muito bem, você avançou para a próxima fase!');
    } else if (escolha1 === 'b') {
        location.href = '../morty/mortyGameOver.html'
    } else if (escolha1 === 'c') {
         location.href = '../morty/mortyGameOver.html'
    }else {
        alert('Escolha Inválida, escolha entre a b ou c');
    }

  }

    
}


function proximaFase3()
{
  
let escolha1;

  while(escolha1 !== 'a' && escolha1 !== 'b' && escolha1 !== 'c') {

    escolha1 = prompt('Escolha uma alternativa!');

    if(escolha1 === 'a') {
        location.href = '../morty/mortyGanhou.html';
    } else if (escolha1 === 'b') {
        location.href = '../morty/mortyGameOver.html'
    } else if (escolha1 === 'c') {
         location.href = '../morty/mortyGameOver.html'
    }else {
        alert('Escolha Inválida, escolha entre a b ou c');
    }

  }

    
}

