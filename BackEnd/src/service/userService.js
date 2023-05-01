const ggiModel = require('../models/model');

class userService {
    constructor() {}

    async getDetails (req, res) {
        console.log("--------------In userService file & getDetails method--------------");
        try{
            // below 2 line is for pagination
            const limitRecords = req.query.limit ? +req.query.limit : 10;
            const offsetRecords = req.query.skip ? +req.query.skip * limitRecords: 0;

            const detailsResp = await ggiModel.find({}, {_id:0 })
                .skip(offsetRecords).limit(limitRecords).sort({enrollmentDate: 1});
                
            // Query to count the total number of documents in the collection
            const totalCount = await ggiModel.countDocuments({});
    
            return { data: detailsResp, total: totalCount };
        } catch (err) {
            console.log("--------------In catch block of userService file & getDetails method--------------");
            console.log({error: err});
            throw err;
        }
    }

    async saveDetails (req, res) {
        console.log("--------------In userService file & saveDetails method--------------");
        try{
            const enrollmentDate = req.body.enrollmentDate;
            const modifiedEnrollmentDate = enrollmentDate.split("T")[0];
            req.body.enrollmentDate = modifiedEnrollmentDate;
            const saveResp = await ggiModel.create(req.body);
            const projectedSaveResp = {
                name: saveResp.name,
                gender: saveResp.gender,
                email: saveResp.email,
                mobileNumber: saveResp.mobileNumber,
                enrollmentDate: saveResp.enrollmentDate,
                status: saveResp.status,
                batch: saveResp.batch
            };
            return projectedSaveResp;
        } catch (err) {
            console.log("--------------In catch block of userService file & saveDetails method--------------");
            console.log({error: err});
            throw err;
        }
    }
}

module.exports = userService;