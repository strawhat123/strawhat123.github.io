/* 3. Notice changes in phone orientation. */
window.addEventListener("orientationchange", function(){ alert("web page orientation change.") });
window.addEventListener("resize", function(){ alert("web page resize.") }, true);

/* 4. Detect touch motion on the browser.
function movement(event){
    document.body.insertAdjacentHTML("beforeend", event.toString() + " X= " + event.pageX.toString());
    document.body.insertAdjacentHTML("beforeend", " Y= " + event.pageY.toString() + "<br>");
    console.log(event.toString() + " X= " + event.pageX.toString());
    console.log(" Y= " + event.pageY.toString());
}
document.addEventListener("touchmove", movement);
document.addEventListener("mousemove",movement);
*/

/* 5. Touch activates a link. I see if click might also.
var anchor = document.createElement("A");
anchor.setAttribute("href", "javascript:void(0);");
anchor.setAttribute("id", "myLink");
anchor.appendChild(document.createTextNode("Click here to activate the link"));
document.write("<br>");
anchor.addEventListener("touchend", function(){ alert("Touched the link.") });
anchor.addEventListener("click", function(){ alert("Clicked the link.") });
document.body.appendChild(anchor);
document.write("<br>");
*/

/* Sliding event

Here I will show a quick swiping event
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
 */

/* mobile menu
    var menu = document.createElement("button");
    menu.setAttribute("class","collapsible");
    var menu_name = document.createTextNode("Menu  ");
    menu.appendChild(menu_name);
    var menu_arrow = document.createElement("arrow");
    menu_arrow.setAttribute("class","down");
    menu.appendChild(menu_arrow);
    var menu_section = document.createElement("div");
    menu_section.setAttribute("class","links");
    menu_section.setAttribute("style","max-height:100%");
    menu_section.appendChild(document.createTextNode("link1"));
    document.body.appendChild(menu);
    document.body.appendChild(menu_section);
    var col1 = document.getElementsByClassName("collapsible")[0];
    col1.addEventListener("click", function() {
            if (this.getElementsByTagName("arrow")[0].getAttribute("class") === "up"){
                this.getElementsByTagName("arrow")[0].setAttribute("class","down");
            }
            else{
                this.getElementsByTagName("arrow")[0].setAttribute("class","up");
            }
            var content = this.nextElementSibling;
            if ( content.style.maxHeight ) {
                content.style.maxHeight = null;
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    document.styleSheets[0].insertRule(".collapsible{\n" +
        "        padding: 0 10px;\n" +
        "        width: 100%;\n" +
        "        border: none;\n" +
        "        text-align: left;\n" +
        "        outline: none;\n" +
        "        font-size: 14pt;\n" +
        "        margin: 5px 0;\n" +
        "        white-space: nowrap;\n" +
        "    }");
    document.styleSheets[0].insertRule("arrow {" +
        "        border: solid black;\n" +
        "        border-width: 0 3px 3px 0;\n" +
        "        display: inline-block;\n"+
        "        padding: 3px;\n" +
        "    }");
    document.styleSheets[0].insertRule(".up {\n" +
        "        transform: rotate(-135deg);\n" +
        "        -webkit-transform: rotate(-135deg);\n" +
        "    }\n");
    document.styleSheets[0].insertRule(".down {\n" +
        "        transform: rotate(45deg);\n" +
        "        -webkit-transform: rotate(45deg);\n" +
        "    }\n");
    document.styleSheets[0].insertRule(".links{\n" +
        "        padding: 0 10px;\n" +
        "        max-height: 0;\n" +
        "        overflow: hidden;\n" +
        "        transition: max-height 0.2s ease-out;\n" +
        "        font-size: 14pt;\n" +
        "    }\n");
 */

/* 6. Change width and height from flat values to percentages.
document.head.appendChild(document.createElement("style"));
sheet.insertRule("body { width:100px; height: 200px;", 0);
function scaling(){
     document.styleSheets[0].insertRule("body { width:100%; height: 100%", document.styleSheets[0].rules.length);
}
*/

