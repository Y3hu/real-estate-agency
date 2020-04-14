// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin')
admin.initializeApp()

exports.sendMessage = functions.https.onRequest(async (req, res)=>{
    let {name, lastName, email, message} = req.body

    let transporter = nodemailer.createTransport({
        host: "hotmail",
        auth: {
            user: `y_chavarria14@hotmail.com`, // generated ethereal user
            pass: `k!ller3546` // generated ethereal password
        }
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `y_chavarria14@hotmail.com`, // sender address (who sends)
        to: `ychavarria18@gmail.com`, // list of receivers (who receives)
        subject: `Posible business`, // Subject line
        html: `<b>Hello Anne Marie!, ${name} ${lastName} wants to contact you and left you this message: </b><br> ${message}.<br>${name} provided this email where you can answer: ${email} ` // html body
    })

    res.send("Message sent: %s", info.messageId)
})