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
  div.style.width = "9.6px";
  div.style.height = "9.6px";
  div.style.background = "red";
  div.style.color = "red";
  //div.style.border = "groove";
  div.classList = "256"; 
  //div.appendChild( document.createTextNode("Hello"));
  return div;
};

const container = document.querySelector('#container');
for (var i = 0; i < 10000; i++) { 
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
if (item.style.background = "red") item.style.background = "green";
  else (the256divsArray.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.background = "red";
    })
  })
  ); 
}) 
});

const tryagain = document.querySelector(".tryagain");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  if (tryagain.style.color != "red") tryagain.style.color = "red";
    else if (tryagain.style.color = "red") tryagain.style.color = "blue";
});
// btn.addEventListener("click", function () {
//   document.querySelector("div").style.backgroundColor = "red";
//   the256divsArray.forEach((item) => {
//     item.style.backgroundColor = "red";
//   });
// });
btn.addEventListener("click", function() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
};
});

btn.addEventListener("click", function () {
  let numberOfSquares =  prompt("You are invited to choose the number of squares per side of the grid for this next round", "x >= 64");
  if (numberOfSquares > 100 || numberOfSquares < 1) return;  // plug this value to call a function that will appendChild(creatDiv("div")) * the number of divs requested by the user
    const container = document.querySelector('#container');
    for (var j = 0; j < (numberOfSquares**2); j++) { 
      function reCreateDiv(namenumber1) {
        let div = document.createElement("div");
        div.textcontent = namenumber1;
        div.style.width = "9.6px";
        div.style.height = "9.6px";
        div.style.background = "red";
        div.style.color = "red";
        //div.style.border = "groove";
        div.classList = "256"; 
        //div.appendChild( document.createTextNode("Hello"));
        return div;
      };
      container.appendChild(reCreateDiv("div"));
  };
  const the256divs = document.getElementsByClassName("256");

const the256divsArray = Array.from(the256divs);

console.log(the256divsArray);
  
  the256divsArray.forEach((item) => {
    item.addEventListener("mouseover", () => {
    if (item.style.background = "red") item.style.background = "green";
      else (the256divsArray.forEach((item) => {
        item.addEventListener("mouseover", () => {
          item.style.background = "red";
        })
      })
      ); 
    }) 
    });

  

});
//   btn.addEventListener("click", function () {
//     document.querySelector('#container');You are invited to choose the number of squares per side of the grid for this next round", "x >= 64")
//     the256divsArray.forEach((item) => {
//       const secondcontainer = document.querySelector('#container');
// for (var i = 0; i < 100; i++) { 
//     secondcontainer.appendChild(createDiv("div"));
// };
//       item.style.width = "37.5px";
//       item.style.height = "37.5px";

//     });
//   });
////////// trying to re-populate grid with different number of squares
////////// and with new size of squares
////////// so far this code simply added tons of new squares
////////// lengthening the page vertically to a ridiculous
////////// length. (MS 2022/04/02)

/// trying to find a way to "clear" the grid back to start form
/// i.e. all red with white TextNode of "hello".
/// trying to figure out how to eventlisten to mouseover
      ///// more than once (2022/04/01)
  //console.log("mouseover")
///// trying to figure out how to select call EventListener
 ////// against the 256 divs as event targets (MS - 2022/03/31)
                              /// achieved (MS - 2022/04/01)

// the256divsArray.forEach((item) => {
//   item.addEventListener("mouseout", () => {
//     item.style.background = "red";
//       //console.log("mouseout")
//     })  
//   });  



// the256divsArray.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     item.style.background = "red";
//   })
// });

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
