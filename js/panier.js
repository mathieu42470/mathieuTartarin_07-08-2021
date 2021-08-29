// récuperation du local storage//
   let articlesEnregistres = JSON.parse(localStorage.getItem("article"));
   // let color = JSON.parse(localStorage.getItem("article"));
 

// mise en place panier//
let paniercommande =document.getElementById("articlecommande");

if(articlesEnregistres == null){
}else{

 
          let panierProduit = [];
          for (k = 0; k <articlesEnregistres.length; k++){
           let listeArticle = document.getElementById("listearticle");
          listeArticle.innerHTML +=`
   <tr class="flex justify-content">
             <th class="flex"> ${articlesEnregistres[k].article.name}</th >
             <th  class="flex"> ${articlesEnregistres[k].color}</th >
             <th>
                <select name="number" value="nombredepeluche" "class="flex">
                   <option>nombre de peluche</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                </select>
             </th>
             <th class="flex" value="">${articlesEnregistres[k].article.price/100} €</th > 
             <th class="flex"> €</th >
            </tr>
           `;
    }
}
            




// calcul prix total //

function prixArticleTotal(){
let prixArticleTotal = document.getElementById("prixtotal");
for (l = 0; l <articlesEnregistres.length; l++){
   let prixArticleTotal = articlesEnregistres[l].article.price;
   prixTotalPanier.push(prixArticleTotal);
}
const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
const prixtotal = prixTotalPanier.reduce(reducer,0);
}


//activation du bouton de commande//
function boutonCommande(){
   let  = document.getElementById(boutonCommande);
   if(boutonCommande){
      
   }
}