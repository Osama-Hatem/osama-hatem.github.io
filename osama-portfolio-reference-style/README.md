# Osama Hatem — Personal Portfolio

A dark, editorial portfolio website inspired by the reference designs: oversized typography, black/charcoal surfaces, electric blue highlights, a central profile image, minimal navigation, and project cards.

## Quick customization

### Profile photo

Replace:

```text
assets/profile.jpg
```

with your own image.

### CV

Replace:

```text
assets/cv.pdf
```

with your current CV.

### Social links

Open `data.js` and edit:

```js
socials: {
    github: "...",
    linkedin: "...",
    email: "..."
}
```

### Add a project

Add another object to the `projects` array in `data.js`:

```js
{
    title: "My New Project",
    category: "AI / SOFTWARE",
    description: "What the project does.",
    technologies: ["Python", "Django"],
    image: "assets/projects/my-project.jpg",
    link: "https://github.com/..."
}
```

The project card will be generated automatically.

## Run locally

Because this is a static site, you can open `index.html` directly.

For local development:

```bash
python -m http.server
```

Then open the local address shown in the terminal.

## Deploy on GitHub Pages

Push the repository to GitHub and enable GitHub Pages from the repository settings. The site is static and requires no backend.
