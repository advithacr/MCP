const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const UPLOAD_DIR = path.join(__dirname, 'uploads');
fs.ensureDirSync(UPLOAD_DIR);

const storage = multer({ dest: UPLOAD_DIR });
app.post('/upload', storage.any(), (req, res) => {
  res.json({ message: 'Folder uploaded' });
});

app.post('/edit-file', async (req, res) => {
  const { filename, content } = req.body;
  const filePath = path.join(UPLOAD_DIR, filename);
  try {
    await fs.outputFile(filePath, content);
    res.json({ message: 'File created/edited successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to edit file' });
  }
});

app.post('/delete-file', async (req, res) => {
  const { filename } = req.body;
  const filePath = path.join(UPLOAD_DIR, filename);
  try {
    await fs.remove(filePath);
    res.json({ message: 'File deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete file' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
