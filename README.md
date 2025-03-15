# justbuild.ing Website

This is the official website for justbuild.ing, a community for top builders in Utah County.

## Tech Stack

- **Framework**: Next.js
- **Styling**: TailwindCSS
- **Content**: MDX

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/pages` - Next.js pages
- `/src/components` - React components
- `/src/lib` - Utilities and helper functions
- `/src/content` - MDX content (news and announcements)
- `/src/styles` - Global styles

## Adding Content

### News Articles

To add a news article:

1. Create a new MDX file in `/src/content/news/`
2. Use the following frontmatter format:

```md
---
title: "Article Title"
date: "YYYY-MM-DD"
author: "Author Name"
excerpt: "A brief description of the article"
coverImage: "https://path.to/image.jpg" # Optional
---

# Content goes here
```

### Announcements

To add an announcement:

1. Create a new MDX file in `/src/content/announcements/`
2. Use the following frontmatter format:

```md
---
title: "Announcement Title"
date: "YYYY-MM-DD"
excerpt: "A brief description of the announcement"
eventDate: "YYYY-MM-DD" # Optional, for events
location: "Event Location" # Optional
coverImage: "https://path.to/image.jpg" # Optional
registrationUrl: "https://registration.link" # Optional
---

# Content goes here
```

## Deployment

The site can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or AWS Amplify.

## License

This project is private and not licensed for public use.
