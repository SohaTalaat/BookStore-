// Dom Elements

let booksGrid = document.getElementById("booksGrid");
let booksGrid2 = document.getElementById("booksGrid2");
let viewAll = document.getElementById("viewAll");

//  Event Listeners

document.addEventListener("DOMContentLoaded", loadNew);
document.addEventListener("DOMContentLoaded", loadBest);
viewAll.addEventListener("click", loadMoreBooks);
function loadMoreBooks() {}

// Extract API Data

function loadNew() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var book = xhr.responseText;
      displayNew(book);
    }
  };
  var url = "https://openlibrary.org/search.json?q=new+releases&limit=5";
  xhr.open("get", url, true);
  xhr.send();
}
function displayNew(p) {
  var jsonData = JSON.parse(p);
  var bookData = jsonData.docs;
  for (let i = 0; i <= bookData.length; i++) {
    // Create book Container
    var bookCard = document.createElement("div");
    bookCard.className = "book-card";
    var bookImage = document.createElement("img");
    bookImage.className = "book-cover";
    var coverId = jsonData.docs[i].cover_i;
    bookImage.src = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
    bookCard.appendChild(bookImage);

    // Create Info Card
    let bookInfo = document.createElement("div");
    bookInfo.className = "book-info";
    let bookTitle = document.createElement("h3");
    bookTitle.className = "book-title";
    bookTitle.innerText = jsonData.docs[i].title;
    let bookAuthor = document.createElement("p");
    bookAuthor.className = "book-author";
    bookAuthor.innerText = `By ${jsonData.docs[i].author_name}`;

    // Create Spacer
    let spacer = document.createElement("div");
    spacer.className = "spacer";

    //Add To Cart Button
    let addToCard = document.createElement("button");
    addToCard.className = "add-cart";
    addToCard.innerText = "Add To Cart";

    // Append Data
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookCard.appendChild(bookInfo);
    bookInfo.appendChild(spacer);
    bookInfo.appendChild(addToCard);
    booksGrid2.append(bookCard);
  }
}
// BestSellers Section
// Extract API Data

function loadBest() {
  var xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange = function () {
    if (xhr2.readyState == 4 && xhr2.status == 200) {
      var book = xhr2.responseText;
      displayBest(book);
    }
  };
  var url = "https://openlibrary.org/search.json?q=bestsellers&limit=5";
  xhr2.open("get", url, true);
  xhr2.send();
}
function displayBest(p) {
  var jsonData = JSON.parse(p);
  var bookData = jsonData.docs;
  for (let i = 0; i <= bookData.length; i++) {
    // Create book Container
    var bookCard = document.createElement("div");
    bookCard.className = "book-card";
    var bookImage = document.createElement("img");
    bookImage.className = "book-cover";
    var coverId = jsonData.docs[i].cover_i;
    bookImage.src = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
    bookCard.appendChild(bookImage);

    // Create Info Card
    let bookInfo = document.createElement("div");
    bookInfo.className = "book-info";
    let bookTitle = document.createElement("h3");
    bookTitle.className = "book-title";
    bookTitle.innerText = jsonData.docs[i].title;
    let bookAuthor = document.createElement("p");
    bookAuthor.className = "book-author";
    bookAuthor.innerText = `By ${jsonData.docs[i].author_name}`;

    // Create Spacer
    let spacer = document.createElement("div");
    spacer.className = "spacer";

    //Add To Cart Button
    let addToCard = document.createElement("button");
    addToCard.className = "add-cart";
    addToCard.innerText = "Add To Cart";

    // Append Data
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookCard.appendChild(bookInfo);
    bookInfo.appendChild(spacer);
    bookInfo.appendChild(addToCard);
    booksGrid.append(bookCard);
  }
}
