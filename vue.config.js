let userData = require('./data/userData');


module.exports = {
    lintOnSave: false,
    devServer: {
        before: (app) => {
            app.get('/getLogin', (req, res) => {
                let { username, password } = req.query;
                let userFlag = userData.some(val => val.username == username && val.password == password);
                if (userFlag) {
                    res.json({
                        code: 0,
                        msg: "成功",
                        token: `${username}_${new Date() * 1}`
                    });
                } else {
                    res.json({ code: 1, msg: "失败" });
                }
            })
        }
    }
}