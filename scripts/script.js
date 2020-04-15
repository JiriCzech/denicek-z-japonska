// VARIABLES
let articleDivs = document.querySelectorAll(".article-container div");

articleDivs.forEach(div =>{

    div.onmouseover = ()=>{div.classList.add("selected")};
    div.onmouseout = ()=>{div.classList.remove("selected")};

})
