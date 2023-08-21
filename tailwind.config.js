/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        backgroundColor: (theme) => ({
            ...theme('colors'),
            primary: '#3490dc',
            secondary: '#ffed4a',
            danger: '#e3342f',
            beige: '#bba485',
            bba485: '#bba485',
            a8957a: '#A98C62',
            myblue: '',
        }),
        textColor: {
            '53433e': '#53433e',
        },
        fontFamily: {
            petit: ['PetitFormalScript', 'sans-serif'], // sans-serif es una fuente de respaldo en caso de que PetitFormalScript no se cargue.
        },
        backdropBlur: {
            none: 'blur(0)',
            blur: 'blur(1px)', // Utilizado en el encabezado
        },
        extend: {},
    },
    plugins: [],
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.before:block': {
                    content: '""',
                    display: 'block',
                },
                '.before:absolute': {
                    content: '""',
                    position: 'absolute',
                },
                //... y otros estilos que desees agregar
            }

            addUtilities(newUtilities, ['before'])
        },
    ],
}
