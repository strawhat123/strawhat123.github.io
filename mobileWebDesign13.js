/* 10. Navigation Menu */
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