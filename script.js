// add letter
const letter = document.createElement("span");
letter.innerHTML = "a";
letter.setAttribute("class", "letter");

// add box
const box = document.createElement("div");
box.setAttribute("class", "box");

// add boxes
const boxList = document.createElement("div");
boxList.setAttribute("class", "boxList");
for (let i = 0; i < 3; i++) {
  const boxItem = document.createElement("div");
  boxItem.setAttribute("class", "box");
  boxList.appendChild(boxItem);
}

// add app
let app = document.getElementById("root");
app.appendChild(letter);
app.appendChild(boxList);
// app.appendChild(box);
