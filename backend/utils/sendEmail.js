import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, html) => {

    console.log(to)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'shamsherkhan356095@gmail.com',
      pass: process.env.PASS
    }
  });

  await transporter.sendMail({
    from: '"Mail" shamsherkhan356095@gmail.com',
    to,
    subject,
    html
  });
};

export default sendEmail;
