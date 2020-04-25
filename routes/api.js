const express = require( 'express' );
const router = express.Router();
const request = require('request')


router.post( '/subscribe', ( req, res ) => {
    const { firstName, lastName, email } = req.body;
    if ( !firstName || !lastName || !email ) {
         res.status(400).json({'msg': 'Fail'})
    } else {

        const data = {
            members: [
                {
                    email_address: email,
                    status: 'subscribed',
                    merge_fields: {
                        FNAME: firstName,
                        LNAME: lastName
                    }
                }
            ]
        }

        const postData =JSON.stringify(data)
        const options = {
            url: 'https://***.api.mailchimp.com/3.0/lists/*******',
            method: 'POST',
            headers: {
                Authorization: 'auth **********'
            }, 

            body: postData
        }
        request( options, ( err, response, body ) => {
            if ( err ) {
                res.status(400).json({'msg': 'Failure'})

            } else {
                if ( response.statusCode === 200 ) {
                    res.json({msg: 'Done'})
                } else{
                    res.status(400).json({'msg': 'not Done'})

                }
            }
        })
    }
})

module.exports = router;