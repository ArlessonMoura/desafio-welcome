const express = require('express');

const routerSchedule = require('./routers/scheduleRouter');

const app = express();
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));

app.use('/', routerSchedule);
app.use('/tasks', routerSchedule);

module.exports = app;
