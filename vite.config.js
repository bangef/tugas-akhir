import { defineConfig } from "vite";

export default defineConfig({
	// Build
	// base: "https://bangef.github.io/tugas-akhir/",
	// Dev
	base: "",
	build: {
		rollupOptions: {
			input: {
				main: "./index.html",
				"tentang-kami": "./tentang-kami.html",
				produk: "./produk.html",
				// ...
				// List all files you want in your build
			},
		},
	},
});
