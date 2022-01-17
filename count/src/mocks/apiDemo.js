module.exports = function (ctx, req, res) {
    if (req.url == 'api/apiDemo') {
        return res({
            content: JSON.stringify([{
                id: '123',
                title: 'hello world!'
            }])
        })
    }
}