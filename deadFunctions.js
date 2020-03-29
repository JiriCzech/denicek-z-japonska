function createAreaExtender(){

    let areaExtender = document.createElement("div");
    areaExtender.style.position = "absolute";
    areaExtender.classList.add("area-extender");
    document.body.appendChild(areaExtender);

    return areaExtender;
}