const app = require('./app');

const port = 3000;

const start = () => {
    try {
        app.listen(port, () => {
            console.log(`server is running on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();