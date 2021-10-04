let app = require('./app');

/**
 * Get port from environment and store in Express.
 */

let port = process.env.PORT || '4000';
app.set('port', port);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})