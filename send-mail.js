const sgMail = require('@sendgrid/mail');
const fs = require('fs');
sgMail.setApiKey('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')
module.exports = function(User) {
    const msg = {
        to: {
            name: User.name,
            email: User.email
        },

        from: {
            name: 'TEST',
            email: 'likhawat.page@gmail.com'
        },
        subject: 'The subject of your email',
        substitution: {
            name: User.name,
        },
        dynamic_template_data: {
            name: User.name,
            link: 'https://www.google.com/maps/dir//National+Institute+Of+Technology,+Silchar,+Assam,+NIT+Road,+Fakiratilla,+Silchar,+Assam+788010/@24.7577103,92.7572733,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x374e49dcb63bae9b:0x81efa836714a289b!2m2!1d92.7922929!2d24.7577144'
        },
        template_id: "d-0619528d07f64126988e1c02ec6a4280"
    }
    sgMail.send(msg)
}