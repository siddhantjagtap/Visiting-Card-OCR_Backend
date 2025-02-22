const db = require('../../db'); 
require("dotenv").config(); 

exports.getAllContacts = () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM contacts", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  };

  exports.getContactById = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM contacts WHERE id = ?", [id], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  };
  
  exports.createContact = (contactData) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO contacts SET ?", contactData, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  };
  

  exports.updateContact = (id, contactData) => {
    return new Promise((resolve, reject) => {
      db.query("UPDATE contacts SET ? WHERE id = ?", [contactData, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  };

  exports.deleteContact = (id) => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM contacts WHERE id = ?", [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  };