//add Item
var selfAddedValues = ['test'
]
var div = []



function addItem() {
    let ItemInput = document.getElementsByTagName('input')[0].value;
    console.log(ItemInput);
    console.log('added value');
    selfAddedValues.push(ItemInput);
    console.log(selfAddedValues);
    localStorage.setItem("selfAddedValues", JSON.stringify(selfAddedValues));

    //const data = JSON.parse(localStorage.getItem("selfAddedValues"));
}


function start(divid){
    console.log(JSON.parse(localStorage.getItem("selfAddedValues")));
    var selfAddedValues = JSON.parse(localStorage.getItem("selfAddedValues"));
    console.log(selfAddedValues)
    for(i=0;i<selfAddedValues.length;i++) {
        div[i] = document.getElementById(divid).innerHTML += `<button type="button" class="list-group-item list-group-item-action">${selfAddedValues[i]}</button>`
    }
}
