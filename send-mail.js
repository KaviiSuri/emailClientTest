const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const YOUR_API_KEY;
sgMail.setApiKey(YOUR_API_KEY);
module.exports = function(User) {
    const msg = {
        to: {
            name: User.name,
            email: User.email
        },

        from: {
            name: 'exampleName',
            email: 'from@example.com'
        },
        subject: 'The subject of your email',
        substitution: {
            name: User.name,
        },
        // The object bellow stores alll the data that will be used 
        // to personalize the emails according to the used
        dynamic_template_data: {
            name: User.name,
            link: 'exampleLink'
        },
        // this will be the id of the template used to send the mail
        template_id: "" //eg d-0619528d07f64126988e1c02ec6a4280
    }
    sgMail.send(msg)
}