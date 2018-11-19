/* Sliding event

Here I will show a quick swiping event */
document.addEventListener('touchstart', beginSwipe, false);
document.addEventListener('touchmove', swipe, false);
var xDown;
var yDown;
function beginSwipe(event) {
    xDown = event.pageX;
    yDown = event.pageY;
};

function swipe(event) {
    if ( ! xDown || ! yDown ) {
        return;
    }
    var xUp = event.pageX;
    var yUp = event.pageY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            document.body.insertAdjacentHTML("beforeend", "Swipe left");
        } else {
            document.body.insertAdjacentHTML("beforeend", "Swipe right");
        }
    } else {
        if ( yDiff > 0 ) {
            document.body.insertAdjacentHTML("beforeend", "Swipe up");
        } else {
            document.body.insertAdjacentHTML("beforeend", "Swipe down");
        }
}
xDown = null;
yDown = null;
};