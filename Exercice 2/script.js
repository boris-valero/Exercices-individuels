let givenNumber = window.prompt('Give me a number please')

function didIWin(givenNumber) {
    if (givenNumber > 22) {
        alert('trop grand');
      } 
      if (givenNumber < 22) {
        alert('trop petit');
      } 
      if (givenNumber === 22) {
        alert('Bravo ! Vous avez deviné le nombre');
      } 
}

do {
    didIWin;
  } while (didIWin === 22);
