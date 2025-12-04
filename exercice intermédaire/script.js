// EXERCICE INTERMEDIAIRE - DOM +LOGIQUE

// Exercice 4
// Utilisez JavaScript pour ajouter un élément <li> avec le texte "Élément ajouté" dans
// cette liste.

const liste = document.getElementById("liste");
const li = document.createElement("li");
li.textContent = "Elément ajouté";
liste.appendChild(li);

// Exercice 5
// Supprimez cet élément de la page avec JavaScript.
const text = document.getElementById("a-supprimer");
text.remove();

// Exercice 6
// Utilisez une boucle pour ajouter un <li> dans la liste pour chaque fruit du
// tableau.

let fruits = ["pomme", "banane", "orange"];

for (let fruit of fruits) {
  const li = document.createElement("li"); //je crée <li>
  li.textContent = fruit; // je met le nom du fruit dedans

  const liste = document.getElementById("liste-fruits");
  liste.appendChild(li); //j'ajoute l'élément dans la liste
}

// Exercice 7
// Ajoutez à la liste seulement les nombres pairs.

let nombres = [3, 8, 12, 5, 2];
const list = document.getElementById("liste-vide");

nombres.forEach((nombre) => {
  if (nombre % 2 === 0) {
    const liste = document.createElement("li"); //Création de la li
    liste.textContent = nombre; //j'ai ajouter le nombre pair dedans
    list.appendChild(liste); //ajouter cet élément comme enfant de list
  } else {
  }
});
