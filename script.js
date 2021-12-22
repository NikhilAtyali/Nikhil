const Books = document.getElementById("books-dropdown");

const add = document.getElementById("add-button");

const result = document.getElementById("result-button");

const price = document.getElementById("price-input");

let table = document.getElementById("books-table");

let row = 1;

//for adding books, prices to the table
const addBook = () => {
  console.log("added");

  let bookName = Books.value;
 

  let bookPrice = price.value;
  

  let newRow = table.insertRow(row);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  cell1.innerHTML = Books.value;
  cell2.innerHTML = `Rs.${price.value}`;

  console.log(newRow);
  row++;
  alert(`${Books.value} added and the price is Rs.${price.value}`);
  price.value = "";
};

add.addEventListener("click", addBook);

const displayList = () => {
  document.getElementById("books-table").style.display = "block";
};
result.addEventListener("click", displayList);
