const db = require('../../db');

exports.getAllOtherInfo = () => {
    return db.query('SELECT * FROM other_info');
};

exports.getOtherInfoById = (id) => {
    return db.query('SELECT * FROM other_info WHERE id = ?', [id]);
};

exports.createOtherInfo = (otherInfoData) => {
    return db.query('INSERT INTO other_info SET ?', otherInfoData);
};

exports.updateOtherInfo = (id, otherInfoData) => {
    return db.query('UPDATE other_info SET ? WHERE id = ?', [otherInfoData, id]);
};

exports.deleteOtherInfo = (id) => {
    return db.query('DELETE FROM other_info WHERE id = ?', [id]);
};
