var db = firebase.firestore();
var newDiv = document.getElementById("cards-container-s");

//Plants DB Working
db.collection("plants").get().then((snapshot) => {
    
    snapshot.docs.forEach(doc =>{
        var name = doc.data().name;
        var url = doc.data().url;
        var price = doc.data().price;
        var cardDiv = document.createElement("div");
        var cardImg = document.createElement("img");
        var cardHR = document.createElement("hr");
        var cardName = document.createElement("span");
        var cardPrice = document.createElement("span");
        var cardBtn = document.createElement("button");

        cardDiv.setAttribute("doc-id" , doc.id);
        cardDiv.className = "card-s";
        cardImg.src = url;
        cardImg.className = "card-image-s";
        cardName.innerHTML = name;
        cardName.className = "card-name-s";
        cardPrice.innerHTML = "Rs. " + price;
        cardPrice.className = "card-name-s";
        cardBtn.className = "card-btn-s";
        cardBtn.innerHTML = "Add To Cart";

        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardHR);
        cardDiv.appendChild(cardName);
        cardDiv.appendChild(cardPrice);
        cardDiv.appendChild(cardBtn);
        newDiv.appendChild(cardDiv);
        cardBtn.onclick = addtoCart;
    })
    })
    function addtoCart(){
        var allProducts = [];
        var my = JSON.parse(window.localStorage.getItem('all'));
        allProducts = my || [];
    
        var my_title = this.parentNode.childNodes[2].textContent;
        var my_url = this.parentNode.childNodes[0].src;
        var my_price = this.parentNode.childNodes[3].textContent.slice(4);
        
        allProducts.push({"title":my_title,"url":my_url,"price": my_price,"count":1});
        window.localStorage.setItem("all",JSON.stringify(allProducts));
        
        
        alert("Item Added to Cart");
    }

//  if (localStorage.clickcount) {
//      localStorage.clickcount = Number(localStorage.clickcount) + 1;
//    } else {
//      localStorage.clickcount = 1;
//    }
//    console.log("You have clicked the button " +
//    localStorage.clickcount + " time(s).");


//allProducts = JSON.parse(window.localStorage.getItem('all')) || [];
        