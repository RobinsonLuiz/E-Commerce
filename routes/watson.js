const Watson = require('watson-developer-cloud/assistant/v1');

const authentic = new Watson({
    username: 'f12c0e78-6582-4d4c-878a-2d63077bb278',
    password: '6MEj8RaI1cOE',
    url: 'https://gateway.watsonplatform.net/assistant/api/',
    version: '2018-02-16',
    headers: {
        'X-Watson-Learning-Opt-Out': 'true'
    }
});

var context = {};

module.exports = function (servidor) {
    servidor.get('/html/chatbot/:text*?', (req, res) => {
        var d = new Date();
        var hour = d.getHours();
        var minute = d.getMinutes();
        context.hour = hour;
        context.minute = minute;
        const { text } = req.params;
        const params = {
            context: context,
            workspace_id: '0daad9d2-03ff-4ae9-939d-2b762eed61bf',
            input: { text }
        };
        authentic.message(params, (err, response) => {
            if (err) res.status(500).json(err);
            new Promise(() => {
                context = response.context;
            }).then(res.json(response));
        });
    });
}