const db = require('../../db');

exports.getAllContacts = () => {
    return db.query('SELECT * FROM contacts');
};

exports.getContactById = (id) => {
    return db.query('SELECT * FROM contacts WHERE id = ?', [id]);
};

exports.createContact = (contactData) => {
    return db.query('INSERT INTO contacts SET ?', contactData);
};

exports.updateContact = (id, contactData) => {
    return db.query('UPDATE contacts SET ? WHERE id = ?', [contactData, id]);
};

exports.deleteContact = (id) => {
    return db.query('DELETE FROM contacts WHERE id = ?', [id]);
};
