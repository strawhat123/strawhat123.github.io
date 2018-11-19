/* 5. Touch activates a link. I see if click might also. */
var anchor = document.createElement("A");
anchor.setAttribute("href", "javascript:void(0);");
anchor.setAttribute("id", "myLink");
anchor.appendChild(document.createTextNode("Click here to activate the link"));
document.write("<br>");
anchor.addEventListener("touchend", function(){ alert("Touched the link.") });
anchor.addEventListener("click", function(){ alert("Clicked the link.") });
document.body.appendChild(anchor);
document.write("<br>");