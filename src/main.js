import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		user: 'chiraphon unaphrom'
	}
});

export default app;