main ()

async function main(){
  let articles = await getArticles()
  for (article of articles){
                 displayArticle(article)
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
                              alert(Error)
               })
              }


// mise en page des articles //
 function displayArticle(article){
  document.getElementById("produitlist").innerHTML +=`
   <div class="card list-none ms border-radius my-1" style="width: 100%;">
    <img class="border-radius h-10 " src="${article.imageUrl}">
   <div class="card-body">
     <h1 class="list-none"><strong>${article.name}</strong></h1>
     <p class="card-text list-none">${article.description}</p>
     <p class="list-none"><strong>${article.price}€</strong></p>
   </div>
 </div>
 </div>`}