/* 7. Go into the styleSheets of a document. I create a CSS stylesheet, and make new rules on the fly.
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
*/

/* 8. Using the same technique to make dynamic scaling.
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
*/

/* Redirect
 if ( screen.width < 480 ){
   location.href = "mobile.html";
 }
 */

/* 9. Condense a website by setting the display rule to none or block.
var more = document.createElement("A");
more.appendChild(document.createTextNode("Show more"));
more.setAttribute("href", "javascript:showMore();");
more.setAttribute("id", "show-more-link");
var more_content = document.createElement("div");
more_content.setAttribute("id", "more-content");
more_content.setAttribute("style","display:none;");
more_content.appendChild(document.createTextNode("This is some more text to show up."));
document.body.appendChild(more);
document.body.appendChild(more_content);
function showMore(){
    document.getElementById('show-more-link').parentElement.removeChild(document.getElementById('show-more-link'));
    document.getElementById('more-content').style.display = "block";
}
*/

/* 10. Navigation Menu
var menu = document.createElement("a");
    var icon1_1 = document.createElement("div");
    icon1_1.setAttribute("class","line");
    var icon1_2 = document.createElement("div");
    icon1_2.setAttribute("class","line");
    var icon1_3 = document.createElement("div");
    icon1_3.setAttribute("class","line");
    menu.setAttribute("href","javascript:void(0);");
    menu.setAttribute("class","btn-open");
    menu.setAttribute("id","icon");
    menu.appendChild(icon1_1);
    menu.appendChild(icon1_2);
    menu.appendChild(icon1_3);
    var overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");
    var wrap = document.createElement("div");
    wrap.setAttribute("class", "wrap");
    wrap.appendChild(document.createTextNode("This is the menu."));
    wrap.appendChild(menu);
    wrap.innerHTML += "<br> The Menu.";
    var links = document.createElement("ul");
    var link1 = document.createElement("a");
    link1.setAttribute("href", "#");
    link1.appendChild(document.createTextNode("item 1"));
    var link2 = document.createElement("a");
    link2.setAttribute("href", "#");
    link2.appendChild(document.createTextNode("item 2"));
    var link3 = document.createElement("a");
    link3.setAttribute("href", "#");
    link3.appendChild(document.createTextNode("item 3"));
    links.appendChild(link1);
    links.innerHTML += " ";
    links.appendChild(link2);
    links.innerHTML += " ";
    links.appendChild(link3);
    wrap.appendChild(links);
    overlay.appendChild(wrap);
    var mainpage = document.createElement("div");
    mainpage.setAttribute("class","content");
    mainpage.innerHTML += "Click on menu icon.";
    document.body.innerHTML += "This is the mobile page.";
    document.body.appendChild(menu);
    document.body.appendChild(overlay);
    document.body.appendChild(mainpage);
    window.addEventListener("load", function(){
        var button = document.getElementById("icon");
        button.addEventListener("click",function() {
            var menu = document.getElementsByClassName("overlay")[0];
            if (menu.style.display === "block") {
                menu.style.display = "none";
            }
            else {
                menu.style.display = "block";
            }
            var button = document.getElementById("icon");
            button.setAttribute("class", "btn-close");
        });

        var menu = document.getElementsByClassName("overlay")[0];
        menu.addEventListener("click", function(){
            if (menu.style.display === "block") {
                menu.style.display = "none";
            }
            else {
                menu.style.display = "block";
            }
            var button = document.getElementById("icon");
            button.setAttribute("class", "btn-close");
            open = false;
        });
    });
    document.styleSheets[0].insertRule("body {\n" +
        "        margin:0;\n" +
        "        padding:0;\n" +
        "        background:#fff;\n" +
        "        font-family:sans-serif;\n" +
        "        font-size:12px;\n" +
        "    }\n");

    document.styleSheets[0].insertRule("ul {\n" +
        "        margin:0;\n" +
        "        padding:0;\n" +
        "        text-decoration:none;\n" +
        "        list-style:none;\n" +
        "    }");

    document.styleSheets[0].insertRule("#icon {\n" +
        "        display:inline;\n" +
        "        position:absolute;\n" +
        "        right:50px;\n" +
        "        top:6px;\n" +
        "        z-index:999;\n" +
        "        font-size:30px;\n" +
        "    }");

    document.styleSheets[0].insertRule(".line {\n" +
        "        width: 35px;\n" +
        "        height: 5px;\n" +
        "        background-color: black;\n" +
        "        margin: 6px 0;\n" +
        "    }");

    document.styleSheets[0].insertRule(".overlay {\n" +
        "        display:none;\n" +
        "        position:fixed;\n" +
        "        top:0px;\n" +
        "        right: 0px;\n" +
        "        height:20%;\n" +
        "        width:20%;\n" +
        "        min-height: 300px;\n" +
        "        min-width: 400px;\n" +
        "        background:#333;\n" +
        "        overflow:auto;\n" +
        "        z-index:99;\n" +
        "    }");

    document.styleSheets[0].insertRule(".wrap {\n" +
        "        color:#e9e9e9;\n" +
        "        text-align:center;\n" +
        "        max-width:90%;\n" +
        "        margin:0 auto;\n" +
        "    }");

    document.styleSheets[0].insertRule(".content {\n" +
        "        width:100%;\n" +
        "        margin-top:200px;\n" +
        "        font-size:20px;\n" +
        "        color#333;\n" +
        "        text-align: center;\n" +
        "    }");
 */

