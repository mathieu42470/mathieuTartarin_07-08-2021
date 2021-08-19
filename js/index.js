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
  <a id="id" href="article.html?id=${article._id}">
  <div class="card list-none ms border-radius my-1 pl-2" style="width: 100%;">
   <div class="border-radius h-10 ">
     <img class="h-10 flex border-radius" src="${article.imageUrl}" alt="Image du produit">
   </div
   <div class="card-body">
    <h1 class="list-none"><strong>${article.name}</strong></h1>
     <p class="card-text list-none">${article.description}</p>
     <p class="list-none flex align-items"><strong>${article.price/100}€</strong></p>
   </div>
 </div>
 </div>
  </a>`
}
