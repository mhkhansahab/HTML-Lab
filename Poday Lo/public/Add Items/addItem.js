var db = firebase.firestore();
var addButton = document.getElementById("myButton");

addButton.onclick = addData;

function addData(){
    var name = document.getElementById("fname");
    var url = document.getElementById("url");
    var price = document.getElementById("price");
    var option = document.getElementById("opt");
    if(name.value !== "" && url.value !== "" && price.value !== "" && option.value !== ""){
        if(option.value === "plants"){
            db.collection("plants").add({
                name: name.value,
                url : url.value,
                price : price.value,
            });
        }
        else if(option.value === "seeds"){
            db.collection("seeds").add({
                name: name.value,
                url : url.value,
                price : price.value,
            });
        }
        else if(option.value === "pots"){
            db.collection("pots").add({
                name: name.value,
                url : url.value,
                price : price.value,
            });
        }
        else if(option.value === "gtools"){
            db.collection("gtools").add({
                name: name.value,
                url : url.value,
                price : price.value,
            });
        }
        else{
            db.collection("snf").add({
                name: name.value,
                url : url.value,
                price : price.value,
            });
        }
        name.value = "";
        url.value = "";
        price.value = "";
        option.value = "";
        alert("Added");
    }else{
        alert("Enter all values carefully");
    }
}
