let booksGrid = document.getElementById("booksGrid");
let booksGrid2 = document.getElementById("booksGrid2");
let addToCart;
let bookInfo;
let book;
//  Event Listeners

document.addEventListener("DOMContentLoaded", loadNew);
document.addEventListener("DOMContentLoaded", loadBest);
document.addEventListener("click", addToLocalStorage);
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
  var url = "https://openlibrary.org/search.json?q=new+releases&limit=10";
  xhr.open("get", url, true);
  xhr.send();
}
function displayNew(p) {
  var jsonData = JSON.parse(p);
  var bookData = jsonData.docs;
  for (let i = 0; i < bookData.length; i++) {
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
    let addToCart = document.createElement("button");
    addToCart.className = "add-cart";
    addToCart.innerText = "Add To Cart";

    // Append Data
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookCard.appendChild(bookInfo);
    bookInfo.appendChild(spacer);
    bookInfo.appendChild(addToCart);
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
  var url = "https://openlibrary.org/search.json?q=bestsellers&limit=10";
  xhr2.open("get", url, true);
  xhr2.send();
}
function displayBest(p) {
  var jsonData = JSON.parse(p);
  var bookData = jsonData.docs;
  for (let i = 0; i < bookData.length; i++) {
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
    let addToCart = document.createElement("button");
    addToCart.className = "add-cart";
    addToCart.innerText = "Add To Cart";

    // Append Data
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookCard.appendChild(bookInfo);
    bookInfo.appendChild(spacer);
    bookInfo.appendChild(addToCart);
    booksGrid.append(bookCard);
  }
}

//  Event functions
function addToLocalStorage(e) {
  if (e.target.classList.contains("add-cart")) {
    const bookCard = e.target.closest(".book-card");
    const title = bookCard.querySelector(".book-title").innerText;
    const imageSrc = bookCard.querySelector(".book-cover").src;

    const book = {
      title: title,
      image: imageSrc,
    };

    // Initialize Array
    let cart = [];

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    // Add book to cart
    cart.push(book);

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}