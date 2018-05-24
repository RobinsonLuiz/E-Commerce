var nodemailer = require('nodemailer');
module.exports = function() {
    var transporter = nodemailer.createTransport({
        host: 'smtp.googlemail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ecommerceTemp@gmail.com',
            pass: 'ecommerce123'
        }
    });
    return transporter;
}