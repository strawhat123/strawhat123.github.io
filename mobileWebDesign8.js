/* 6. Change width and height from flat values to percentages. */
document.head.appendChild(document.createElement("style"));
document.styleSheets[0].insertRule("body { width:100px; height: 200px; border-style: solid;", 0);
document.body.appendChild(document.createTextNode("content"));
function scaling(){
     document.styleSheets[0].insertRule("body { width:95%; height: 95%", document.styleSheets[0].rules.length);
}
setTimeout(scaling,2000);