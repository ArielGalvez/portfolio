/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow Semi Condensed', ...defaultTheme.fontFamily.sans]
			},
			animation: {
				wiggle: 'wiggle 0.333s ease-in-out forwards'
			},
			keyframes: {
				wiggle: {
					'0%': { right: '-192px' },
					'100%': { right: '0' }
				}
			}
		},
		screens: {
			xs: '270px',
			...defaultTheme.screens
		}
	},
	plugins: []
};
