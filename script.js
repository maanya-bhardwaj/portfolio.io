// Book cards work with mouse, touch and keyboard. Duplicate a .book-card in index.html to add another review.
document.querySelectorAll('.book-card').forEach((book) => {
  book.addEventListener('click', () => book.classList.toggle('is-flipped'));
  book.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      book.classList.toggle('is-flipped');
    }
  });
});
