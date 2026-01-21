/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Disable system dark mode by requiring a class
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
