ScienceKit
==========

ScienceKit is a real-time app.  Doing science.  Telling stories.

This is the initial, private ScienceKit repository.

## Delpoy on Heroku

Create local clone of ScienceKit GitHub repository:

	git clone https://github.com/mokogobo/pre-sciencekit.git

Create a ScienceKit Heroku app:

	heroku create

Deploy ScienceKit to Heroku:

	git push heroku master

Open the deployed ScienceKit app on Heroku in a web browser:

	heroku open

Make ScienceKit available at a subdomain:

	heroku apps:rename sciencekit

Use a custom domain by following the instructions at https://devcenter.heroku.com/articles/custom-domains.

### Additional Heroku Instructions

View Logs

	heroku logs

View running processes

	heroku ps

View environment variables

	heroku config

Add an environment variable

	heroku config:add NODE_ENV=production

More about enviornment variables at https://devcenter.heroku.com/articles/config-vars.

### Description of Heroku-specific Files

The file Procfile is a file that describes how to run the ScienceKit app on Heroku.

## Deploy on Local Server

1. Set up Node.js
2. Check out repository on GitHub
3. Install NPMs (npm install)
4. Start server
5. Open ScienceKit in web browser on local machine.
6. Set up server for access over network from iPads.  Test on iPad or other iOS device.

## ScienceKit HTTP API

The ScienceKit HTTP API can be used to interact with the ScienceKit server.  You can create your own ScienceKit apps using this HTTP API.

The apiary.io documentation describing the [ScienceKit HTTP API](http://docs.sciencekit.apiary.io/ "ScienceKit HTTP API apiary.io Documentation").