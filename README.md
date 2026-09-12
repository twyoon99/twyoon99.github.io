# twyoon99.github.io

Personal academic website for **Taewoong Yoon**, designed as a lightweight static GitHub Pages site.

## Structure

- `index.html` — all website content
- `style.css` — responsive styling and layout

No build tools, frameworks, or package installation are required.

## Deploy on GitHub Pages

1. Create a public repository named `twyoon99.github.io`.
2. Upload `index.html` and `style.css` to the repository root.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/(root)`.
6. Save.

The site will be available at `https://twyoon99.github.io/`.

## Updating the website

Most content changes only require editing `index.html`.

- **About / research interests:** edit the text inside `<section id="about">`.
- **Add a publication:** copy one complete `<article class="publication-card ..."> ... </article>` block and change the venue, title, authors, description, and link.
- **Experience / Education:** edit the corresponding `<article class="timeline-item">` block.
- **Awards:** edit or duplicate an `<article class="award-item">` block.
- **Email / links:** search for the old URL or email in `index.html` and replace it.
- **Design / spacing / fonts:** edit `style.css`.

The profile image is currently loaded automatically from `https://github.com/twyoon99.png`.
