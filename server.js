const express = require('express'); 
const app = express();

app.use(express.static('./dist/module-app')); 
app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/module-app/' }),
); 
app.listen(process.env.PORT || 8080);