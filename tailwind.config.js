/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        backgroundColor: (theme) => ({
            ...theme('colors'),
            primary: '#3490dc',
            secondary: '#ffed4a',
            danger: '#e3342f',
            beige: '#fefdf9',
            bba485: '#bba485',
            e8e8e8: '#e8e8e8',
            a8957a: '#A98C62',
            myblue: '',
        }),
        textColor: {
            '53433e': '#53433e',
            black: '#000000',
            second: '#222222',
            third: '#fefdf9',
        },
        fontFamily: {
            petit: ['PetitFormalScript', 'sans-serif'], // sans-serif es una fuente de respaldo en caso de que PetitFormalScript no se cargue.
            oswald: ['Oswald', 'sans-serif'],
            openSans: ['Open Sans'],
            adla: ['Adla'],
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
