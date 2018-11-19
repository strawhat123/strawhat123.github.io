/* 7. Go into the styleSheets of a document. I create a CSS stylesheet, and make new rules on the fly. */
document.head.appendChild(document.createElement("style"));
document.styleSheets[0].insertRule("p { font-size: 8pt; }");
var paragraph = document.createElement("P");
paragraph.appendChild(document.createTextNode("Text size increases."));
size = 10;
var scaling = function(){
    if (size <= 60) {
        sheet = document.styleSheets[0];
        index = sheet.rules.length;
        if (index > 0){
            sheet.deleteRule(0);
            index = sheet.rules.length;
        }
        sheet.insertRule("p { font-size:" + size.toString() + "pt; }", index);
        size += 2;
    }
};
paragraph.addEventListener("mouseover", scaling);
window.addEventListener("resize", scaling);
document.body.appendChild(paragraph);
document.write("<br>");
if (screen.width < 480 )
    scaling();
