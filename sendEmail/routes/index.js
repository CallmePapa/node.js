var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;


var mailTransport = nodemailer.createTransport({
    host: 'smtp.126.com',
    secureConnection: true,//使用ssl方式（安全方式，防止被窃取信息）
    auth: {
        user: '18892086233@163.com',
        pass: ''//邮箱授权码
    }
});

/*get home page.*/
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'})
});

router.get('/send', function (req, res, next) {
    var options = {
        from: '"weiqiujuan"<18892086233@163.com>',
        to: 'weiqiujuan"<1062927638@qq.com>,"System"<18892086233@163.com>',
        cc: '',//抄送
        bcc: '',//密送
        subject: '163邮箱发往qq邮箱',
        text: '我在试着用node发邮件',
        html: '<h1>你好，这是一封来自NodeMailer的邮件！</h1><p><img src="cid:000001"/></p>',
        attachments: [
            {
                filename: 'page1.jpg',
                path: '/selfProject/sendEmail/app.js',
                cid: '000001'
            }
        ]//附件内容
    };
    mailTransport.sendMail(options, function (err, msg) {
        if (err) {
            console.log(err);
            res.render('index', {title: 'err'});
        } else {
            console.log(msg);
            res.render('index', {title: '已接收' + msg.accepted});
        }
    })
});

module.exports = router;