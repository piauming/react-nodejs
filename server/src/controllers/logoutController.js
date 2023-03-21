const { User } = require('../models');

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken
    const cookies = req.cookies;
    if (!cookies?.jwt) {
        console.log("no cookies?");
        return res.sendStatus(204); //No content
    }
    
    const refreshToken = cookies.jwt;

    const result = await User.findAll({
        where: {
            refreshToken: refreshToken
        }
    });

    if (result?.length == 0) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }

    const foundUser = result[0];
    await User.update({ refreshToken: '' }, {
        where: {
            email: foundUser.email
        }
    });

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
}

module.exports = { handleLogout }