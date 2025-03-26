import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			external: [
				'/node_modules/bootstrap/dist/css/bootstrap.min.css',
				'/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
			]
		}
	}
});
