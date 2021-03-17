var nodemailer = require('nodemailer');
var appRoot = require('app-root-path');
var config =  require(appRoot + '/config.json'); 

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.username, //email address
        pass: config.password  //password
    }
});

exports.sendEmail = function (from,to,subject,body,callback) {
    const mailOptions = {
        from: "five@five.com", // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: body// plain text body
    };
    console.log(JSON.stringify(mailOptions));
    transporter.sendMail(mailOptions, (err, results) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            callback(null, results);
            return;
        }
    });
    return;
}

