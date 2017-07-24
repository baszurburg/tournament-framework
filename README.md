# tournament-framework
tournament software

## How to setup and start

The database used for both the cms and the tournament app is mongodb
via keystone.js
So make sure you have mongodb installed

### Starting MONGO DB

#### OSX
$ mongod

to administer the database, use 'mongoobooster'

#### Linux
##### Commands

start: `sudo service mongod start`
stop: `sudo service mongod stop`
restart: `sudo service mongod restart`
check if mongod is running: `ps aux | grep mongod`

#### Mongo shell

Mongo shell: `mongo localhost:27017`
show databases: `show dbs`

## How to start the CMS

### Start keystone

`node keystone`
(default admin password is 'tournament1')

### Viewing the site
http://localhost:3000/

**admin area**
http://localhost:3000/keystone

## Development notes

restful-keystone
https://github.com/d-pac/restful-keystone

Mailgun
https://app.mailgun.com/app/domains/mg.icws.nl