const data = {
    dashboard: [{"count":123}],
}

/*
    This method is used to send a JSON response. Following are a few examples −
    res.json(null)
    res.json({ user: 'tobi' })
    res.status(500).json({ error: 'message' })
*/

const getAllDashboards = (req, res) => {
    res.json(data.dashboard);
}

module.exports = {
    getAllDashboards,
}
