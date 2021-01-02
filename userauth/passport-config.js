const localStregy = require('passport-local').Strategy

function initialise(passport) {
    const authenticateUser = (email, password, done) => {
        
    }
    passport.use(new localStregy({ usernameField: 'email' }), authenticateUser);

}