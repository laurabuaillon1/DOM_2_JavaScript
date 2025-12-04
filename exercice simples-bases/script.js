// EXERCICE SIMPLES-Bases du DOM

// Exercice 1
// utilisez JavaScript pour modifier le texte de ce paragraphe en "Bonjour le monde" .

const texte = document.getElementById("message");
texte.textContent = "Bonjour,tout le monde";

// Exercice 2
// Toujours avec un élément <p id="message"> , modifiez sa couleur de texte pour
// qu’elle devienne bleue.
texte.style.color = "blue";


// Exercice 3
// Utilisez JavaScript pour changer tous ces textes en "Modifié" 

const elements = document.querySelectorAll(".info");
for(let element of elements){
    element.textContent = "Modifié"
}


