/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Manrope', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // Defined in CSS layer but can add here if needed
                'brand-dark': '#002b49',
            }
        },
    },
    plugins: [],
}
