# 🧠 Mini Shell in Node.js

A custom-built shell implemented in Node.js that mimics the behavior of real terminals like bash or cmd.  
It accepts user input, resolves commands using the system PATH, and executes them in real time.

This project goes beyond basic terminal usage to explore how command execution actually works under the hood.

---

## ✨ Project Overview

A shell is a program that acts as an interface between the user and the operating system.  
It reads commands, processes them, and delegates execution to the system.

This project was built to understand:

- How commands are parsed and executed
- How operating systems locate executables
- How real shells manage built-in vs external commands

---

## ⚙️ Core Features

- **Interactive CLI** — Real-time command input using a custom prompt
- **Command Parsing** — Interprets user input and separates command + arguments
- **Built-in Commands**
  - `echo` — Outputs text
  - `exit` — Terminates the shell
  - `type` — Identifies whether a command is builtin or external
- **External Command Execution**
  - Runs system-installed tools like `node`, `git`, `python`
  - Uses PATH resolution to locate executables
- **PATH Lookup Mechanism**
  - Iterates through environment paths to find matching executables
- **Cross-Platform Support**
  - Handles `.exe`, `.cmd`, `.bat` on Windows
- **Process Handling**
  - Spawns child processes to execute external programs

---

## 🛠️ Tech & Concepts Used

### Node.js Core Modules

- **readline**  
  Handles interactive input/output for building CLI applications

- **path**  
  Resolves and normalizes file system paths across platforms

- **fs**  
  Interacts with the file system to verify executable existence

- **child_process**  
  Spawns and manages external processes for command execution

---

## 📚 Key Learnings

- Difference between a **terminal** and a **shell**
- How command execution flows from input → parsing → execution
- How operating systems use the **PATH environment variable**
- How to avoid duplication using **DRY principles**
- How Node.js can be used beyond web development for **system-level tools**
- How `process.argv` and child processes work internally

---

## 🚀 Getting Started

### 1. Clone the repository

````bash
git clone <your-repo-link>
### 2. install the dependencies
``` bash
npm

### 3.execute the command
```bash
npm run dev


````
