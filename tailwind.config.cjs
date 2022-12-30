/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				pphTheme: {
					primary: "#EA0747",
					secondary: "#E4EA67",
					accent: "#D8F49C",
					neutral: "#18151E",
					"base-100": "#F5EFF6",
					info: "#2E84E0",
					success: "#2CE2CD",
					warning: "#FAB647",
					error: "#F7625F",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};