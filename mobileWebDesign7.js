/* mobile menu */
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