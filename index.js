const app = require('./app');
const config = require('./backend/config/config')
const PORT = config.app.port;

//listen app
app.listen(PORT, () => console.log(
    `app running on http://localhost:${PORT}`
))