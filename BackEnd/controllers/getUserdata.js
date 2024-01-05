const User = require("../models/User");
exports.getUserdata = async (req, res) => {
    try {
        const userData = await User.find({});
        // console.log(userData);
        res.json({ success: true, data: userData });
        
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
};