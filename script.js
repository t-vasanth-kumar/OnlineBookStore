// Sample data for featured books with details and online image links
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: "$12.99",
        image: "https://example.com/gatsby.jpg" // Replace with actual online image link
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: "$10.99",
        image: "https://example.com/mockingbird.jpg" // Replace with actual online image link
    },
    {
        title: "1984",
        author: "George Orwell",
        price: "$9.99",
        image: "https://example.com/1984.jpg" // Replace with actual online image link
    }
];

// Function to display featured books with details and online image links
function displayBooks() {
    const bookList = document.querySelector('.book-list');

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book');

        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = book.title;

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `by ${book.author}`;

        const bookPrice = document.createElement('p');
        bookPrice.textContent = `Price: ${book.price}`;

        const buyButton = document.createElement('button');
        buyButton.textContent = "Buy Book";
        buyButton.addEventListener('click', () => {
            alert(`You have purchased ${book.title} for ${book.price}`);
        });

        bookItem.appendChild(bookImage);
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookAuthor);
        bookItem.appendChild(bookPrice);
        bookItem.appendChild(buyButton);

        bookList.appendChild(bookItem);
    });
}

// Call the function to display featured books with details and online image links
displayBooks();
