// récuperation du local storage//
   let articlesEnregistre = JSON.parse(localStorage.getItem("article"));
 

// mise en place panier//
    let listeArticle = document.getElementById("listearticle");

    if(articlesEnregistre === null){
       let panierVide = `
       <p> le panier est vide</p>`;
       listeArticle.innerHTML = panierVide;
    }else{
          let panierProduit = [];
          for (a = 0; a < articlesEnregistre.lstArticles.length; a++){
           panierProduit = panierProduit + `
          <tr class="flex justify-content">
             <th class="flex">${articlesEnregistre.lstArticles[a].article.name}</th >
             <th  class="flex">${articlesEnregistre.lstArticles[a].color}</th >
             <th class="flex">${articlesEnregistre.lstArticles[a].quantite} </th>
             <th id="prixarticle" class="flex" value="">${articlesEnregistre.lstArticles[a].article.price/100}</th > 
             <th id="prixArticles" class="flex">${articlesEnregistre.lstArticles[a].quantite*(articlesEnregistre.lstArticles[a].article.price/100)} €</th >
          </tr>`;  
          }
             if(a == articlesEnregistre.lstArticles.length){
                listeArticle.innerHTML = panierProduit;
             }       
}

 // articlesEnregistre = JSON.stringify(localStorage.getItem("article"));        
 let totalPanier = document.getElementById("totalprix");
             totalPanier.innerHTML = `
             <p>le prix total est de <strong>${articlesEnregistre.PriceTotal}€<strong></p>`;





//formulaire //
   let formulaire = document.getElementById("formulaire");
   formulaire.innerHTML= `
   <h2>vos coordonnées</h2>
       <form name="form1" method="POST" action="">
           <div class="flex justify-content mt col-12 column"> 
             <div class="flex direction">
                <label class="label" for="firstName">Prénom</label>
                <input id="prenom" class="input" type="text" name="prenom"/>
             </div>
             <div class="flex direction">
                <label class="label" for="lastName">Nom</label>
                <input id="nom" class="input" type="text" name="nom"/>
             </div> 
             <div class="flex direction">
                <label class="label" for="mail">Adresse e-mail</label>
                <input id="mail" class="input" type="email" name="mail"/>
             </div>
             </div> 
             <div class="flex justify-content mt col-12 column">
             <div class="flex direction">
                <label class="label" for="adresse">Adresse</label>
                <input id="adresse" class="input" type="text" name="adresse"/>
             </div>
             <div class="flex direction">
                <label class="label" for="codePostal">Code postal</label>
                <input id="codepostal" class="input" type="number" name="codePostal"/>
             </div>
             <div class="flex direction">
                <label class="label" for="ville">ville</label>
                <input id="ville" class="input" type="text" name="ville"/>
             </div>
             </div>
             <input id="bouton" type="submit" class="mt"></input>
        </form>   
   `

let boutonCommande = document.querySelector("#bouton");
//bouton commande ecoute du click//
boutonCommande.addEventListener("click", ()=>{
   
let coordonnes = {
  prenom : document.querySelector("#prenom").value,
  nom : document.querySelector("#nom").value,
  mail : document.querySelector("#mail").value,
  adresse : document.querySelector("#adresse").value,
  codepostal : document.querySelector("#codepostal").value,
  ville: document.querySelector("#ville").value 
} 

let regExPrenom = (value) => {
    return /^[A-Za-z/-]{3,20}$/.test(value);
}

let regExCodePostal = (value) => {
   return /^[0-9]{5}$/.test(value);
}

let regExMail = (value) =>{
   return /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/.test(value);
}

let regExAdresse = (value) =>{
      return /^[A-Za-z0-9 ]{3,40}$/.test(value);
}

let textAlert = (value) =>{
   return `Merci de bien remplir ${value} avec entre 3 et 20 lettres uniquement`;
}

// condition pour le prénom
function prenomControle(){
let prenom = coordonnes.prenom;
if (regExPrenom(prenom)){
   return true;
}else{
   alert(textAlert("le Prénom"));
   return false;
}
}

//condition pour le nom
function nomControle(){
   let nom = coordonnes.nom;
   if (regExPrenom(nom)){
      return true;
   }else{
      alert(textAlert("le Nom"));
      return false;
   }
}

//condition pour la ville
function villeControle(){
   let ville = coordonnes.ville;
   if (regExPrenom(ville)){
      return true;
   }else{
      alert(textAlert("la ville"));
      return false;
   }
}

//condition pour le code postal
function codePostalControle(){
   let codePostal = coordonnes.codepostal;
   if (regExCodePostal(codePostal)){
      return true;
   }else{
      alert("le code postal doit etre de 5 chiffres uniquement");
      return false;
   }
}

// condition pour l'adresse
function adresseControle(){
   let adresse = coordonnes.adresse;
   if (regExAdresse(adresse)){
      return true;
   }else{
      alert(textAlert("l'adresse doit contenir uniquement des chiffres et des lettres"));
      return false;
   }
   }

//condition pour le mail
function mailControle(){
   let mail = coordonnes.mail;
   if (regExMail(mail)){
      return true;
   }else{
      alert("le mail n'est pas valide");
      return false;
   }
}

// envoi du formulaire dans le local storage 
if(prenomControle() && nomControle() && villeControle() && codePostalControle() && mailControle() && adresseControle()) {
localStorage.setItem("coordonnes", JSON.stringify(coordonnes));
}else{
   alert("merci de bien remplir le formulaire");
}

// utilisation de fetch pour avoir un id lié a la commande //
let donneAEnvoyer ={
   articlesEnregistres,
   coordonnes,
};
console.log("donneAEnvoyer");
console.log(donneAEnvoyer);

fetch("localhost:3000/api/teddies/order", {
   method: "POST",
   headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
   },
   body: JSON.stringify(donneAEnvoyer),
})
   .then(function (res){
      if (res.ok){
         return res.json();
      }
   })
})

 