// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, checkouts, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.checkouts = checkouts;
        this.discarded = discarded;
    }
    checkout(uses=1) {
        this.checkouts += uses;        
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, checkouts, discarded) {
        super(title, author, copyright, isbn, pages, checkouts, discarded);
    }    
    dispose(year) {
        if (year-this.copyright > 5) {
            this.discarded = true;
        }
    }
    
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, checkouts, discarded) {
        super(title, author, copyright, isbn, pages, checkouts, discarded);
    }
    dispose() {
        if (this.checkouts > 100) {
            this.discarded = true;
        }
    
    }
}

// Declare the objects for exercises 2 and 3 here:
let aNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, false);

let aManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, false);

// Code exercises 4 & 5 here:
aNovel.checkout(69);
aNovel.dispose();
const currentYear = new Date().getFullYear();
aManual.dispose(currentYear);

console.log(`title: ${aNovel.title} \ncheckouts: ${aNovel.checkouts} \ntrash? ${aNovel.discarded}\n`);

console.log(`title: ${aManual.title} \nage: ${currentYear-aManual.copyright} \ntrash? ${aManual.discarded}`);