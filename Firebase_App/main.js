const db = firebase.firestore();

var list = document.getElementById("userList");
var infoForm = document.getElementById("info-form");

function itemsGetter(doc){

    li = document.createElement("li");
    span1 = document.createElement("span");
    span2 = document.createElement("span");
    div1 = document.createElement("div");
    li.setAttribute("doc-id",doc.id);

    span1.textContent = doc.data().name;
    span2.textContent = doc.data().city;
    div1.textContent = "x";
    div1.className= "del";

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(div1);
    list.appendChild(li);

    div1.addEventListener('click',(e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("doc-id");
        db.collection("users").doc(id).delete();
    });
}
// db.collection("users").orderBy("name").get().then((snapshot) =>{
//     snapshot.docs.forEach(doc => {
//         itemsGetter(doc);
//     })
// })

db.collection("users").orderBy("name").onSnapshot((snapshot)=>{
    let changes = snapshot.docChanges();
    changes.forEach((change)=>{
        if(change.type == "added"){
            itemsGetter(change.doc);
        }else if(change.type == "removed"){
            let li1 = list.querySelector("[doc-id=" + change.doc.id + "]");
            list.removeChild(li1);
        }
    })
})
infoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("users").add({
        name: infoForm.username.value,
        city: infoForm.city.value
    });
    infoForm.username.value = "";
    infoForm.city.value = "";
})
