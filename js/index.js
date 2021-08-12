main ()

async function main(){
  let articles = await getArticles()
  for (article of articles){
                 displayArticle(article)
  }
}

            

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



 function displayArticle(article){
  document.getElementById("produitlist").innerHTML +=`
   <div class="card list-none ms" style="width: 100%;">
    <img src="http://localhost:3000/images/teddy_1.jpg">
   <div class="card-body">
     <h1 class="list-none"><strong>${article.name}</strong></h1>
     <p class="card-text list-none">${article.description}</p>
     <p class="list-none"><strong>${article.price}€</strong></p>
   </div>
 </div>
 </div>`}
