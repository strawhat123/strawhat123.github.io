
/* Redirect */
 if ( screen.width < 480 ){
   location.href = "index.html";
 }


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