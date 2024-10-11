// netlify/functions/sendEmail.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    try {
        const { name, email, phone, textMessage } = JSON.parse(event.body);
        console.log('Dados recebidos:', name, email, phone, textMessage);
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Formulário do Site da Pixel" <${process.env.EMAIL_USER}>`,
            to: 'comercial@ejpixel.com.br',
            bcc: 'projetos@ejpixel.com.br, presidencia@ejpixel.com.br, gestaointerna@ejpixel.com.br, marketing@ejpixel.com.br',
            subject: 'Nova submissão de Formulário - Pixel',
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #6D3375;">Nova Submissão de Formulário - Pixel</h2>
            <p>Você recebeu uma nova submissão do formulário de contato com as seguintes informações:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr>
                    <td style="padding: 8px; background-color: #f2f2f2; font-weight: bold;">Nome:</td>
                    <td style="padding: 8px;">${name}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; background-color: #f2f2f2; font-weight: bold;">Email:</td>
                    <td style="padding: 8px;">${email}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; background-color: #f2f2f2; font-weight: bold;">Telefone:</td>
                    <td style="padding: 8px;">${phone}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; background-color: #f2f2f2; font-weight: bold;">Mensagem:</td>
                    <td style="padding: 8px;">${textMessage}</td>
                </tr>
            </table>
        </div>
    `,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Email enviado com sucesso' }),
        };
    } catch (error) {
        console.error('Erro ao enviar o email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Erro ao enviar o email' }),
        };
    }
};
