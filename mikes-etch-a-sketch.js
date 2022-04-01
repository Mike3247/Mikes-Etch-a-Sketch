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
    let div = document.createElement("div");
    div.textcontent = namenumber1;
    div.style.width = "37.5px";
    div.style.height = "37.5px";
    div.style.background = "red";
    div.style.color = "white";
    div.style.border = "groove";
    div.classList = "256"; 
    div.appendChild( document.createTextNode("Hello"));
    return div;
};

const container = document.querySelector('#container');
for (var i = 0; i < 256; i++) { 
    container.appendChild(createDiv("div"));
};


document.querySelector("div").addEventListener(
  "mouseover", () => {
        
  document.querySelector("div").style.background = "blue";
  //console.log("mouseover");
});

document.querySelector("div").addEventListener(
  "mouseout", function () {
        
  document.querySelector("div").style.background = "green";
  //console.log("mouseout");
});

/*
document.querySelectorAll(".256").forEach(item => { 
  item.addEventListener("mouseover", function () {
    document.querySelectorAll(".256").forEach(item => { 
      item.style.background = "blue";})
    })
*/

const the256divs = document.getElementsByClassName("256");

const the256divsArray = Array.from(the256divs);

console.log(the256divsArray);

the256divsArray.forEach((item) => {
item.addEventListener("mouseover", () => {
  item.style.background = "green";
    //console.log("mouseover")
  })  ///// trying to figure out how to select call EventListener
});   ////// against the 256 divs as event targets

the256divsArray.forEach((item) => {
  item.addEventListener("mouseout", () => {
    item.style.background = "red";
      //console.log("mouseout")
    })  
  });  


// the256divsArray.forEach(alert);
// the256divsArray.forEach((item, index, array) => {
//   alert(`${item} is at index ${index} in ${array}`);
// });

// the256divsArray.map() // trying to figure out how 
                      //to call the array.map 
//function to iterate through each item of the 
//array and return ?an event listener?
// mayber forEach is a more adequate
// or works and map does not for this
// I dont know yet

// addEventListener(
//   "mouseover", function () {
        
//   document.getElementsByClassName("256").style.background = "blue";
//   console.log("mouseover");
// })


// math randomization code for random color selection: color[Math.floor(Math.random() * color.length)]  //
/*

var dynamicdivs = document.getElementsByTagName("div");

Array.from(dynamicdivs);

console.log(dynamicdivs);

dynamicdivs[1].style.background = "blue";
*/
/*
dynamicdivs.slice(1, 5).addEventListener("mouseover", event => {
  console.log("Mouse in");

});

dynamicdivs.slice(1, 5).addEventListener("mouseout", event => {
  console.log("Mouse out");
});
*/
