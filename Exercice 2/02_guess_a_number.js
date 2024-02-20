let guess_a_number;

guess_a_number = Number(window.prompt('Choisis un nombre'));
while (guess_a_number != 22) {
  window.alert('Ceci n\'est pas la bonne réponse');
  guess_a_number = Number(window.prompt('Quel est votre âge ?'));
}
if (guess_a_number == 22) {
  window.alert('Ceci est la bonne réponse');
