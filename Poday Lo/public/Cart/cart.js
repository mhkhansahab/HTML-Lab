var totalCart = document.getElementById("cart-total");
var totalCount = 0;
var totalPrice = 0;
var allProducts = [];
var all = window.localStorage.getItem("all") || [];
try {
    allProducts = JSON.parse(all);
  }
  catch(err) {
    allProducts = all;
  }
if(allProducts.length >= 1){
    allProducts.forEach(element => {
        var title = element["title"];
        var url = element["url"];
        var price = element["price"];
        var count = element["count"];
        var index = allProducts.indexOf(element);

        var myRow = document.createElement("tr");
        var D1 = document.createElement("td");
        var D1i1 = document.createElement("i");
        var D1i2 = document.createElement("i");
        var D1img = document.createElement("img");

        D1i1.classList.add("fa", "fa-times-circle", "my-remove");
        D1i1.addEventListener("click", myFunction);
        D1i1.setAttribute("aria-hidden",true);
        D1i1.setAttribute("index",index);
        D1img.src = url;
        D1img.className = "table-img"
        D1img.alt = "Product-Image"
        D1i2.innerHTML = title;
        D1.appendChild(D1i1);
        D1.appendChild(D1img);
        D1.appendChild(D1i2);

        var D2 = document.createElement("td");
        var D2i1 = document.createElement("i");
        var D2i2 = document.createElement("i");
        var D2i3 = document.createElement("i");

        D2i1.classList.add("fa", "fa-minus-square","my-icon");
        D2i1.setAttribute("index",index);
        D2i1.addEventListener("click",decFunction);
        D2i1.setAttribute("aria-hidden", true);
        D2i2.innerHTML = count;
        D2i3.classList.add("fa", "fa-plus-square","my-icon");
        D2i3.setAttribute("index",index);
        D2i3.addEventListener("click",incFunction);
        D2i3.setAttribute("aria-hidden", true);
        D2.appendChild(D2i1);
        D2.appendChild(D2i2);
        D2.appendChild(D2i3);
        
        var D3 = document.createElement("td");
        var D3i1 = document.createElement("i");
        var productTotal = count * price;
        D3i1.innerHTML = productTotal;
        D3.appendChild(D3i1);

        myRow.appendChild(D1);
        myRow.appendChild(D2);
        myRow.appendChild(D3);
        document.getElementById("myTable").appendChild(myRow);

        totalCount += count;
        totalPrice += productTotal;

        

    });
    var sp1 = document.createElement("span");
    var sp2 = document.createElement("span");
    sp1.id = "total1";
    sp2.id = "total2";
    sp1.innerHTML = "Total Quantity: " + totalCount;
    sp2.innerHTML = "Total Price: " + totalPrice;
    totalCart.appendChild(sp1);
    totalCart.appendChild(sp2);
}

function decFunction(){
    var index = this.getAttribute("index");
    var count = allProducts[index]["count"];
    if(count > 1){
        allProducts[index]["count"] = count - 1;
        window.localStorage.setItem("all",JSON.stringify(allProducts));
        location.reload();
    }
}
function incFunction(){
    var index = this.getAttribute("index");
    var count = allProducts[index]["count"];
    allProducts[index]["count"] = count + 1;
    window.localStorage.setItem("all",JSON.stringify(allProducts));
    location.reload();
}
document.getElementById("btn1").onclick = () => {
    window.localStorage.clear();
    location.reload();
}

function myFunction(){
    var index = this.getAttribute("index");
    allProducts.splice(index,1);
    window.localStorage.setItem("all",JSON.stringify(allProducts));
    location.reload();
    }

