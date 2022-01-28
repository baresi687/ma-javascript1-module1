// 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// 3

heading.style.fontSize = "2em";

// 4

heading.classList.add("subheading");

// 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function someListFunction(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

someListFunction(cats);

// 8

function createCats(cats) {
  let catObject = "";
  for (let i = 0; i < cats.length; i++) {
    let catName = cats[i].name;
    let catAge = cats[i].age ? cats[i].age : "Age unknown";

    catObject += `
    <div>
    <h5>${catName}</h5>
    <p>${catAge}</p>
    </div>
    `;
  }
  return catObject;
}

let newCats = createCats(cats);

let catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newCats;
