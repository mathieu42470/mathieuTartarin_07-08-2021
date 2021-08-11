main ()

async function main(){
               let articles = await getArticles()
               for (article of articles){
                              displayArticle(article);
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
               let elt = document.getElementById("produitlist");
              elt.innerHTML += 
                ` <a href="../article.html" class="card list-none" style="width: 18rem;">
                <p class="card-img-top"> <img src="${article.imageUrl}" alt="image d'un nounours"></p>
               <div class="card-body">
                 <h1 class="list-none"><strong>${article.name}</strong></h1>
                 <p class="card-text list-none">${article.description}</p>
                 <p class="list-none"><strong>${article.price}€</strong></p>
               </div>
             </div>
             </a>` }
