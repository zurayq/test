
# Abdu.Dev Portfolio

This is a personal portfolio website built with Next.js, showcasing my projects, skills, and experience as a Computer Engineering Student.

## Features

- **Tech Stack**: Next.js 13.5 (App Router), TypeScript, Tailwind CSS, Framer Motion.
- **Multilingual**: Supports English, Arabic, Turkish, and Italian (powered by `next-intl`).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Dynamic Content**: Project and Resume data are managed via JSON/TypeScript data files for easy updates.
- **RTL Support**: Automatic layout adjustment for Arabic.

## Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/zurayq/portfolio.git
    ```

2.  Install dependencies:
    ```bash
    npm install
    # Note: Using Node.js 18.x
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `app/[locale]`: Main application routes (localized).
- `components`: Reusable UI components.
- `data`: Static data for Resume and Projects.
- `messages`: Translation files for each language.
- `public`: Static assets (images, icons).

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

## License

MIT
