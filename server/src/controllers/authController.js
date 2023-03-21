const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ 'message': 'email and password are required.' });
    }

    const result = await User.findAll({
        where: {
            email: email
        }
    });

    if (result?.length == 0) {
        return res.sendStatus(401); // Unauthorised
    }

    //evaluate password
    const foundUser = result[0];

    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        // Create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "email": foundUser.email
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
        );
        const refreshToken = jwt.sign(
            { "email": foundUser.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: process.env.REFRESH_TOKEN_EXPIRE }
        );

        await User.update({ refreshToken: refreshToken }, {
            where: {
                email: email
            }
        });

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken });
    }
    else {
        res.sendStatus(401);
    }
}

module.exports = {
    handleLogin
};