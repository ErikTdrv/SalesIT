const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const initDatabase = require('./config/database');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const { authMiddleware } = require('./middlewares/authMiddleware');

startServer()
async function startServer() {
    try {
        app.use(cors({
            origin: 'https://salesit-fe.ew.r.appspot.com',
            // origin: ['http://localhost:3000', 'https://salesit-fe.ew.r.appspot.com'],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'Origin', 'X-Requested-With', 'Accept', 'Cookie'],
            credentials: true,
            allowedHeaders: ['Content-Type, X-Authorization, X-RapidAPI-Key, X-RapidAPI-Host'],
            optionsSuccessStatus: 200,
        }))

        app.use(cookieParser())
        app.use(bodyParser.json({ limit: '50mb' }));
        app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        app.use(express.json())
        app.use(authMiddleware)
        app.use(router)

        //Initializing database
        let port = process.env.PORT || 8080
        app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))
        await initDatabase()
    } catch (error) {
        console.log(error)
    }
}