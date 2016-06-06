const nodemailer = require('nodemailer');
const env = require('./env.js')
// create reusable transporter object using the default SMTP transport 
const ses = require('nodemailer-ses-transport');
const transporter = nodemailer.createTransport(ses({
  accessKeyId: env.accessKeyId,
  secretAccessKey: env.secretAccessKey,
  rateLimit: 5
}));

// Handle conctact
const contact = (req, res) => {
  console.log('--> req', req.body)
  // setup e-mail data with unicode symbols 
  const mailOptions = {
      from: '"michelleheh.com 👥" <fishfishher@gmail.com>', // sender address 
      to: 'fishfishher@gmail.com', // list of receivers 
      subject: `michelleheh.com: ${req.body.contactName}`, // Subject line
      html: `<span>You got a message from ${req.body.email}</span>
            <p>${req.body.comments}<br>- ${req.body.contactName}</p>` // html body 
  };
  // send mail with defined transport object 
  transporter.sendMail(mailOptions, (error, info) => {
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info);
  });

  res.send('post requst to contatct');
};

// export handlers
handlers = {
  contact: contact
}

module.exports = handlers;