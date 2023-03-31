if(localStorage.getItem('ifStarted')=='true') {
    if(window.localStorage.getItem('dashboardForwarding')=='true') {
        window.location="sites/dashboard/dashboard.html"
    }
    else {
        window.location="assets/index.html"
    }
}
function start() {
    localStorage.setItem('ifStarted','true');
    window.location = "assets/index.html"
}