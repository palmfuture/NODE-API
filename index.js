const app = require('./app')
const PORT = 3000

if (process.env.NODE_ENV === 'production') {
    PORT = 80;
}

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})