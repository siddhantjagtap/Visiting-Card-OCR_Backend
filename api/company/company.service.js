const db = require('../../db');

exports.getAllCompanies = () => {
    return db.query('SELECT * FROM company');
};

exports.getCompanyById = (id) => {
    return db.query('SELECT * FROM company WHERE id = ?', [id]);
};

exports.createCompany = (companyData) => {
    return db.query('INSERT INTO company SET ?', companyData);
};

exports.updateCompany = (id, companyData) => {
    return db.query('UPDATE company SET ? WHERE id = ?', [companyData, id]);
};

exports.deleteCompany = (id) => {
    return db.query('DELETE FROM company WHERE id = ?', [id]);
};
