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
*/
//definition

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






//buttons

function start_planing() {
    window.location = "../sites/choose_skills.html"
}


function load_array(arrayname, divname_outer, lenght_array) { //Bei lenght_array mit 0 zählen heißt einfach alle Werte zählen mit Zero
    var i2 = 0
    let div_container_outer = document.getElementById(divname_outer);
    if (i2==0) {
    //einfügen der benötigten Elemente
        for ( let i=0; i<lenght_array; i++) {
            div_container_outer.innerHTML += `<a href="#" class="list-group-item list-group-item-action" id="addClass"></a>`
            let addClass_value = document.getElementById('addClass').classList.add('list_item_',i);
            let div_container_inner = document.getElementsByTagName('a')[i];
            div_container_inner.innerHTML += arrayname[i];
            i2 = 1
        }
    }
}

