// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();

var transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "y_chavarria14@hotmail.com",
        pass: "k!ller3546"
    }
})

exports.sendMessage = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        let { name, lastName, email, message } = req.body

        const mailOptions = {
            from: 'y_chavarria14@hotmail.com', // sender address (who sends)
            to: 'ychavarria18@gmail.com', // list of receivers (who receives)
            subject: `Posible business`, // Subject line
            html: `<body style="margin: 0 padding: 0"> 
                <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                    <tr>
                        <td style="padding: 10px 0 30px 0">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc border-collapse: collapse">
                                <tr>
                                    <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0 color: #153643 font-size: 28px font-weight: bold font-family: Arial, sans-serif">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/h1.gif" alt="Creating Email Magic" width="300" height="230" style="display: block;" />
                                    </td>
                                </tr>
                                <tr>
                                    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="color: #153643 font-family: Arial, sans-serif font-size: 24px">
                                                    
                                                    <b>${name} ${lastName} wnats to contact!</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px 0 30px 0 color: #153643 font-family: Arial, sans-serif font-size: 16px line-height: 20px">
                                                    ${name} says: ${message} and wants to be contacted by this email ${email}
                                                </td>
                                            </tr>
                                            <tr>
                
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>                
                            </table>
                        </td>
                    </tr>
                </table>
            </body>`
        }

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    })
})