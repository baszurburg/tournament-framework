var keystone = require('keystone'),
	async = require('async'),
	request = require('request'),
	_ = require('lodash'),
	User = keystone.list('User');

exports = module.exports = function(req, res) {
	"use strict";
	
	var locals = {
		userData: req.body,
		newUser: false
	};

	if (!locals.userData) {
		return res.apiResponse({ 
			success: false,
			message: 'No user was provided with the post'
		});
	}

	locals.newUser = new User.model(locals.userData);
	locals.newUser.save(function(err) {
		if (err) {
			return res.apiResponse({
				success: false,
				message: (err && err.message ? err.message : false) || 'Failed saving the user'
			});
		}
		console.log('[api.app.signup]  - Saved new user.');
		console.log('------------------------------------------------------------');
		return next();
	});
	
	
	keystone.list('User').model.findOne({ sub: locals.sub }).exec(function(err, user) {

		if (err || !user) {
			return res.apiResponse({
				success: true,
				user: null,
				message: (err && err.message ? err.message : false) || 'That user was not found'
			});
		}

		return res.apiResponse({
			success: true,
			user: user
		});

	});

};
