main ();

async function main(){
  let articles = await getArticles();
  for (article of articles){
                 displayArticle(article);
  }
}
            
// recuperation des articles de nounours //
function getArticles() {
  return fetch("http://localhost:3000/api/teddies")
               .then(function(httpBodyResponse) {
               return httpBodyResponse.json()
               })
               .then(function(articles){
                              return articles
               })
               .catch(function(error) {
                              alert(error)
               })
              }

// mise en page des articles //
 function displayArticle(article){   
  document.getElementById("produitlist").innerHTML +=`
  <a id="id" class="carte" href="article.html?id=${article._id}">
  <div class="card carte" style="width: 100%;">
   <div class="border-radius">
     <img class="image" src="${article.imageUrl}" alt="Image du produit">
   </div
   <div class="card-body">
    <h1 class="nomarticle"><strong>${article.name}</strong></h1>
     <p class="card-text description">${article.description}</p>
     <p class="nomarticle"><strong>${article.price/100}€</strong></p>
   </div>
 </div>
 </div>
  </a>`
}
