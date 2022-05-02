
function fase1Rick() {

    let escolha1;

    while(escolha1 !== 'a' && escolha1 !== 'b' && escolha1 !== 'c') {
  
      escolha1 = prompt('Escolha uma alternativa!');
  
      if(escolha1 === 'b') {
          location.href = '../rick/rickFase2.html';
          alert('Muito bem, você avançou para a próxima fase!');
      } else if (escolha1 === 'a') {
          location.href = '../rick/rickGameOver.html';
      } else if (escolha1 === 'c') {
        location.href = '../rick/rickGameOver.html';
      }else {
          alert('Escolha Inválida, escolha entre a b ou c');
      }
  
    }

}


function fase2Rick() {

    let escolha1;

    while(escolha1 !== 'a' && escolha1 !== 'b' && escolha1 !== 'c') {
  
      escolha1 = prompt('Escolha uma alternativa!');
  
      if(escolha1 === 'b') {
          location.href = '../rick/rickFase3.html';
          alert('Muito bem, você avançou para a próxima fase!');
      } else if (escolha1 === 'a') {
          location.href = '../rick/rickGameOver.html';
      } else if (escolha1 === 'c') {
        location.href = '../rick/rickGameOver.html';
      }else {
          alert('Escolha Inválida, escolha entre a b ou c');
      }
  
    }

}


function fase3Rick() {

    let escolha1;

    while(escolha1 !== 'a' && escolha1 !== 'b' && escolha1 !== 'c') {
  
      escolha1 = prompt('Escolha uma alternativa!');
  
      if(escolha1 === 'a') {
          location.href = '../rick/rickGanhou.html';
          alert('Muito bem, você avançou para a próxima fase!');
      } else if (escolha1 === 'a') {
          location.href = '../rick/rickGameOver.html';
      } else if (escolha1 === 'c') {
        location.href = '../rick/rickGameOver.html';
      }else {
          alert('Escolha Inválida, escolha entre a b ou c');
      }
  
    }

}