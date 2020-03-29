// GET ELEMENT POSITION
function getElementPosition(element){

    let box = element.getBoundingClientRect();
    return {
        x: box.left + window.pageXOffset,
        y: box.top + window.pageYOffset,
        width: box.width,
        height: box.height,
        box: box
    }
}
//----------------------------------------------------------------------------------------------

// ADD INFOWINDOW TO ELEMENT 
function addInfoWindowToElement(window, element){

    let myTimeOut;
    let timeToHide = 250;
    
    // Hepling function
    function hideWindowAfter(time){
        myTimeOut = setTimeout(() => {
            window.style.display = "none";
        }, time);
    }//----------------------------------------------------------------------
    
    // Element mouseenter
    element.addEventListener("mouseenter", ()=>{

        window.style.display = "flex";
        let position = getElementPosition(element);
        // console.log(position);
        let windowWidth = getElementPosition(window).width;
        // console.log(infoWidth);
        window.style.top = position.y + position.height *1.3 + "px";
        window.style.left = position.x -(windowWidth/2) + (position.width/2) +"px";
    
        clearTimeout(myTimeOut);
    })//----------------------------------------------------------------------

    // Element mouseleave
    spanGate.addEventListener("mouseleave", ()=>{
        hideWindowAfter(timeToHide);
    })//----------------------------------------------------------------------

    // Window mouseenter
    window.addEventListener("mouseenter", ()=>{
        clearTimeout(myTimeOut);
    })//----------------------------------------------------------------------

    // Windou mouseleave
    window.addEventListener("mouseleave", ()=>{
        hideWindowAfter(timeToHide)
    })
} 
//-----------------------------------------------------------------------------------------------------------



