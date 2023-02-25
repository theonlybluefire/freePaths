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



function startTraining(conditions) {
    //define WarmUp
    var div = []
    var WarmUp = [
        'run up and down'
        ,'go 10 times up-and downstairs'
        ,'do some strethings'
    ]
    
    var MovesIMastered=JSON.parse(localStorage.getItem("MovesIMasteredKey"));
    var MovesICan=JSON.parse(localStorage.getItem("MovesICanKey"));
    var MovesIWantToLearn=JSON.parse(localStorage.getItem("MovesIWantToLearnKey"));
    
    //algorithmus
    if(conditions=='good') {
        //warm up
            let WarmUpRandom = []
            let WarmUpRandomValue = Math.random() * WarmUp.length -1;
            WarmUpRandomValue = Math.round(WarmUpRandomValue+0.5);
            console.log(WarmUpRandomValue)
            WarmUpRandom.push(WarmUp[WarmUpRandomValue])
            //warm up pick 2. warm up move and push
            WarmUpRandomValue = Math.random() * WarmUp.length-1;
            WarmUpRandomValue = Math.round(WarmUpRandomValue+0.5);
            console.log(WarmUpRandomValue)
            WarmUpRandom.push(WarmUp[WarmUpRandomValue])
            //warm up pick 3. warm up move and push
            WarmUpRandomValue = Math.random() * WarmUp.length-1;
            WarmUpRandomValue = Math.round(WarmUpRandomValue+0.5);
            console.log(WarmUpRandomValue)
            WarmUpRandom.push(WarmUp[WarmUpRandomValue])
            //warm up pick 4. warm up move and push
            WarmUpRandomValue = Math.random() * WarmUp.length-1;
            WarmUpRandomValue = Math.round(WarmUpRandomValue+0.5);
            console.log(WarmUpRandomValue)
            WarmUpRandom.push(WarmUp[WarmUpRandomValue])
            //put into the div and visualize
            for(i=0;i<WarmUpRandom.length;i++) {
                div[i] = document.getElementById('WarmUp').innerHTML += `<button type="button" class="list-group-item list-group-item-action designList">${WarmUpRandom[i]}</button>`
            }
        //MovesIMastered Section
            let MovesIMasteredRandom = []
            let MovesIMasteredRandomValue = Math.random() * MovesIMastered.length -1
            MovesIMasteredRandomValue = Math.round(MovesIMasteredRandomValue+0.5)
            MovesIMasteredRandom.push(MovesIMastered[MovesIMasteredRandomValue])
            //2.
            MovesIMasteredRandomValue = Math.random() * MovesIMastered.length -1
            MovesIMasteredRandomValue = Math.round(MovesIMasteredRandomValue+0.5)
            MovesIMasteredRandom.push(MovesIMastered[MovesIMasteredRandomValue])
            //3
            MovesIMasteredRandomValue = Math.random() * MovesIMastered.length -1
            MovesIMasteredRandomValue = Math.round(MovesIMasteredRandomValue+0.5)
            MovesIMasteredRandom.push(MovesIMastered[MovesIMasteredRandomValue])
            //put it into the div
            for(i=0;i<MovesIMasteredRandom.length;i++) {
                div[i] = document.getElementById('MovesIMastered').innerHTML += `<button type="button" class="list-group-item list-group-item-action designList">${MovesIMasteredRandom[i]}</button>`
            }
        //MovesICan
            let MovesICanRandom = []
            let MovesICanRandomValue = Math.random() * MovesICan.length-1
            MovesICanRandomValue = Math.round(MovesICanRandomValue+0.5)
            MovesICanRandom.push(MovesICan[MovesICanRandomValue])
            for(i=0;i<MovesICanRandom.length;i++) {
                div[i] = document.getElementById('MovesICan').innerHTML += `<button type="button" class="list-group-item list-group-item-action designList">${MovesICanRandom[i]}</button>`
            } 
        //MovesIWantToLearn
            let MovesIWantToLearnRandom = []
            let MovesIWantToLearnRandomValue = Math.random() * MovesIWantToLearn.length
            MovesIWantToLearnRandomValue = Math.round(MovesIWantToLearnRandomValue)
            console.log(MovesIWantToLearnRandomValue)
            MovesIWantToLearnRandom.push(MovesIWantToLearn[MovesIWantToLearnRandomValue])
            console.log(MovesIWantToLearnRandom)
            let divTwo = document.getElementById('MovesIWantToLearn').innerHTML += `<button type="button" class="list-group-item list-group-item-action designList">${MovesIWantToLearnRandom}</button>`

}
}