
function gotoHome(){
    window.location.href = "../index.html"
}

function addtoCart(){
    let id = this.parentElement.parentElement.getAttribute("doc-id");
    console.log(id);
}

function singleCategory(cat){
    window.location.href = "../Category/category.html"
    sessionStorage.setItem("page",cat)
}
function singleCategory2(cat){
    window.location.href = "Category/category.html"
    sessionStorage.setItem("page",cat)
}