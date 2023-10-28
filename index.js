let sidebar = document.getElementById('sidebar')
let header = document.getElementById('header')
let image = sidebar.innerHTML

sidebar.onclick= sidebars

function sidebars() {
    console.dir(header);
    if (header.style.display == "") {
        header.style.display = 'flex'
    } else {
        
        header.style.display = ''
    }
}