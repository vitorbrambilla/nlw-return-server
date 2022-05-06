import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "86f8b3d945e46c",
    pass: "7d904ad55d21d8"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <fd@feedget.com>',
    to: 'Vitor Reis <vitorbrambilla29@gmail.com>',
    subject,
    html: body,
  });
  }
}