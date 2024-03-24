let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight =="0"){
            height=menu.scrollHeight;
        }

        menu.style.height = height+"px";
    })

})

const bars = document.querySelector(".bars");
const navBar = document.querySelector(".nav-bar");

bars.onclick = function () {
    navBar.classList.toggle("active");
    bars.classList.toggle("cross");
};

let prevScrollPos = window.pageYOffset;

//opciones de header y navbar

//opcion 1  

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (navBar.classList.contains("active")) {
        if (currentScrollPos > 90) {
            navBar.classList.remove("active");
            bars.classList.remove("cross");
        }
    } else {
        if (prevScrollPos > currentScrollPos) {
            navBar.style.lef = "0";
        } else {
            navBar.style.lef = "-200px";  
        }
    }
    
    prevScrollPos = currentScrollPos;
};

//opcion 2 --> quitar el paddin-top (linea 280 de style.css)  .secciones { padding-top: 97px;}

/*
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (navBar.classList.contains("active")) {
        if (currentScrollPos > 90) {
            navBar.classList.remove("active");
            bars.classList.remove("cross");
        }
    } else {
        if (prevScrollPos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-90px";  
        }
    }
    
    prevScrollPos = currentScrollPos;
};
*/