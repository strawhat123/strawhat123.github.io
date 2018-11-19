/* 8. Using the same technique to make dynamic scaling. */
var paragraph = document.createElement("P");
paragraph.appendChild(document.createTextNode("Text size decreases."));
document.head.appendChild(document.createElement("style"));
var sheet = document.styleSheets[0];
var index = sheet.rules.length;
sheet.insertRule("p { font-size:" + 70 + "pt; }", index);
index = sheet.rules.length;
function scaling2(){
    if  ( parseInt( document.styleSheets[0].rules[index-1].style.fontSize ) >= 8) {
        sheet = document.styleSheets[0];
        index = sheet.rules.length;
        console.log("hi");
        sheet.insertRule("p { font-size:" + ( parseInt(document.styleSheets[0].rules[index - 1].style.fontSize) - 0.10) + "pt; }", index);
    }
}
paragraph.addEventListener("mouseover", scaling2);
window.addEventListener("resize", scaling2);
document.body.appendChild(paragraph);
document.write("<br>");