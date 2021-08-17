main ()
async function main(){
  let articleId =  getArticleId();
  let article = await getArticle(articleId);
  displayArticle(article);
  }

  // parametrage pour prendre l'id de l'article //
  function getArticleId(){
             return new URL(location.href).searchParams.get("id")
  }



// recuperation des articles de nounours //
function getArticle(articleId) {
               return fetch(`http://localhost:3000/api/teddies/${articleId}`)
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
             

// mise en page de l'article //
function displayArticle(article){
               document.getElementById("produitlist").innerHTML +=`
                <div class="card list-none ms border-radius my-1" style="width: 100%;">
                <h1 class="flex center list-none"><strong>${article.name}</strong></h1>
                 <img class="border-radius h-10 " src="${article.imageUrl}">
                <div class="card-body flex justify-content">
                  <p class="card-text list-none">${article.description}</p>
                  <p class="list-none"><strong>${article.price}€</strong></p>
                </div>
                <div class="flex justify-content border-radius">
                     <p class="border-radius border">${article.colors[0]}</p>
                     <p class="border-radius border">${article.colors[1]}</p>
                     <p class="border-radius border">${article.colors[2]}</p>
                     <p class="border-radius border">${article.colors[3]}</p>
                </div>
              </div>
              </div>`
             }
             