//onload
function onload() {
    if(window.sessionStorage.getItem('loaded')=='true') {
        let removeClassOne = document.getElementById('removeOne').classList.remove('onloadOne');
        let removeClassTwo = document.getElementById('removeTwo').classList.remove('onloadTwo');
        let removeClassThree = document.getElementById('body').classList.remove('onloadThree');
        let removeClassFour = document.getElementById('removeFour').classList.remove('onloadFour');
        let removeClassFive = document.getElementById('removeFive').classList.remove('onloadFive');
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
    //animated start button
    var buttonToAnimate = document.getElementById("startButton");
    buttonToAnimate.addEventListener('mousemove', e => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      buttonToAnimate.style.setProperty('--x', x + 'px');
      buttonToAnimate.style.setProperty('--y', y + 'px');
    });
}
//animations
function buttonAni(id,side) {
    let button = document.getElementById(id)
    button.classList.add('buttonAni');
    
    setTimeout(function() {
        let body = document.getElementById('body').classList.add('disappear')
        setTimeout(function() {
            window.location='../sites/choose_skills.html'
        },450)
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



