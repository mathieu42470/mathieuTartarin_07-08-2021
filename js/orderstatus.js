// récupération du local storage //
let articlesEnregistres = JSON.parse(localStorage.getItem("article"));
let coordonnees = JSON.parse(localStorage.getItem("coordonnes"));
 let numeroCommande = JSON.parse(localStorage.getItem("responseid"));

let remerciement = document.getElementById("remerciement");
remerciement.innerHTML = `
<p class="fs-2 ">Félicitation, votre commande a bien été enregistrée</p>
 <p> Votre numéro de commande est  ${numeroCommande.orderId}</p>
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
 <p> Les articles commandés arriveront chez <strong> ${coordonnees.firstName} ${coordonnees.lastName}</strong></p>
 <p>l'adresse de livraison : <strong> ${coordonnees.address}</strong> à <strong>${coordonnees.city}<strong></p>
 `

 //supprimer l'ensemble du localstorage