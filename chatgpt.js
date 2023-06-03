module.exports = async function (RED) {
    const { got } = await import('got');
    const { Configuration, OpenAIApi } = require('openai');

    RED.httpAdmin.post('/chatgpt', RED.auth.needsPermission('notify.write'), async function (req, res) {
        try {
            const { body } = await got('http://127.0.0.1:1880/flows');
            if (!body) {
                throw new Error('cannot get flow data');
            }
            const openai = new OpenAIApi(new Configuration({
                apiKey: process.env.OPENAI_API_KEY
            }));
            const request = {
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: "Write a Markdown document with a mermaid sequence diagram without JSON data to describe the following Node-RED flow.\n\n" + body
                }]
            };
            console.log(JSON.stringify(request));
            const completion = await openai.createChatCompletion(request);
            res.json({ body: completion.data.choices[0].message.content });
            console.log(JSON.stringify(completion.data));
        } catch (e) {
            RED.log.error(e);
            res.json({ body: e.toString() });
        }
    });
    RED.plugins.registerPlugin('chatgpt', { type: 'chatgpt' });
};
