const express = require('express');
const router = express.Router();

router.route('/')
    .post((req, res) => {
        const { message } = req.body;
        console.log("message", message);

        const io = req.app.get('socketio');
        
        io.emit('notification', message);
        res.status(200).json({ success: true });
    });

module.exports = router;