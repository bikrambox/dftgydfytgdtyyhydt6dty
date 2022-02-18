import { Webhook, MessageBuilder } from "webhook-discord";

const Hook = new Webhook("https://discord.com/api/webhooks/940887003027865641/iqsH85OfTUEkQ5ZQJV4CQDCi61fpHuP5_K9cgi8E5QQ5dnNQizWXnbclFE0TyG7vhAKs");

const msg = new MessageBuilder()
        .setName('Lambda Bot')
        .setTitle('Wasssssssup!')
        .setColor('#F76E11')
        // .setText('')
        .setAvatar('https://i2.wp.com/www.pnglib.com/wp-content/uploads/2021/02/coyote-white-logo_60231ee502139.png')
        // .setURL(`https://google.com`);
Hook.send(msg);

