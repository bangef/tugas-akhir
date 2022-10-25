import { defineConfig } from "vite";

export default defineConfig({
	// Build
	base: "/tugas-akhir/",
	// Dev
	// base: "",
	build: {
		rollupOptions: {
			input: {
				main: "./index.html",
				"tentang-kami": "./tentang-kami.html",
				produk: "./produk.html",
				login: "./login.html",
				register: "./register.html",
				// ...
				// List all files you want in your build
			},
		},
	},
});
