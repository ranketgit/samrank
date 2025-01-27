/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  mainColor: '#161616',
		  secondaryColor: '#1C1C1C',
		  accentColor: '#DBF763'
		},
	  },
	},
	plugins: [],
  }