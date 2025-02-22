const otherInfoService = require('./otherInfo.service');

exports.getAllOtherInfo = async (req, res) => {
    try {
        const otherInfo = await otherInfoService.getAllOtherInfo();
        res.json(otherInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOtherInfoById = async (req, res) => {
    try {
        const otherInfo = await otherInfoService.getOtherInfoById(req.params.id);
        if (!otherInfo) return res.status(404).json({ message: 'Other Info not found' });
        res.json(otherInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createOtherInfo = async (req, res) => {
    try {
        const newOtherInfo = await otherInfoService.createOtherInfo(req.body);
        res.status(201).json(newOtherInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOtherInfo = async (req, res) => {
    try {
        const updatedOtherInfo = await otherInfoService.updateOtherInfo(req.params.id, req.body);
        if (!updatedOtherInfo) return res.status(404).json({ message: 'Other Info not found' });
        res.json(updatedOtherInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteOtherInfo = async (req, res) => {
    try {
        const deleted = await otherInfoService.deleteOtherInfo(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Other Info not found' });
        res.json({ message: 'Other Info deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
