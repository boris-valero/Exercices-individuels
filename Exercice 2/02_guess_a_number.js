//Étape 1//
var nombre;

//Étape 2//
nombre = Number(window.prompt('Choisis un nombre'));
if (nombre < 22) {
  window.alert('PLUS GRAND');
} else if (nombre > 22) {
  window.alert('PLUS PETIT');
} else if (nombre == 22) {
  window.alert('BRAVO VOUS AVEZ DEVINÉ LE NOMBRE');
}