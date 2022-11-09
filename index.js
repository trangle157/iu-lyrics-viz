//import { use } from 'passport';
//import express from 'express';
//import OAuth2Strategy from 'passport-oauth2/lib';

//const { AuthorizationError } = require("passport-oauth2/lib");

/* use(new OAuth2Strategy({
    authorizationURL: 'https://api.genius.com/oauth/authorize',
    tokenURL: 'https://api.genius.com/oauth/token',
    clientID: "UNhvJ3Gdn16ZrYENlkP84rN7P9-3sTHKaWUfV9Qq6UO9JcZ661k7iQpxT_AhCkwh",
    clientSecret: 'iMuxrrD1xtTFBjzEltan74BwVXSNxx_mo42E8wqdLsr1dcayrhR7mSiucy6MlNgyW90ID7xcc8f7fs24kmqzsA',
    callbackURL: 'https://trangle157.github.io/iu-lyrics-viz/',
    scope: 'me',
    state: 'hug'
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ exampleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
)
)
 */
//console.log("passport", passport);

const token = '1wQro5cHjKZp1pQpLNazyZe2w-3bRNwRFnbQvLnU5Pio6AN1Yc2E2EK4RnU2AG5i';

const options = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
}
fetch('https://api.genius.com/artists/264991/', options).then(
    (response) => {
        if (response.ok) {
            //const result = response.body;
            //console.log(result, "result");
            response.json().then((data) => console.log(data, "Data"))
        } else {
            console.log("what")
        }
    }
)
    .catch((e) => console.log("error is", e));