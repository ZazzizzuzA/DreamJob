export default {
	data: {
		h1: "Hello, World!",
	},
	method: {
		append: function() {
			let body = document.getElementsByTagName("body")[0];
			body.appendChild(this.h1);
		}
	}
}