/* 11. Horizontal Scrolling
var bar = document.createElement("div");
    bar.setAttribute("class", "bar");
    var bar_menu = document.createElement("div");
    bar_menu.setAttribute("class", "bar-menu");
    var nav = document.createElement("nav");
    var link1 = document.createElement("a");
    link1.setAttribute("href", "javascript:void(0)");
    link1.appendChild(document.createTextNode("link1"));
    var link2 = document.createElement("a");
    link2.setAttribute("href", "javascript:void(0)");
    link2.appendChild(document.createTextNode("link2"));
    var link3 = document.createElement("a");
    link3.setAttribute("href", "javascript:void(0)");
    link3.appendChild(document.createTextNode("link3"));
    var link4 = document.createElement("a");
    link4.setAttribute("href", "javascript:void(0)");
    link4.appendChild(document.createTextNode("link4"));
    var link5 = document.createElement("a");
    link5.setAttribute("href", "javascript:void(0)");
    link5.appendChild(document.createTextNode("link5"));
    var link6 = document.createElement("a");
    link6.setAttribute("href", "javascript:void(0)");
    link6.appendChild(document.createTextNode("link6"));
    var link7 = document.createElement("a");
    link7.setAttribute("href", "javascript:void(0)");
    link7.appendChild(document.createTextNode("link7"));
    var link8 = document.createElement("a");
    link8.setAttribute("href", "javascript:void(0)");
    link8.appendChild(document.createTextNode("link8"));
    var link9 = document.createElement("a");
    link9.setAttribute("href", "javascript:void(0)");
    link9.appendChild(document.createTextNode("link9"));
    var link10 = document.createElement("a");
    link10.setAttribute("href", "javascript:void(0)");
    link10.appendChild(document.createTextNode("link10"));
    var link11 = document.createElement("a");
    link11.setAttribute("href", "javascript:void(0)");
    link11.appendChild(document.createTextNode("link11"));
    var link12 = document.createElement("a");
    link12.setAttribute("href", "javascript:void(0)");
    link12.appendChild(document.createTextNode("link12"));
    var link13 = document.createElement("a");
    link13.setAttribute("href", "javascript:void(0)");
    link13.appendChild(document.createTextNode("link13"));
    var link14 = document.createElement("a");
    link14.setAttribute("href", "javascript:void(0)");
    link14.appendChild(document.createTextNode("link14"));
    var link15 = document.createElement("a");
    link15.setAttribute("href", "javascript:void(0)");
    link15.appendChild(document.createTextNode("link15"));
    var link16 = document.createElement("a");
    link16.setAttribute("href", "javascript:void(0)");
    link16.appendChild(document.createTextNode("link16"));
    var link17 = document.createElement("a");
    link17.setAttribute("href", "javascript:void(0)");
    link17.appendChild(document.createTextNode("link17"));
    var link18 = document.createElement("a");
    link18.setAttribute("href", "javascript:void(0)");
    link18.appendChild(document.createTextNode("link18"));
    var link19 = document.createElement("a");
    link19.setAttribute("href", "javascript:void(0)");
    link19.appendChild(document.createTextNode("link19"));
    var link20 = document.createElement("a");
    link20.setAttribute("href", "javascript:void(0)");
    link20.appendChild(document.createTextNode("link20"));
    var link21 = document.createElement("a");
    link21.setAttribute("href", "javascript:void(0)");
    link21.appendChild(document.createTextNode("link21"));
    nav.appendChild(link1);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link2);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link3);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link4);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link5);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link5);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link6);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link7);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link8);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link9);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link10);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link11);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link12);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link13);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link14);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link15);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link16);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link17);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link18);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link19);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link20);
    nav.innerHTML += '&nbsp;&nbsp;&nbsp;';
    nav.appendChild(link21);
    bar_menu.appendChild(nav);
    bar.appendChild(bar_menu);
    document.body.appendChild(bar);
    document.styleSheets[0].insertRule(".bar {\n" +
        "            width: 400px;\n" +
        "            height:auto;\n" +
        "            border: 1px solid #aaa;\n" +
        "            overflow: hidden;\n" +
        "        }");
    document.styleSheets[0].insertRule(".bar-menu {\n" +
        "            height: 100%;\n" +
        "            margin-bottom: -50px;\n" +
"            padding-bottom: 50px; \n" +
"            overflow-y: hidden;\n" +
"            overflow-x: scroll;\n" +
"        }");
document.styleSheets[0].insertRule("nav {\n" +
    "            white-space: nowrap;\n" +
    "        }");
*/

