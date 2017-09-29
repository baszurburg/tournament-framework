/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var bodyParser = require('body-parser');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Pass your keystone instance to the module
var restful = require('restful-keystone')(keystone);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function (app) {

	'use strict';
	
	// Allow cross-domain requests (api only)
	console.log('------------------------------------------------');
	console.log('Notice: Enabling CORS (for development.)');
	console.log('------------------------------------------------');

	// API - App
	app.all('/api*', keystone.middleware.api);
	app.all('/api*', keystone.middleware.cors);

	app.all('/api*', function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Method, Authorization, X-Requested-With, X-Powered-By');
		next();
	});
	
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/articles/:category?', routes.views.articles);
	app.get('/article/:article', routes.views.article);
	app.get('/gallery', routes.views.gallery);
	app.all('/contact', routes.views.contact);

	// API - App
	app.all('/api/app/check-user', routes.api.app['check-user']);
	app.all('/api/app/create-user', routes.api.app['create-user']);
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

	//Explicitly define which lists we want exposed: 
	// docs: https://github.com/d-pac/restful-keystone
	
	restful.expose({
		Post: true,
		Article: true,
		PostCategory: true,
		User: {
			filter : { isAdmin: false }
		}
	}).start();

	// 			show : ['email', 'isAdmin', 'name'],
	
	
	// .before({
	//   User: middleware.requireUser
    // })
	
};
