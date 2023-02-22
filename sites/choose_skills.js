
var div = []
if(JSON.parse(localStorage.getItem('selfAddedValuesKey'))==null) {
    var addSomething = ['']
    localStorage.setItem("selfAddedValuesKey", JSON.stringify(addSomething)); 
}
var selfAddedValues=JSON.parse(localStorage.getItem("selfAddedValuesKey"));

function start(divid) {
    for(i=0;i<selfAddedValues.length;i++) {
        div[i] = document.getElementById(divid).innerHTML += `<button type="button" class="list-group-item list-group-item-action">${selfAddedValues[i]}</button>`
    }
}


function addItem() {
    let input = document.getElementById('inputId').value;
    console.log('inputValue',input);
    selfAddedValues.push(input);
    console.log('Array after push', selfAddedValues);
    input.value = "";
}

function reload() {
    localStorage.setItem("selfAddedValuesKey", JSON.stringify(selfAddedValues));
    console.log('localStorage Entry',JSON.parse(localStorage.getItem("selfAddedValuesKey")));
    setTimeout(function() {
        location.reload();
    },100)
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