/* 12. Fixed Sections
    document.styleSheets[0].insertRule(".dot {\n" +
        "            height: 50px;\n" +
        "            width: 50px;\n" +
        "            background-color: #bbb;\n" +
        "            border-radius: 50%;\n" +
        "            display: inline-block;\n" +
        "            right:50px;\n" +
        "            top:400px;\n" +
        "            position: -webkit-sticky;\n" +
        "            position:sticky;\n" +
        "            z-index:999;\n" +
        "            overflow-x: hidden;\n" +
        "        }");
    var button = document.createElement("span");
    button.setAttribute("class", "dot");
    document.body.appendChild(button);
    window.addEventListener("load", function() {
        console.log("loaded.");
        document.getElementsByClassName("dot")[0].addEventListener("click",
            function(){
                alert("button clicked.");
            })
    });
    document.body.innerHTML += "a " +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "b" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "c" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "d" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "e";

 */

/* Scaled/Proportional Content
    var outer = document.createElement("div");
    outer.setAttribute("class", "outer");
    var inner = document.createElement("div");
    inner.setAttribute("class", "inner");
    var box = document.createElement("div");
    box.setAttribute("class","little-box");
    box.appendChild(document.createTextNode("Web Content"));
    inner.appendChild(box);
    outer.appendChild(inner);
    document.body.appendChild(outer);
    document.styleSheets[0].insertRule(".outer {\n" +
        "            position: relative;\n" +
        "            margin: auto;\n" +
        "            width: 100%;\n" +
        "            padding-top: 75%; \n" +
        "        }\n");
    document.styleSheets[0].insertRule(".outer .inner {\n" +
        "            position: absolute;\n" +
        "            top: 0;\n" +
        "            left: 0;\n" +
        "            right: 0;\n" +
        "            bottom: 0;\n" +
        "            outline: 1px solid grey;\n" +
        "        }");
    document.styleSheets[0].insertRule(".little-box {\n" +
        "            margin:auto;\n" +
        "            outline: 1px solid steelblue;\n" +
        "            width: 25%;\n" +
        "            height: 33.333%;\n" +
        "            position: relative;\n" +
        "            top: 33.333%;\n" +
        "            text-align:center;\n" +
        "        }");
 */