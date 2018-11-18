/* Scaled/Proportional Content */
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