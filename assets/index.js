/* Rules : 
Blocks
0 Lines for blocks (things who belong together)
1 Line for things in one big group, but who don't belong together
2 Lines for seperat blocks, who aren't in a group

Headings
Group Blocks heading will be written 1 Line before the other blocks
Normal heading in or out of a group will be written 0 Lines before the block
*/

/*
//deklaration arrays/variable
var moves = ['turnVault', 'reverseVault']


//addToArray
function addtoArray(arrayname, input_id) {
    let input = document.getElementById(input_id).value;
    arrayname.push(input_id);
}


//get/set from Local Storage
function addArraytoLocalStorage(arrayname, localStorageName) {
    window.localStorage.clear()
    window.localStorage.setItem(localStorageName, arrayname);
}
function getArrayfromLocalStorage(arrayname, localStorageName) {
    arrayname = null
    arrayname = window.localStorage.getItem(localStorageName);
    window.localStorage.clear
}

//output
function output(js_output, id_to_add) {
    let add_to_HTML = document.getElementById(id_to_add).innerHTML += `
    ${js_output}
    `
}









function load_array(arrayname, divname_outer, lenght_array, function_for_onclick) { 
    if(clicked=='false') {
        let div_container_outer = document.getElementById(divname_outer);
        for ( var i=0; i<lenght_array; i++) {
            div_container_outer.innerHTML += `<a href="#" class="list-group-item list-group-item-action" id="addClass"></a>`
            let addClass_value = document.getElementsByTagName('a')[i].classList.add(i);
            let div_container_inner = document.getElementsByTagName('a')[i];
            div_container_inner.innerHTML += arrayname[i];  
        }
        Basic_movements_onclick[i] = document.getElementsByTagName('a')[0].onclick = function() {
            if (Basic_movements_onclick_clicked[0] == false) {
                Basic_movements_onclick_clicked_color[0] = document.getElementsByTagName['a'][0].style.backgroundColor = "green";
                //ich möchte bei jedem Element eine neue Funktion einrichten, allerdings wird somit ein limit gegeben 

            }
        
        }
    clicked = 'true';
    }
}
function checked(test) {
    console.log(test);
}
*/
//init netlify identity



//onload
function onload() {
    if(window.sessionStorage.getItem('loaded')=='true') {
        
        let removeClassOne = document.getElementById('removeOne').classList.remove('onloadOne');
        let removeClassTwo = document.getElementById('removeTwo').classList.remove('onloadTwo');
        let removeClassThree = document.getElementById('body').classList.remove('onloadThree');
        let removeClassFour = document.getElementById('removeFour').classList.remove('onloadFour');
    
        
    }
    else {
        window.sessionStorage.setItem('loaded','true');
    }

    netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.on('login', user => console.log('login', user));
    netlifyIdentity.on('logout', () => console.log('Logged out'));
    netlifyIdentity.on('error', err => console.error('Error', err));
    netlifyIdentity.on('open', () => console.log('Widget opened'));
    netlifyIdentity.on('close', () => console.log('Widget closed'));
    setTimeout(function(){
        const user = netlifyIdentity.currentUser();
    },200)

}
//animations
function buttonAni(id,side) {
    let button = document.getElementById(id)
    button.classList.add('buttonAni');
    setTimeout(function() {
        window.location = side;
    },350)
}
//button start
function startPlaning() {
    const user = netlifyIdentity.currentUser();
    if(user==!null) {
        window.location = '../sites/choose_skills.html'

    }
    else{
        netlifyIdentity.open('login')
    }
}














//definition
let clicked ='false'
var Basic_movements = [
    'Landing',
    'Parkour Roll',
    'Cat Leap',
    'Dash Vault',
    'Monkey Vault',
    'Kong Vault',
    'Speed Vault',
    'Kash Vault',
    'Two Handed Vault',
    'Turn Vault',
    'Precision Jump',
    'Lazy Vault',
    'Reverse Vault',
    'Underbar',
    'Tic Tac',
    'strides']
var self_aded_values = [

]
var Basic_movements_onclick = [

]
var Basic_movements_onclick_clicked = [

]
var Basic_movements_onclick_clicked_color

//buttons


//Array
function addItem() {
    let ItemInput = document.getElementsByTagName('input')[0].value;
    console.log(ItemInput);
    console.log('added value');
    self_aded_values.push(ItemInput);
    window.localStorage.setItem('self_aded_values',self_aded_values);

}
function loadArraySelf() {
    self_aded_values = localStorage.getItem('self_aded_values');
    console.log(self_aded_values);
    lenght_array = 2
    if(clicked=='false') {
        let div_container_outer = document.getElementById('self_added_values_list');
        for ( var i=0; i<lenght_array; i++) {
            div_container_outer.innerHTML += `<a href="#" class="list-group-item list-group-item-action" id="addClass"></a>`
            let addClass_value = document.getElementsByTagName('a')[i].classList.add(i);
            let div_container_inner = document.getElementsByTagName('a')[i];
            div_container_inner.innerHTML += self_aded_values[i];  
        }
    clicked = 'true';
    }
}


