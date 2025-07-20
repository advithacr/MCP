import React from 'react';
import axios from 'axios';

function App() {
  const handleFolderUpload = (e) => {
    const formData = new FormData();
    Array.from(e.target.files).forEach(file => {
      formData.append('files', file, file.webkitRelativePath);
    });

    axios.post('http://localhost:5000/upload', formData)
      .then(() => alert('Folder uploaded successfully!'))
      .catch(() => alert('Upload failed'));
  };

  const handleEditFile = async () => {
    const filename = prompt('Enter filename to edit (e.g., notes.txt):');
    const content = prompt('Enter new content:');
    if (filename && content) {
      await axios.post('http://localhost:5000/edit-file', { filename, content });
      alert('File updated');
    }
  };

  const handleDeleteFile = async () => {
    const filename = prompt('Enter filename to delete:');
    if (filename) {
      await axios.post('http://localhost:5000/delete-file', { filename });
      alert('File deleted');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>MCP File Manager</h2>
      <input
        type="file"
        webkitdirectory="true"
        directory="true"
        onChange={handleFolderUpload}
      />
      <br /><br />
      <button onClick={handleEditFile}>Edit/Create File</button>
      <button onClick={handleDeleteFile}>Delete File</button>
    </div>
  );
}

export default App;
