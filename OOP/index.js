// let bookTitle = 'Atomic Habits';
// let bookAuthor = 'James Clear';
// let bookPages = 306;


// const book = {
//     bookTitle: 'Atomic Habits',
//     bookAuthor: 'James Clear',
//     bookPages: 306,
//     bookChapters: {
//         chap1: 'Fundamentals',
//         chap2: '1st law'
//     },
//     printBook: function() {
//         console.log('Printing...')
//     }
// }

// book.printBook()
// // function printBook() {
// //     console.log('Printing...')
// // }


//----FACTORY----//
// function createBook(title, author, pages) {
//     const book = {
//         bookTitle: title,
//         bookAuthor: author,
//         bookPages: pages,
//         printBook: function() {
//             console.log('Printing...')
//         }
//     }
//     return book;
// }

// const book1 = createBook('Atomic', 'James', 306);
// const book2 = createBook('Think', 'Napolean', 420);

// book1.color = 'White';



//-----CONSTRUCTOR-----//
function CreateBook(title, author, pages) {
        this.bookTitle = title;
        this.bookAuthor = author;
        this.bookPages = pages;
        
}
const book1 = new CreateBook('Atomic', 'James', 306);

console.log(book1+'')

let firstName = 'Joe';

const email = `Hi ${firstName},
The meeting is confirme!
Andre`

console.log(email)