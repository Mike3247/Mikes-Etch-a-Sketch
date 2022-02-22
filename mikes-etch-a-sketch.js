/*
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));
*/
function createDiv(namenumber1) {
    let div = document.createElement('div');
    div.textcontent = namenumber1;
    div.style.width = "37.5px";
    div.style.height = "37.5px";
    div.style.background = "red";
    div.style.color = "white";
    div.style.border = "groove";
    div.appendChild( document.createTextNode("Hello"));
    return div;
}

const container = document.querySelector('#container');
for (var i = 0; i < 256; i++) { 
    container.appendChild(createDiv("div"));
}

// need to find out how to add "id" attribute to JS-built divs //
/*
const element = document.querySelector("#box");

element.addEventListener("mouseover", event => {
  console.log("Mouse in");
});

element.addEventListener("mouseout", event => {
  console.log("Mouse out");
});
*/