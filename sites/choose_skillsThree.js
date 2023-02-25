
//definition

var div = []
//check if it is nesersary to add a NullValue
if(JSON.parse(localStorage.getItem('MovesIWantToLearnKey'))==null) {
    var addNullValue = ['']
    localStorage.setItem("MovesIWantToLearnKey", JSON.stringify(addNullValue)); 
}
//define array
var MovesIWantToLearn=JSON.parse(localStorage.getItem("MovesIWantToLearnKey"));
//onload start
function start(divid) {
    for(i=0;i<MovesIWantToLearn.length;i++) {
        div[i] = document.getElementById(divid).innerHTML += `<button type="button" class="list-group-item list-group-item-action designList">${MovesIWantToLearn[i]}</button>`
    }
}
//add Item to list
function addItem() {
    let input = document.getElementById('inputId').value;
    MovesIWantToLearn.push(input);
    let del = document.getElementById('inputId').value = null;
}
//reload and save
function reload() {
    localStorage.setItem("MovesIWantToLearnKey", JSON.stringify(MovesIWantToLearn));
    setTimeout(function() {
        location.reload();
    },100)
}
function fadeOut(){
    let body = document.getElementById('body').classList.add('fadeOut')
    setTimeout(function() {
        window.location= "dashboard/dashboard.html"
    },150)
}
netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.on('login', user => console.log('login', user));
    netlifyIdentity.on('logout', () => console.log('Logged out'));
    netlifyIdentity.on('error', err => console.error('Error', err));
    netlifyIdentity.on('open', () => console.log('Widget opened'));
    netlifyIdentity.on('close', () => console.log('Widget closed'));
    setTimeout(function(){
        const user = netlifyIdentity.currentUser();
        if(user==null) {
            window.location = "../error/error.html"
        }
    },200)