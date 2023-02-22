
//definition
sessionStorage.setItem('onloadAnimationOne','true')
var div = []
//check if it is nesersary to add a NullValue
if(JSON.parse(localStorage.getItem('MovesICanKey'))==null) {
    var addNullValue = ['']
    localStorage.setItem("MovesICanKey", JSON.stringify(addNullValue)); 
}
//define array
var MovesICan=JSON.parse(localStorage.getItem("MovesICanKey"));
//onload start
function start(divid) {
    for(i=0;i<MovesICan.length;i++) {
        div[i] = document.getElementById(divid).innerHTML += `<button type="button" class="list-group-item list-group-item-action designList">${MovesICan[i]}</button>`
    }
}
//add Item to list
function addItem() {
    let input = document.getElementById('inputId').value;
    MovesICan.push(input);
    let del = document.getElementById('inputId').value = null;
}
//reload and save
function reload() {
    localStorage.setItem("MovesICanKey", JSON.stringify(MovesICan));
    setTimeout(function() {
        location.reload();
    },100)
}
