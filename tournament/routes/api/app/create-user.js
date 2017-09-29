var keystone = require('keystone'),
	async = require('async'),
	request = require('request'),
	User = keystone.list('User');

exports = module.exports = function(req, res) {
	"use strict";
	
	var locals = {
		userData: req.body,
		newUser: false
	};

	if (req.method !== 'POST') {
		return res.apiResponse({
			success: false,
			user: null,
			message: 'Request method not as expected'
		});
	}
	
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
		return res.apiResponse({
			success: true
		});
	});

};
