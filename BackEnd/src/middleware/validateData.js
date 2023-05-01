const { checkSchema, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
    console.log("----------In validateData file & handleValidationErrors method--------------");
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            // array() => convert inoto array
            // map() => make new array based on given conditions
            const formattedErrors = errors.array().map((error) => { 
                return { 
                    msg: error.msg 
                }
            });
            return res.status(400).send({ errors: formattedErrors });
        }
        next();
    } catch(err) {
        console.log("----------In catch block of validateData file & handleValidationErrors method--------------");
        console.log(`Error in validateData file & handleValidationErrors method: ${err}`);
        return res.status(500).json({ error: err });
    }
};

const validateUserDetails = async (req, res, next) => {
    await checkSchema({
        name: {
            in: ['body'],
            trim: true,
            notEmpty: { 
                errorMessage: `Name must not be empty`,
                bail: true 
            },
            isString: {
                errorMessage: `Name must of type string`,
                bail: true 
            },
            isLength: {
                options: { 
                    min: 4,
                    max: 20
                },
                errorMessage: `Name should be in range 4 to 20 characters`,
                bail: true
            },
            escape: true
        },
        batch: {
            in: ['body'],
            trim: true,
            notEmpty: { 
                errorMessage: `Batch must not be empty`,
                bail: true 
            },
            custom: {
                options: (value) => {
                    return ['1', '2', '3', '4'].includes(value);
                },
                errorMessage: 'Batch can have only certain values',
                bail: true
            }
        },
        gender: {
            in: ['body'],
            trim: true,
            notEmpty: { 
                errorMessage: `Gender must not be empty`,
                bail: true 
            },
            isString: {
                errorMessage: `Gender must of type string`,
                bail: true 
            },
            custom: {
                options: (value) => {
                    return ['male', 'female', 'other', 'Male', 'Female', 'Other'].includes(value);
                },
                errorMessage: 'Gender can be male, female, or other',
                bail: true
            }
        },
        email: {
            in: ['body'],
            trim: true,
            notEmpty: { 
                errorMessage: `Email must not be empty`,
                bail: true
            },
            isString: {
                errorMessage: `Email must of type string`,
                bail: true 
            }, 
            isEmail: {
                errorMessage: `Email must be valid`,
                bail: true
            },
            normalizeEmail: true
        },
        mobileNumber: {
            in: ['body'],
            trim: true,
            isMobilePhone: {
                errorMessage: `Mobile Number must be valid`,
                bail: true
            },
            isLength: {
                options: {
                    min:10,
                    max:13
                },
                errorMessage: `Mobile Number range must be 10 to 13 characters`,
                bail: true
            }
        },
        enrollmentDate: {
            in: ['body'],
            trim: true,
            // toDate: true,
            notEmpty: { 
                errorMessage: `Enrollment date is must`,
                bail: true 
            },
        },
        status: {
            in: ['body'],
            trim: true,
            notEmpty: { 
                errorMessage: `Status is must`,
                bail: true 
            },
            custom: {
                options: (value) => {
                    return ['active', 'inactive', 'Active', 'Inactive'].includes(value);
                },
                errorMessage: 'Status can have only certain values',
                bail: true
            },
        }
    }).run(req);

    handleValidationErrors(req, res, next);
};

// module.exports = { validateUserDetails, handleValidationErrors }

module.exports = { validateUserDetails };
