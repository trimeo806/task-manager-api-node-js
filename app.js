const express = require('express');
const taskRoutes = require('./routes/task.route');

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Task manager app');
});

//routes
app.use('/api/v1/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
