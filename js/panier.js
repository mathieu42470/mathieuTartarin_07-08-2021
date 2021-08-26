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
          <div class=" flex justify-content ml-1 col-12">
           <div class="flex"> ${articlesEnregistres[k].article.name}</div>
           <div class="flex"> ${articlesEnregistres[k].color}</div>
           <select name="nombre"class="flex">
           <option value="nombre de peluche">nombre de peluche</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
              </select>
           <div class="flex"> ${articlesEnregistres[k].article.price/100} €</div>
           <div class="flex">
           </div>
          </div> `                                       
         }   
}

// calcul prix total //

function prixArticleTotal(){
let prixArticleTotal = document.getElementById("prixtotal");
for(let prixArticleTotal = 0; l <articlesEnregistres.length; l++){
   let prixArticleTotal = articlesEnregistres[l].article.price;
   prixTotalPanier.push(prixArticleTotal)
}
const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
const prixtotal = prixTotalPanier.reduce(reducer,0);

}