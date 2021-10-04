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
          <tr>
             <td >${articlesEnregistre.lstArticles[a].article.name}</td>
             <td >${articlesEnregistre.lstArticles[a].color}</td >
             <td >${articlesEnregistre.lstArticles[a].quantite} </td>
             <td id="prixarticle"  value="">${articlesEnregistre.lstArticles[a].article.price/100}</td > 
             <td id="prixArticles" >${articlesEnregistre.lstArticles[a].quantite*(articlesEnregistre.lstArticles[a].article.price/100)} €</td >
          </tr>`;  
          }
             if(a == articlesEnregistre.lstArticles.length){
                listeArticle.innerHTML = panierProduit;
             }       
}
// mise en place prix total //  
 let totalPanier = document.getElementById("totalprix");
             totalPanier.innerHTML = `
             <p>le prix total est de <strong>${articlesEnregistre.PriceTotal}€<strong></p>`;


// mise en place du formulaire //
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
                <label class="label" for="ville">ville</label>
                <input id="ville" class="input" type="text" name="ville"/>
             </div>             
             </div>
             <input id="bouton" type="submit" class="mt"></input>
        </form>   
   `;
   
  
let boutonCommande = document.querySelector("#bouton");
//bouton commande ecoute du click//
boutonCommande.addEventListener("click", (e) => {
   e.preventDefault();
   // création du tableau contact //
let contact = {
  firstName : document.querySelector("#prenom").value,
  lastName : document.querySelector("#nom").value,
  address : document.querySelector("#adresse").value,
  city : document.querySelector("#ville").value,
  email : document.querySelector("#mail").value,
 }  
// variable pour les conditions //
let regExPrenom = (value) => {
    return /^[A-Za-z/-]{3,20}$/.test(value);
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
let prenom = contact.firstName;
if (regExPrenom(prenom)){
   return true;
}else{
   alert(textAlert("le Prénom"));
   return false;
}}
//condition pour le nom
function nomControle(){
   let nom = contact.lastName;
   if (regExPrenom(nom)){
      return true;
   }else{
      alert(textAlert("le Nom"));
      return false;
   }}
//condition pour la ville
function villeControle(){
   let ville = contact.city;
   if (regExPrenom(ville)){
      return true;
   }else{
      alert(textAlert("la ville"));
      return false;
   }}
// condition pour l'adresse
function adresseControle(){
   let adresse = contact.address;
   if (regExAdresse(adresse)){
      return true;
   }else{
      alert(textAlert("l'adresse doit contenir uniquement des chiffres et des lettres"));
      return false;
   }}
//condition pour le mail
function mailControle(){
   let mail = contact.email;
   if (regExMail(mail)){
      return true;
   }else{
      alert("le mail n'est pas valide");
      return false;
   }}
// envoi du formulaire dans le local storage 
if(prenomControle() && nomControle() && adresseControle() && villeControle() && mailControle() ) {
localStorage.setItem("coordonnes", JSON.stringify(contact));

// utilisation de fetch pour avoir un id lié a la commande //
 products = [];
 for (let i = 0; i < articlesEnregistre.lstArticles.length; i++) {
    let product = articlesEnregistre.lstArticles[i].article._id;
   products.push(product); 
 }
    fetch("http://localhost:3000/api/teddies/order/", {
       method: "POST",           
       headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
   },
    body: JSON.stringify({products,contact})
       })
       .then( response => response.json()).then(orderId => {       
          localStorage.setItem('responseid', JSON.stringify(orderId));
           document.location.href = "orderstatus.html";
       })       
}else{
   alert("merci de bien remplir le formulaire");
}     
})
