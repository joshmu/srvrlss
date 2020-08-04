const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  const {
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
    // settings
    host,
    port,
    secure,
    smtp_user,
    smtp_pass,
  } = req.body

  const mailItem = { from, to, subject, text, html }
  const transporter = { host, port, secure, smtp_user, smtp_pass }
  try {
    console.log({ mailItem, transporter })
    await email(transporter, mailItem)
    res.status(200).send({ msg: 'success' })
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: err.message })
  }
}

async function email({ host, port, secure, smtp_user, smtp_pass }, mailItem) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: host || 'smtp.dreamhost.com',
    port: +port || 587,
    secure: secure === 'true' || false, // true for 465, false for other ports
    auth: {
      user: smtp_user,
      pass: smtp_pass,
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail(mailItem)

  return info
}
