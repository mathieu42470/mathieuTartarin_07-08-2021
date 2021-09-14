// récupération du local storage //
let articlesEnregistres = JSON.parse(localStorage.getItem("article"));
let coordonnees = JSON.parse(localStorage.getItem("coordonnes"));

let remerciement = document.getElementById("remerciement");
remerciement.innerHTML = `
<p class="fs-2 ">Félicitation, votre commande a bien été enregistrée</p>
<p> Votre numéro de commande est </p>
` 
let produit = document.getElementById("produit");
let panierProduit = [];
    for (v = 0; v < articlesEnregistres.lstArticles.length; v++){
        panierProduit = panierProduit + `
          <tr class="flex justify-content">
             <th class="flex"> nom <strong>${articlesEnregistres.lstArticles[v].article.name}</strong></th >
             <th  class="flex"> couleur <strong>${articlesEnregistres.lstArticles[v].color}</strong></th >
             <th class="flex"> quantite <strong>${articlesEnregistres.lstArticles[v].quantite} </strong></th>
             <th id="prixarticle" class="flex" value=""> prix de l'article <strong>${articlesEnregistres.lstArticles[v].article.price/100}€</strong></th > 
             <th id="prixArticles" class="flex"> prix total de l'article <strong>${articlesEnregistres.lstArticles[v].quantite*(articlesEnregistres.lstArticles[v].article.price/100)} €</strong><br></th >
          </tr>`;  
          }
             if(v == articlesEnregistres.lstArticles.length){
               produit.innerHTML = panierProduit;
             }       
        
 let totalProduit = document.getElementById("totalproduit");
             totalProduit.innerHTML = `
             <p>le prix total est de <strong>${articlesEnregistres.PriceTotal}€<strong></p>
             `;


 let adresse = document.getElementById("adresse");
 adresse.innerHTML = `
 <p> Les articles commandés arriveront chez <strong> ${coordonnees.nom} ${coordonnees.prenom}</strong></p>
 <p>l'adresse de livraison : <strong> ${coordonnees.adresse}</strong> à <strong>${coordonnees.ville}<strong></p>
 `