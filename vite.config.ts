import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
        
		define: {
			"process.env.APP_ID": env.APP_ID,
			"process.env.BASE_URL": JSON.stringify("https://api-test.innoloft.com"),
			"process.env.GOOGLE_MAP_KEY": JSON.stringify("AIzaSyAeLfTnMdTPXKIK3GjsazLJ-EigPlMwqMw"),
		},
		plugins: [react()],
	};
});
