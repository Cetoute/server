const express = require('express');
const passort = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/gllgle/callback'
		},
		(accessToken) => {
			console.log(accessToken);
		}
	)
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
