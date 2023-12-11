import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            keyframes: {
                'super-bounce': {
                    '0%, 100%': {
                      transform: 'translateY(-350%)',
                      animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'  
                    },
                    '50%': {
                      transform: 'translateY(0)',
                      animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
                    }
                  }
            },
            animation: {
                "super-spin": 'spin 500ms linear infinite',
                "super-bounce": 'super-bounce 500ms linear infinite'
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                caveat: ["Caveat", 'cursive'],
                poppins: ["Poppins", 'sans-serif'],
                onest: ["Onest", 'sans-serif']

            },
        },
    },

    plugins: [forms],
};
