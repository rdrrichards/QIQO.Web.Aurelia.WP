import 'bootstrap';

export function configure(aurelia) {
    aurelia.use.instance('apiRoot', 'http://localhost:34479/api/');
	aurelia.use.standardConfiguration().developmentLogging();
	aurelia.start().then(a=>a.setRoot("shell"));
}