ScienceKit
==========

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

## Additional Heroku Instructions

View Logs

	heroku logs

View running processes

	heroku ps

View environment variables

	heroku config

Add an environment variable

	heroku config:add NODE_ENV=production

More about enviornment variables at https://devcenter.heroku.com/articles/config-vars.