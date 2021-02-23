var url = "https://api.datamuse.com/words?ml=ringing+in+the+ears&max=4";

fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function my() {
    // Your code for handling the data you get from the API
    alert("get the result");
})
.catch(function my() {
    // This is where you run code if the server returns any errors
    alert("get the result");
});