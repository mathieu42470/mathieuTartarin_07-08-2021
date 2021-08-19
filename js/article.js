main ()
async function main(){
    let article = await getArticle(getArticleId());
    displayArticle(article);
  }

  // parametrage pour prendre l'id de l'article //
  function getArticleId(){
             return new URL(location.href).searchParams.get("id");
  }



// recuperation des articles de nounours //
function getArticle(articleId) {
               return fetch(`http://localhost:3000/api/teddies/${articleId}`)
                            .then(function(httpBodyResponse) {
                            return httpBodyResponse.json()
                            })
                            .then(function(articles){
                              //selection de la couleur//
                               articles.colors.forEach(color => {
                                 let option = document.createElement('option');
                                 option.textContent = color;
                                 document.getElementById('nomproduit').appendChild(option);


                               });
                                           return articles
                            })
                            .catch(function(error) {
                                           alert(Error)
                            })
                           }
             

// mise en page de l'article //
function displayArticle(article){
  console.log(article);
               document.getElementById("produitlist").innerHTML +=`
                <div class="card list-none ms border-radius my-1" style="width: 100%;">
                <h1 class="flex center list-none"><strong>${article.name}</strong></h1>
                 <img class="border-radius h-11 flex align " src="${article.imageUrl}"/>
                <div class="card-body flex justify-content">
                  <p class="card-text list-none">${article.description}</p>
                  <p class="list-none"><strong>${article.price/100}€</strong></p>
                </div>
              </div>
              </div>` 
              }


             