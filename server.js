require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ===== Middleware =====
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// ===== Routes =====

// root → login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// login API
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin') {
        return res.json({
            success: true,
            redirect: '/dashboard.html'
        });
    }

    return res.status(401).json({
        success: false,
        message: 'Login Failed'
    });
});

// ===== Start server =====
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
