#  MCP Filesystem Tool

This is a simple full-stack MCP (Multi-Client Protocol) application that allows users to upload a folder, edit files inside it using AI, and download the updated folder.

## Features

- Upload a folder containing `.txt`, `.js`, or other text files  
- Use a prompt to edit file contents (e.g., "Change the heading", "Fix syntax")  
- Download the modified folder  
- Create, edit, and delete files through the frontend

## Project Structure
mcp/
├── client/       # React frontend
├── server/       # Node.js backend (Express)
└── README.md     # Project instructions

## 🧑‍💻 Tech Stack

- Frontend: React.js, Axios  
- Backend: Node.js, Express.js, Multer (file upload handling)  
- File Editing: Based on simple prompt-based edits (mocked)

---

## ⚙️ How to Run the Project Locally

### 1. Clone the Repo

```bash
git clone https://github.com/advithacr/MCP
cd MCP
```
### 2. Start the Backend
```bash
cd server
npm install
node index.js
```
The server will run at http://localhost:5000

### 3. Start the Frontend
Open a new terminal, then:
```bash
cd client
npm install
npm start
```
The frontend will run at http://localhost:3000


### 4. Using the App

- Upload a folder containing `.txt`, `.js`, or `.md` files.
- View the list of files.
- You can **view**, **edit**, or **delete** individual files.
- All uploaded files are stored in: `server/uploads/`.

### 5. Demo Screenshots  
<img width="1918" height="1017" alt="image" src="https://github.com/user-attachments/assets/2cdc7119-162c-4f53-859d-60733503797e" />

Author  
**Advitha CR**  
GitHub: [https://github.com/advithacr](https://github.com/advithacr)



