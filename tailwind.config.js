module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./src/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                lg: [{max: "1152px"}],
            },
            colors: {
                coffee: {
                    lightest: "#eee7dd",
                    light: "#d6c8b0",
                    DEFAULT: "#f9f5ee",
                    dark: "#c5b08e",
                    darkest: "#8e7762",
                }
            },

        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar-hide')
    ],
};
