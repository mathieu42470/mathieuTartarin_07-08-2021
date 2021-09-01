// récuperation du local storage//
   let articlesEnregistres = JSON.parse(localStorage.getItem("article"));
  
 

// mise en place panier//
    let listeArticle = document.getElementById("listearticle");


    if(articlesEnregistres === null){
       let panierVide = `
       <p> le panier est vide</p>`;
       listeArticle.innerHTML = panierVide;
    }else{
          let panierProduit = [];
          for (a = 0; a < articlesEnregistres.length; a++){
           panierProduit = panierProduit +`
          <tr class="flex justify-content">
             <th class="flex"> ${articlesEnregistres[a].article.name}</th >
             <th  class="flex"> ${articlesEnregistres[a].color}</th >
             <th>
                <select id="valueNounours" name="number" value="nombredepeluche" "class="flex">${articlesEnregistres[a].quantite.value}</select>
             </th>
             <th id="prixarticle" class="flex" value="">${articlesEnregistres[a].article.price/100} €</th > 
             <th id="prixArticleTotal" class="flex"> €</th >
          </tr>`;    
          }
             if(a == articlesEnregistres.length){
                listeArticle.innerHTML = panierProduit;
             }
    }
// prix total article //
let prixTotalArticle = [];
let prixArticle = document.querySelector("#prixarticle");
prixArticle = articlesEnregistres.price/100;
let nombreNounours = document.querySelector("#valueNounours");
   nombreNounours.value = 1;
   prixTotalArticle = nombreNounours.value*prixArticle;
  let totalArticle = document.querySelector("#ArticleTotal")
  totalArticle.innerHTML = `
  <p>${ArticleTotal} €</p>`;



// prix total panier //      
let prixTotalPanier = [];
for (l = 0; l <articlesEnregistres.length; l++){
   let prixArticleTotal = articlesEnregistres[l].article.price/100;
   prixTotalPanier.push(prixArticleTotal);
   
}
const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
const prixtotal = prixTotalPanier.reduce(reducer,0);
let totalPanier = document.getElementById("totalprix")
totalPanier.innerHTML = `
<p>le prix total est de <strong>${prixTotal()}€<strong></p>`;


//evennement de click pour le bouton commande//
document.forms["form1"].addEventListener("submit" ,function(e){
let erreur;
let inputs = this;
for(i = 0; i < inputs.length; i++){
   if(!inputs[i].value){
      erreur = "merci de remplir tous les champs obligatoire";
   }
}
if(erreur){
   e.preventDefault();
   document.getElementById("erreur").innerHTML= erreur;
   return false;
}
   else{ 
     window.location = "../orderstatus.html";
     return true;
   }
})


function prixTotal(prixArticles){
         console.log(prixArticles);
   if(prixArticles != null){
      console.log("le prix est de "+prix)
      let prixArt = parseInt(prixArticles);
      prix =  prix + prixArt;
   }
   return prix;
}



