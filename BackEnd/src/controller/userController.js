const UserService = require('../service/userService.js');

class userController {}

userController.getDetails = async (req, res) => {
    console.log("--------------In userController file & getDetails method--------------");
    try{
        const getdetailsResponse =  await new UserService().getDetails(req, res);
        
        res.status(200).send({
        statusCode: 200,
        success: true,
        status: 'userController OK',
        message: 'userController - getDetails working fine',
        data: getdetailsResponse
        });
    } catch (err) {
        console.log("--------------In catch block of userController file & getDetails method--------------");
        console.log({error: err});
        res.status(500).send({message: `Error in fetcing Details: ${err}`});
    }
}

userController.saveDetails = async (req, res) => {
    console.log("--------------In userController file & saveDetails method--------------");
    try{
        const saveDetailsResponse =  await new UserService().saveDetails(req, res);
        
        res.status(201).send({
        statusCode: 201,
        success: true,
        status: 'userController OK',
        message: 'userController - saveDetails working fine',
        data: saveDetailsResponse
        });
    } catch (err) {
        console.log("--------------In catch block of userController file & saveDetails method--------------");
        console.log({error: err});
        res.status(500).send({message: `Error in saving Details: ${err}`});
    }
}

module.exports = userController;