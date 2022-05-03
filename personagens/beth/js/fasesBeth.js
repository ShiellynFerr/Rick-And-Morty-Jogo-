
function fase1Beth() {

    let escolha1;
    //undefined

    while(escolha1 !== 'a' && escolha1 !== 'b' && escolha1 !== 'c') {
  
      escolha1 = prompt('Escolha uma alternativa!');
  
      if(escolha1 === 'c') {
          location.href = '../beth/bethFase2.html';
          alert('Muito bem, você avançou para a próxima fase!');
      } else if (escolha1 === 'a') {
        location.href = '../beth/bethGameOver.html';
      } else if (escolha1 === 'b') {
        location.href = '../beth/bethGameOver.html';
      }
      else {
          alert('Escolha Inválida, escolha entre a b ou c');
      }
  
    }

}


function fase2Beth() {

    let escolha1;

    while(escolha1 !== 'a' && escolha1 !== 'b' && escolha1 !== 'c') {
  
      escolha1 = prompt('Escolha uma alternativa!');
  
      if(escolha1 === 'c') {
        location.href = '../beth/bethFase3.html';
          alert('Muito bem, você avançou para a próxima fase!');
      } else if (escolha1 === 'a') {
        location.href = '../beth/bethGameOver.html';
      } else if (escolha1 === 'b') {
        location.href = '../beth/bethGameOver.html';
      }else {
          alert('Escolha Inválida, escolha entre a b ou c');
      }
  
    }

}


function fase3Beth() {

    let escolha1;

    while(escolha1 !== 'a' && escolha1 !== 'b' && escolha1 !== 'c') {
  
      escolha1 = prompt('Escolha uma alternativa!');
  
      if(escolha1 === 'a') {
        location.href = '../beth/bethGanhou.html';
      } else if (escolha1 === 'a') {
        location.href = '../beth/bethGameOver.html';
      } else if (escolha1 === 'c') {
        location.href = '../beth/bethGameOver.html';
      }else {
          alert('Escolha Inválida, escolha entre a b ou c');
      }
  
    }

}