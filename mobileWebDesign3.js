/* 3. Notice changes in phone orientation. */
window.addEventListener("orientationchange", function(){ alert("web page orientation change.") });
window.addEventListener("resize", function(){ alert("web page resize.") }, true);