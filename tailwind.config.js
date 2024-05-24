/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "selector",
	theme: {
		colors: {
			...colors,
			base: colors.gray,
			accent: colors.blue,
			cta: colors.green,
		},
		extend: {},
	},
	plugins: [],
};
