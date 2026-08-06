# Maanya's portfolio

No framework or build step is needed. GitHub Pages publishes `index.html` directly.

## The site pages

- `index.html` is the Home page: intro, experience, tech projects, stack and contact.
- `about.html` is your personal About page.
- `writing.html` is for essays and Substack links.
- `bookshelf.html` contains the flip-over book reviews.
- `style.css` contains every visual decision. The colour palette is at the very top (`--moss`, `--leaf`, `--lime`, etc.).
- `script.js` powers the book-card flip. You normally do not need to edit it.

## Add a book

1. In `index.html`, copy an entire `<button class="book-card ...">...</button>` inside `book-grid`.
2. Change the author, title and the paragraph inside `book-review`.
3. Set the `book-card` colour class to `moss`, `berry`, or `sand`.

## Add a project, workshop or writing link

- Projects live inside `<div class="project-grid">` in `index.html`.
- Your experience is in `<div class="experience-list">` in `index.html`.
- Writing links live inside `<div class="writing-list">` in `writing.html`. Replace the placeholder heading and date, then point `href` to your Substack post or another URL.

## Publish an update

```bash
git add index.html about.html writing.html bookshelf.html style.css script.js README.md
git commit -m "Refresh portfolio"
git push
```

GitHub Pages rebuilds the live site automatically after each push.
