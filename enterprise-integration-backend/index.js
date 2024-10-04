const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let data = {
  program1: { title: "Program 1", content: "Data from program 1" },
  program2: { title: "Program 2", content: "Data from program 2" },
  program3: { title: "Program 3", content: "Data from program 3" },
};

app.get('/api/data/:program', (req, res) => {
  const program = req.params.program;
  if (data[program]) {
    res.json(data[program]);
  } else {
    res.status(404).json({ message: 'Program not found' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});

