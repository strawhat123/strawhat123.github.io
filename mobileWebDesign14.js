
/* 11. Horizontal Scrolling */
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