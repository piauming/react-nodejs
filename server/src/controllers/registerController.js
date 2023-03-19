const { User } = require('../models');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    console.log(req);
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ 'message': 'email and password are required' });
    }

    // check for duplicate usernames in db
    const duplicate = await User.findAll({
        where: {
            email: email
        }
    });

    if (duplicate?.length > 0) {
        return res.sendStatus(409); // Conflict
    }

    try {
        // encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);

        const newUser = {
            email: email,
            password: hashedPwd
        }

        const user = await User.create(newUser);
        res.status(201).json({ 'success': `New user ${email} created!` });

    } catch (err) {
        res.status(500).json({ 'message': err.message })
    }
}

module.exports = {
    handleNewUser
};