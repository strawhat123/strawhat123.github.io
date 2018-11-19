/* 9. Condense a website by setting the display rule to none or block. */
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