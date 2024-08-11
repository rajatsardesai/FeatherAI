const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { runChat } = require('./runChat');
require('dotenv').config();
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();

    server.use(cors());
    server.use(bodyParser.json());

    // API route to handle POST requests for generating prompt
    server.post('/api/generate-prompt', async (req, res) => {
        const prompt = req.body.prompt;
        if (!prompt) {
            return res.status(400).send('Prompt is required');
        }

        try {
            const responseText = await runChat(prompt);
            res.send(responseText);
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while generating response');
        }
    });

    // Serve static files from the public folder (Next.js serves this automatically)
    server.use(express.static(path.join(__dirname, '../frontend/next/public')));

    // Serve Next.js pages and handle all other requests
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    // Start the server
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
