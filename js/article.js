main ()
function main(){
    getArticle(getArticleId());
  }

  // parametrage pour prendre l'id de l'article //
  function getArticleId(){
             return new URL(location.href).searchParams.get("id");
  }



// recuperation des articles de nounours //
function getArticle(articleId) {
                fetch(`http://localhost:3000/api/teddies/${articleId}`)
                            .then(response =>(response.json()))
                            .then(article =>{
                              //selection de la couleur//
                              displayArticle(article);
                              article.colors.forEach(color => {
                                 let option = document.createElement('option');
                                 option.textContent = color;
                                 document.getElementById('nomproduit').appendChild(option);
                               });

                            })
                            .catch(error => {
                                           alert("une erreur est survenue"+error)
                            })
                           }


// mise en page de l'article //
function displayArticle(article){
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
   
  let panier = document.getElementById("panier");
    panier.addEventListener("click" ,()=>{

      changepage(article);
      })
}

 function changepage(article){
    // mise en place du local storage//
    let color = document.getElementById('nomproduit').value;
    let articlesEnregistres = JSON.parse(localStorage.getItem("article"));
    if(!articlesEnregistres){
      articlesEnregistres = {};
    }
    if(!articlesEnregistres.lstArticles){
      articlesEnregistres.lstArticles = [];
    }
  
    let obj = articlesEnregistres.lstArticles.find(x => x.article._id == article._id && x.color == color);    
    if(obj != null){      
      articlesEnregistres.lstArticles.splice(articlesEnregistres.lstArticles.indexOf(obj),1);
      articlesEnregistres.lstArticles.push({article : article, color:color, quantite:obj.quantite+1});
    }
    else{      

      articlesEnregistres.lstArticles.push({article : article, color:color, quantite:1});
    }
    // on recalcule le prix total et de chaque article
    calculTotal(articlesEnregistres.lstArticles);

    articlesEnregistres.PriceTotal = calculTotal(articlesEnregistres.lstArticles);
 
    localStorage.setItem("article", JSON.stringify(articlesEnregistres));
  }

  function calculTotal(lstArticles){
    
   let PriceTotal = 0;
    for(var i = 0; i<lstArticles.length;i++){
      // console.log("quantite art "+lstArticles[i].quantite);
      // console.log("price art"+lstArticles[i].price/100);
      // console.log(lstArticles[i]);
      PriceTotal = lstArticles[i].quantite*(lstArticles[i].article.price/100) + PriceTotal;
    }
    return PriceTotal;
  }
 

 
