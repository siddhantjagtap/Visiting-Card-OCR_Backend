const companyService = require('./company.service');

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await companyService.getAllCompanies();
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCompanyById = async (req, res) => {
    try {
        const company = await companyService.getCompanyById(req.params.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCompany = async (req, res) => {
    try {
        const newCompany = await companyService.createCompany(req.body);
        res.status(201).json(newCompany);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCompany = async (req, res) => {
    try {
        const updatedCompany = await companyService.updateCompany(req.params.id, req.body);
        if (!updatedCompany) return res.status(404).json({ message: 'Company not found' });
        res.json(updatedCompany);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCompany = async (req, res) => {
    try {
        const deleted = await companyService.deleteCompany(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Company not found' });
        res.json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};