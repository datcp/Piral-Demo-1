module.exports = function (ctx, req, res) {
    if (req.url == '/api/apiDemo') {
        return res({
            content: JSON.stringify([{
                id: '123',
                title: 'hello world!'
            },{
                id: '124',
                title: 'The Pilet'
            },{
                id: '125',
                title: 'Google'
            },{
                id: '127',
                title: 'Microsoft'
            }])
        })
    }
}