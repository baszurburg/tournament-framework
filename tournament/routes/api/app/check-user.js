var keystone = require('keystone'),
	async = require('async'),
	request = require('request'),
	_ = require('lodash'),
	User = keystone.list('User');

exports = module.exports = function(req, res) {
	"use strict";
	
	var locals = {
		sub: req.body.sub,
		authUser: req.body.authUser,
		form: req.body.form,
		existingUser: false
	}

	if (!req.body.sub ) {
		return res.apiResponse({ 
			success: false,
			user: null,
			message: 'No user id was provided with the request'
		});
	}

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
