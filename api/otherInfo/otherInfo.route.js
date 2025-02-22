const express = require('express');
const router = express.Router();
const otherInfoController = require('./otherInfo.controller');

router.get('/', otherInfoController.getAllOtherInfo);
router.get('/:id', otherInfoController.getOtherInfoById);
router.post('/', otherInfoController.createOtherInfo);
router.put('/:id', otherInfoController.updateOtherInfo);
router.delete('/:id', otherInfoController.deleteOtherInfo);

module.exports = router;
