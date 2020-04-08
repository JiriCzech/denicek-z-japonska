// VARIABLES

let infoGate = document.querySelector("#info-gate");
let spanGate = document.querySelector("#gate");

let arrowToTop = document.querySelector("#arrow-to-top");
let hr = document.querySelector("hr:first-of-type");
//----------------------------------------------------------------------

// SETUP

// addInfoWindowToElement(infoGate,spanGate);

showOrHideArrow();

arrowToTop.addEventListener("click", ()=>{
    smoothScrollToTop(event);
} )

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY);
    showOrHideArrow();  
} )

//----------------------------------------------------------------------

// FUNCTIONS

function showOrHideArrow(){
    if (window.scrollY < getElementPosition(hr).y){
        arrowToTop.classList.add("hidden");
    }
    else{
        arrowToTop.classList.remove("hidden");
    }
}

//----------------------------------------------------------------------











