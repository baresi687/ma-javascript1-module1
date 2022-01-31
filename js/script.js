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
    console.log("The cat name is: " + list[i].name);
  }
}

someListFunction(cats);

// 8

function createCats(cats) {
  let catObject = "";
  for (let i = 0; i < cats.length; i++) {
    catObject += `
      <div>
      <h5>Cat name: ${cats[i].name}</h5>
      <p>Cat age: ${cats[i].age ? cats[i].age : "Age unknown"}</p>
      </div>
      `;
  }
  return catObject;
}

const newCats = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newCats;
