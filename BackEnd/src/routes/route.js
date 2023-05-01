const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const validateDataMiddleware = require('../middleware/validateData');

router.get('/v1/routes', (_, res) => {
    console.log(`Routes working fine.`);
    res.status(200).send({
        statusCode: 200,
        success: true,
        status: 'Routes OK',
        message: 'Routes working fine'
    });
});

router.get(
    '/v1/getDetails',
    userController.getDetails
);

router.post(
    '/v1/insertDetails', 
    validateDataMiddleware.validateUserDetails,
    userController.saveDetails
);

module.exports = router;