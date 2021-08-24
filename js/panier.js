// récuperation du local storage//
   let articlesEnregistres = JSON.parse(localStorage.getItem("article"));

 

// mise en place panier//
let paniercommande =document.getElementById("articlecommande");

if(articlesEnregistres == null){
}else{
           let panierProduit = [];
           for (k = 0; k <articlesEnregistres.length; k++){
           let listeArticle = document.getElementById("listearticle");
           listeArticle.innerHTML +=`
          <div class=" flex justify-content ml-1 col-12">
           <div class="flex"> ${articlesEnregistres[k].name}</div>
           <select name="nombre"class="flex">
           <option value="">nombre de peluche</option>
           <option value="dog">1</option>
           <option value="cat">2</option>
           <option value="hamster">3</option>
           <option value="parrot">4</option>
           <option value="spider">5</option>
           <option value="goldfish">6</option>
              </select>
           <div class="flex"> ${articlesEnregistres[k].price/100} €</div>
           <div class="flex"> </div>
           </div> `                                       
           }   
}
