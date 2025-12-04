// Exercice 8
// Créez une fonction afficherNomsMajuscules() qui ajoute dans un <ul> un <li> pour
// chaque nom, mais en lettres majuscules.
// Indication :
// Utilisez .toUpperCase() et une boucle dans la fonction.

let personnes = ["alice", "bob", "claire"];

// creation de la fonction
function afficherNomsMajuscules() {
  const ul = document.createElement("ul");

  //   creation de la boucle
  personnes.forEach((nom) => {
    const li = document.createElement("li");
    li.textContent = nom.toUpperCase(); //utilisation de to.Uppercase ici pour dire que le contenu des li doit être les noms en majuscule

    ul.appendChild(li);
  });

  return ul;
}

// afficher les noms
const liste = afficherNomsMajuscules();
document.body.appendChild(liste);

afficherNomsMajuscules();

// Exercice 9
// Créez une table HTML dynamiquement avec JavaScript (sans HTML initial),
// contenant deux colonnes : Nom et Prix.
// Indication :
// Créez chaque élément ( table , tr , td ) avec document.createElement , puis utilisez
//appendChild .

let produits = [
  { nom: "Stylo", prix: 1.5 },
  { nom: "Cahier", prix: 3 },
  { nom: "Gomme", prix: 0.8 },
];

// Creation de la table (representation du tableau plus bas peux aider)
const table = document.createElement("table");
const tr = document.createElement("tr");
const tdName = document.createElement("td");
const tdPrice = document.createElement("td");

tdName.textContent = "Nom";
tdPrice.textContent = "Prix";

// creer les TD dans les TR
tr.appendChild(tdName);
tr.appendChild(tdPrice);
// Creer les TR dans le tableau
table.appendChild(tr);

console.log(table);

// creation de la boucle
for (let produit of produits) {
  // créer un tr
  // créer un td qui contient le nom du produit
  // créer un td qui contient le prix du produit
  // ajouter les deux td dans le tr
  // ajouter le tr dans table
  const body = document.body; //Pensez à rajouter le tableau dans le body
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdPrice = document.createElement("td");

  tdName.textContent = produit.nom;
  tdPrice.textContent = produit.prix;

  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  table.appendChild(tr);
  body.appendChild(table); //rajouter le tableau dans le body
}

// Représentation du tableau (qui peux aider)
`
    <table>
        <tr>
            <td>Nom</td>
            <td>Prix</td>
        </tr>
        <tr>
            <td>Stylo</td>
            <td>1.5</td>
        </tr>
        <tr>
            <td>Cahier</td>
            <td>3</td>
        </tr>
    </table>
    `;

// exercice 10

// Toujours à partir du tableau produits de l’exercice précédent, créez une fonction
// qui ajoute à une liste ,les produits dont le prix est supérieur à 1 euro.

//Creer une fonction = Ok
//Ajouter les produits à une liste =ok
// uniquement si le prix est supérieur à 1euro

{
  let produits = [
    { nom: "Stylo", prix: 1.5 },
    { nom: "Cahier", prix: 3 },
    { nom: "Gomme", prix: 0.8 },
  ];

  function ajouterListeProduit() {
    const liste1 = document.createElement("ul");

    produits.forEach((produit) => {
      if (produit.prix > 1) {
        const li = document.createElement("li");
        li.textContent = produit.prix;
        liste1.appendChild(li);
      }

      console.log(liste1);
    });
    document.body.appendChild(liste1);
  }

  ajouterListeProduit();
}

// Exercice 11
// Pour chaque âge, affichez dans une liste :
// "Mineur" si l’âge est strictement inférieur à 18.
// "Majeur" sinon.

let ages = [5, 18, 25, 15, 30];

function afficherAge() {
  const liste = document.createElement("ul");

  ages.forEach((age) => {
    const li = document.createElement("li");

    if (age <= 18) {
      li.textContent = "Mineur";
    } else {
      li.textContent = "Majeur";
    }

    liste.appendChild(li);
  });

  return liste;
}

const list = afficherAge();
console.log(afficherAge());
document.body.appendChild(list);

// Exercice 12
// Créez dans le DOM une structure du type :
// Roman
// - Livre A
// - Livre C
// Poésie
// - Livre B
// Indication :
// Utilisez des fonctions, des conditions, et une logique pour grouper les titres
// sous chaque catégorie.


  let livres = [
    { titre: "Livres A", categorie: "Roman" },
    { titre: "Livres B", categorie: "Poésie" },
    { titre: "Livres C", categorie: "Roman" },
  ];


  
