const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { runChat } = require('./runChat');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;

// Import the Next.js server
const next = require('next');

// Create a Next.js instance (development or production mode)
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: './frontend/' });

// Prepare the Next.js instance for handling requests
const handle = nextApp.getRequestHandler();

nextApp
    .prepare()
    .then(() => {
        // Endpoint to handle POST requests for generating prompt (unchanged)
        app.post('/api/generate-prompt', async (req, res) => {
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

        // Delegate routing to Next.js for all other requests
        app.all('*', (req, res) => {
            return handle(req, res);
        });

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
        process.exit(1); // Exit on errors
    });
