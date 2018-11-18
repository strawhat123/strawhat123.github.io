/* 12. Fixed Sections */
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