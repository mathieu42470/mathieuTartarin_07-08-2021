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
                   <option>nombre de peluche</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                </select>
             </th>
             <th id="prixarticle" class="flex" value="">${articlesEnregistres[a].article.price/100} €</th > 
             <th id="prixArticleTotal" class="flex"> €</th >
          </tr>`;    
          }
             if(a == articlesEnregistres.length){
                listeArticle.innerHTML = panierProduit;
             }
    }


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
<p>le prix total est de <strong>${prixtotal}€<strong></p>`;

// bouton commande //
function boutonCommande(){
   
if( (document.form1.prenom.value != "") && (document.form1.nom.value != "") && (document.form1.mail.value != "") && (document.form1.adresse.value != "") && (document.form1.ville.value != "") ) {
   return true;
   }
   else{
      alert("merci d'afficher tous les champs obligatoire");
      
      return false;
      
   }
}




