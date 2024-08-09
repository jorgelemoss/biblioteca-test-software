/** @type {import('tailwindcss').Config} */
import {
    navbar,
    content,
    form
} from './app.colors.json'

export default {
    content: [
        'index.html',
        'src/**/*.{js,jsx,md,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                navbar,
                content,
                form,
                primary: "#5c6ac4",
                secondary: "#ecc94b"
            }
        },
    },
    plugins: [],
}

