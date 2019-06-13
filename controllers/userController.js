const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

const client = new OAuth2Client(process.env.REACT_APP_OAUTH_CLIENT_ID);

const verifyAuthToken = async token => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.REACT_APP_OAUTH_CLIENT_ID
        });
        return ticket.getPayload();
    } catch (err) {
        console.error(`Error verifying auth token: ${token}`)
    }
};

const checkIfUserExists = async email => await User.findOne({ email }).exec();

const createNewUser = googleUser => {
    const { name, email, picture } = googleUser;
    const user = { name, email, picture };

    return new User(user).save();
};

exports.findOrCreateUser = async token => {
    // verify auth token
    const googleUser = await verifyAuthToken(token);
    // check if user exists
    const user = await checkIfUserExists(googleUser.email);
    // return user or create new user
    return user ? user : createNewUser(googleUser);
};