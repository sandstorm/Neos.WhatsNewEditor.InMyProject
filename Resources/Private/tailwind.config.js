const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './Fusion/**/*.{fusion,ts,html}',
        './Javascript/**/*.{fusion,ts,html}'
    ],
    theme: {
        fontFamily: {
            sans: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                primary: {
                    main: '#00aeef',
                    dark: '#0089bc',
                },
                white: '#fff',
                black: '#222',
                grey: {
                    main: '#323232',
                    light: '#979797',
                },
                error: '#d8d8d8',
            },
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: {
                    fontSize: '20px',
                    lineHeight: 1.4,
                    fontWeight: 400
                },
                body: {
                    fontSize: '20px',
                    lineHeight: 1.4,
                    fontWeight: 400
                },
                h1: {
                    fontSize: '4rem',
                    lineHeight: 1.2,
                    fontWeight: 900
                },
                h2: {
                    fontSize: '4rem',
                    lineHeight: 1.2,
                    fontWeight: 900
                },
                h3: {
                    fontSize: '2rem',
                    lineHeight: 1.2,
                    fontWeight: 700
                },
                h4: {
                    fontSize: '2rem',
                    lineHeight: 1.2,
                    fontWeight: 700
                },
                h5: {
                    fontSize: '1rem',
                    lineHeight: 1.2,
                    fontWeight: 700
                },
                h6: {
                    fontSize: '1rem',
                    lineHeight: 1.2,
                    fontWeight: 700
                },
            })
        }),
    ],
}
