
const express = require('express');
const app = express();
app.use(express.json());

const users = [{ id: 1, username: 'student1', password: 'password123', role: 'student' }];
const pastResults = [{ id: 1, userId: 1, module: 'Node.js Advanced', score: 92 }];

app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful', userId: user.id, role: user.role });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.get('/api/results/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const results = pastResults.filter(r => r.userId === userId);
    res.status(200).json({ results });
});

app.post('/api/evaluate', (req, res) => {
    const { userId, score } = req.body;
    let badge = null;
    if (score >= 90) badge = 'Expert';
    else if (score >= 70) badge = 'Intermediate';
    
    res.status(200).json({ 
        message: 'Evaluation complete', 
        awardedBadge: badge,
        nextModule: score >= 70 ? 'Advanced Module' : 'Review Module'
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => console.log('Node.js Server running on port 3000'));
}
