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
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.appendChild( document.createTextNode("Hello"));
    return div;
}

const container = document.querySelector('#container');
container.appendChild(createDiv("div1"));
container.appendChild(createDiv("div2"));