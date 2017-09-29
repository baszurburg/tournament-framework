var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User');

User.add({
	name: { type: Types.Name },
	userName: { type: Types.Text, required: true, initial: true },
	email: { type: Types.Email, initial: true, unique: true, index: true },
	password: { type: Types.Password, initial: true},
	nickName: { type: Types.Text },
	picture: { type: Types.Url },
	active: { type: Types.Boolean, required: true, default: true },
	dateCreated: { type: Types.Date, initial: true, default: Date.now },
	dateEnd: { type: Types.Date },
	type: { type: Types.Text, readonly: true, default: 'keystone' },
	sub: { type: String, readonly: true, index: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true, default: false },
	roles: { type: Types.Select, options: [{ value: 'default', label: 'Default' }, { value: 'referee', label: 'Referee' }, { value: 'tournamentAdmin', label: 'Tournament admin' }, { value: 'accountOwner', label: 'Account owner' } ], default: 'default' }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	"use strict";
	return this.isAdmin;
});


/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
