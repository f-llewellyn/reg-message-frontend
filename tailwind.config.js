/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				"dark-primary": "#202639",
				"dark-secondary": "#3B3F4E",
				"dark-text": "#FFFFFF",
				"light-primary": "#FFFFFF",
				"light-secondary": "#FAFAFA",
				"light-text": "#222222",
				"seen-text": "#888888",
				brand: "#22C55E",
			},
		},
	},
	plugins: [],
};
