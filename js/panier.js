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
                <select id="valueNounours" name="number" value="nombredepeluche" "class="flex">
                <option value="nounourscommander">${articlesEnregistres[a].quantite}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                </select>
             </th>
             <th id="prixarticle" class="flex" value="">${articlesEnregistres[a].article.price/100} €</th > 
             <th id="prixArticleTotal" class="flex">${prixArticles =(articlesEnregistres[a].article.price/100)*articlesEnregistres[a].quantite} €</th >
          </tr>`;    
          }
             if(a == articlesEnregistres.length){
                listeArticle.innerHTML = panierProduit;
             }
} 

function prixTotal(prixArticles){
for (l = 0; l <prixArticles.length; l++){
   let prixTotal = prixArticles[l];
   console.log("le prix est de",prixArticles)
}
const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
const prixtotal = prixArticles[l].reduce(reducer,0);
let totalPanier = document.getElementById("totalprix")
totalPanier.innerHTML = `
<p>le prix total est de <strong>${prixTotal}€<strong></p>`;
 prix = [];
    prix.push({prixTotal});
   let  prix = JSON.parse(localStorage.getItem("prix"));
    localStorage.setItem("prix", JSON.stringify(prix));
    console.log("le prix est de", prixTotal);
}

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


// function prixTotal(prixArticles){
//    for (x = 0; x < prixArticles.length; x++){
//    if(prixArticles[x] != null){
//        let prixArt = parseInt(prixArticles[x]);
//       prix =  prix + prixArticles[x];
//       console.log("je suis là", prixArticles[x]);
//    }else{
//    }
//    let totalPanier = document.getElementById("totalprix");
//   totalPanier.innerHTML = `
// <p>le prix total est de <strong>${prixTotalPanier()}€<strong></p>`;
// }
// }


