main ();

async function main(){
  let products = await getArticles();
  for (product of products){
                 displayArticle(product);
  }
}
            
// recuperation des articles de nounours //
function getArticles() {
  return fetch("http://localhost:3000/api/teddies")
               .then(function(httpBodyResponse) {
               return httpBodyResponse.json()
               })
               .then(function(products){
                              return products
               })
               .catch(function(error) {
                              alert(error)
               })
              }

// mise en page des articles //
 function displayArticle(product){   
  document.getElementById("produitlist").innerHTML +=`
  <a id="id" class="carte" href="article.html?id=${product._id}">
  <div class="card carte" style="width: 100%;">
   <div class="border-radius h-10 ">
     <img class="image" src="${product.imageUrl}" alt="Image du produit">
   </div
   <div class="card-body">
    <h1 class="list-none"><strong>${product.name}</strong></h1>
     <p class="card-text list-none">${product.description}</p>
     <p class="list-none flex align-items"><strong>${product.price/100}€</strong></p>
   </div>
 </div>
 </div>
  </a>`
}
