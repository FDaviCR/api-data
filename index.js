const app = require('./src/server');
const port = 8080;

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});