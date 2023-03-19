const data = {
    dashboard: { "count": 123 },
}

const getAllDashboards = async (req, res) => {
    res.json(data.dashboard);
}

module.exports = {
    getAllDashboards,
}
