/* 4. Detect touch motion on the browser. */
function movement(event){
    document.body.insertAdjacentHTML("beforeend", event.toString() + " X= " + event.touches[0].pageX.toString());
    document.body.insertAdjacentHTML("beforeend", " Y= " + event.touches[0].pageY.toString() + "<br>");
}
document.addEventListener("touchstart", movement);
document.addEventListener("touchmove", movement);
document.addEventListener("mousemove",movement);
