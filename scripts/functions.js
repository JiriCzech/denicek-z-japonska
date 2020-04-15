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
    element.addEventListener("mouseleave", ()=>{
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

// SMOOTH SCROLL TO TOP

function smoothScrollToTop(event){
    event.preventDefault();

    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let durotation = 800;
    let start = null;

    window.requestAnimationFrame(step);

    //One animation step
    function step(timestamp){
        if (!start) start = timestamp;
        const progress = timestamp - start;

        //animation here

        //linera
        // window.scrollTo(0,distance*(progress/durotation) + startPosition);

        // In out quat
        window.scrollTo(0,Math.easeInOutQuad(progress,startPosition,distance,durotation));

        if (progress < durotation) window.requestAnimationFrame(step);
    }
}
//-----------------------------------------------------------------------------------------------------------

// EASING FUNCTION 


Math.linearTween = function (t, b, c, d) {
	return c*t/d + b;
};

Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

// source: http://gizma.com/easing/#l

//-----------------------------------------------------------------------------------------------------------