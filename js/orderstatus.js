// récupération du local storage //
let articlesEnregistres = JSON.parse(localStorage.getItem("article"));
let coordonnees = JSON.parse(localStorage.getItem("coordonnes"));
 let numeroCommande = JSON.parse(localStorage.getItem("responseid"));

// remerciement et numéro de commande //
let remerciement = document.getElementById("remerciement");
remerciement.innerHTML = `
<p class="fs-2 ">Félicitation, votre commande a bien été enregistrée</p>
 <p> Votre numéro de commande est <strong> ${numeroCommande.orderId}</strong></p>
` 
 let totalProduit = document.getElementById("totalproduit");
             totalProduit.innerHTML = `
             <p>le prix total est de <strong>${articlesEnregistres.PriceTotal}€<strong></p>
             `;

 //supprimer l'ensemble du localstorage //
 localStorage.clear ();