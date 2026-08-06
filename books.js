// To edit a review, change only the text after review: for that book below.
const bookstack = [
  { title: 'Heart Lamp', author: 'Banu Mushtaq', review: 'Add your review here.', colour: 'moss' },
  { title: '1984', author: 'George Orwell', review: 'Add your review here.', colour: 'berry' },
  { title: 'Animal Farm', author: 'George Orwell', review: 'Add your review here.', colour: 'sand' },
  { title: 'The Bell Jar', author: 'Sylvia Plath', review: 'Add your review here.', colour: 'moss' },
  { title: 'The Women', author: 'Kristin Hannah', review: 'Add your review here.', colour: 'berry' },
  { title: 'A Psalm for the Wild-Built', author: 'Becky Chambers', review: 'Add your review here.', colour: 'sand' }
];

const favourites = [
  { title: 'The Women', author: 'Kristin Hannah', review: 'Add your review here.', colour: 'berry' },
  { title: 'Norwegian Wood', author: 'Haruki Murakami', review: 'Add your review here.', colour: 'moss' },
  { title: 'The Kite Runner', author: 'Khaled Hosseini', review: 'Add your review here.', colour: 'sand' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', review: 'Add your review here.', colour: 'moss' },
  { title: 'Little Women', author: 'Louisa May Alcott', review: 'Add your review here.', colour: 'berry' }
];

function renderBooks(books, target) {
  document.querySelector(target).innerHTML = books.map((book) => `
    <button class="book-card ${book.colour}" type="button" aria-label="Turn over ${book.title}">
      <span class="book-face book-cover"><small>${book.author}</small><strong>${book.title}</strong><i>2026 reading</i></span>
      <span class="book-face book-review"><small>MY REVIEW</small><strong>${book.title}</strong><p>${book.review}</p><i>tap to return ↶</i></span>
    </button>`).join('');
}

renderBooks(bookstack, '#bookstack');
renderBooks(favourites, '#favourites');
document.querySelectorAll('.book-card').forEach((book) => book.addEventListener('click', () => book.classList.toggle('is-flipped')));
