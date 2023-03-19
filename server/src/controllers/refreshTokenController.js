const { User } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = async (req, res) => {
    // Get the refresh-token in cookie
    const cookies = req.cookies;
    
    console.log("server handleRefreshToken....", cookies.jwt);

    if (!cookies?.jwt) {
        console.log(".... no jwt?");
        console.log(401);
        return res.sendStatus(401);
    }

    const refreshToken = cookies.jwt;

    // Find the user with the refresh-token
    const result = await User.findAll({
        where: {
            refreshToken: refreshToken
        }
    });
    
    if (result?.length == 0) {
        return res.sendStatus(403); // Unauthorized
    }

    const foundUser = result[0];

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.email !== decoded.email) {
                return res.sendStatus(403);
            }
            
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "email": decoded.email
                    }   
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' }
            );

            // if the refresh-token is valid, retuen a new access-token
            res.json({ accessToken })
        }
    )

}

module.exports = {
    handleRefreshToken    
}