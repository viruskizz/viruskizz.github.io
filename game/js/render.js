const components = [
	'navbar',
	'header',
	// 'panel',
	// 'footer'
];

const path = './components';
for (const name of components) {
	fetch(`${path}/${name}.html`)
		.then(response => response.text())
		.then(data => {
			const doc = document.querySelector(name);
			if (doc) {
				doc.innerHTML = data;
			}
		}); 
}