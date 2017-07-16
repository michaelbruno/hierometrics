requirejs.config({
    baseUrl: 'js',
});

requirejs(['chloroprint', 'hierometry', 'hierocon'],
function   (chloroprint, hierometry, hierocon) {

	hierocon.init();
	
});