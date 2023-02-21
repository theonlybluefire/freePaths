//add Item
var selfAddedValues = [
]
var div = []



function addItem() {
    let input = document.getElementById('inputId').value;
    selfAddedValues.push(input);
    localStorage.setItem("selfAddedValuesKey", JSON.stringify(selfAddedValues));
}
function start(divid) {
    var selfAddedValues = JSON.parse(localStorage.getItem("selfAddedValuesKey"));
    for(i=0;i<selfAddedValues.length;i++) {
        div[i] = document.getElementById(divid).innerHTML += `<button type="button" class="list-group-item list-group-item-action">${selfAddedValues[i]}</button>`
    }
}















/*
function addItem() {
    let input = document.getElementsByTagName('input')[0].value
    console.log('Value added : ',input);
    selfAddedValues.push(input);
    console.log('Value pushed in Array, Array : ', input)
    localStorage.setItem("selfAddedValues", JSON.stringify(input));
    console.log('data saved')
    //const data = JSON.parse(localStorage.getItem("selfAddedValues"));
}


function start(divid){
    console.log(JSON.parse(localStorage.getItem("selfAddedValues")));
    var selfAddedValues = JSON.parse(localStorage.getItem("selfAddedValues"));
    console.log('Array after saving and searching : ',selfAddedValues)
    for(i=0;i<selfAddedValues.length;i++) {
        div[i] = document.getElementById(divid).innerHTML += `<button type="button" class="list-group-item list-group-item-action">${selfAddedValues[i]}</button>`
    }
}*/
