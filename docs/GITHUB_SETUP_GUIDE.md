# GitHub Setup Guide - Complete Walkthrough

This guide walks you through every step to get your V14 Design System project on GitHub, from downloading the code to pushing updates.

---

## 📋 Prerequisites

Before starting, ensure you have:
- A GitHub account (create one at [github.com](https://github.com))
- Git installed on your computer
- A code editor (VS Code recommended)
- Node.js installed (version 18 or higher)

---

## Step 1: Install Git

### For Windows:
1. Download Git from [git-scm.com](https://git-scm.com/download/win)
2. Run the installer
3. Use default settings (click "Next" through all options)
4. Verify installation: Open Command Prompt and type:
   ```bash
   git --version
   ```
   You should see something like `git version 2.x.x`

### For Mac:
1. Open Terminal
2. Type:
   ```bash
   git --version
   ```
3. If not installed, macOS will prompt you to install Command Line Developer Tools
4. Click "Install" and follow the prompts

### For Linux (Ubuntu/Debian):
```bash
sudo apt-get update
sudo apt-get install git
```

---

## Step 2: Configure Git (First Time Only)

Open Terminal (Mac/Linux) or Command Prompt/Git Bash (Windows) and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and the email associated with your GitHub account.

---

## Step 3: Download Your Project from Lovable

### Option A: If Using Lovable's GitHub Integration
1. In Lovable, click the **GitHub** button (top right)
2. Click **"Connect to GitHub"**
3. Authorize the Lovable GitHub App
4. Click **"Create Repository"**
5. Choose a repository name (e.g., `v14-design-system`)
6. Click **"Create"**
7. Lovable will automatically create the repo and push all code
8. Click **"View on GitHub"** to see your repository
9. **Skip to Step 5** (clone the repository)

### Option B: Manual Download from Lovable
1. In Lovable, click the **menu** (three dots, top left)
2. Click **"Download project"**
3. Save the ZIP file to your computer
4. Extract the ZIP file to a folder (e.g., `v14-design-system`)

---

## Step 4: Create a New GitHub Repository (Manual Method Only)

**Skip this if you used Option A above**

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in repository details:
   - **Repository name**: `v14-design-system` (or your preferred name)
   - **Description**: "V14 Payment App Design System with comprehensive design tokens"
   - **Visibility**: Choose Public or Private
   - **DO NOT** check "Add a README file"
   - **DO NOT** add .gitignore or license (we already have them)
4. Click **"Create repository"**
5. **Keep this page open** - you'll need the commands shown

---

## Step 5: Clone Your Repository (If Using Lovable GitHub Integration)

If you created the repo through Lovable:

1. Go to your GitHub repository page
2. Click the green **"Code"** button
3. Copy the HTTPS URL (e.g., `https://github.com/username/v14-design-system.git`)
4. Open Terminal/Command Prompt
5. Navigate to where you want the project:
   ```bash
   cd Documents
   # or wherever you want to store the project
   ```
6. Clone the repository:
   ```bash
   git clone https://github.com/username/v14-design-system.git
   ```
7. Navigate into the project:
   ```bash
   cd v14-design-system
   ```
8. **Skip to Step 7** (install dependencies)

---

## Step 6: Initialize Git and Push to GitHub (Manual Method Only)

**Skip this if you used Lovable's GitHub integration**

1. Open Terminal/Command Prompt
2. Navigate to your extracted project folder:
   ```bash
   cd path/to/v14-design-system
   ```
   Example (Windows):
   ```bash
   cd C:\Users\YourName\Downloads\v14-design-system
   ```
   Example (Mac/Linux):
   ```bash
   cd ~/Downloads/v14-design-system
   ```

3. Initialize Git repository:
   ```bash
   git init
   ```

4. Add all files:
   ```bash
   git add .
   ```

5. Create first commit:
   ```bash
   git commit -m "Initial commit: V14 Design System"
   ```

6. Add GitHub repository as remote (replace URL with yours from Step 4):
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/v14-design-system.git
   ```

7. Push code to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

8. Refresh your GitHub repository page - you should see all your files!

---

## Step 7: Install Project Dependencies

1. Make sure you're in the project directory:
   ```bash
   pwd    # (Mac/Linux) or
   cd     # (Windows) to see current directory
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```
   This will take 1-2 minutes.

---

## Step 8: Run the Project Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and go to:
   ```
   http://localhost:8080
   ```

3. You should see your V14 Design System demo page!

4. To stop the server: Press `Ctrl + C` in Terminal

---

## Step 9: Making Changes and Pushing Updates

### Workflow for Every Update:

1. **Make changes** in your code editor (VS Code, etc.)

2. **Check what changed**:
   ```bash
   git status
   ```

3. **Stage your changes**:
   ```bash
   git add .
   ```
   Or add specific files:
   ```bash
   git add src/components/Button.tsx
   ```

4. **Commit with a descriptive message**:
   ```bash
   git commit -m "Add new button component with variants"
   ```

5. **Push to GitHub**:
   ```bash
   git push
   ```

6. Refresh your GitHub repository page to see updates!

---

## Step 10: Best Practices for Commits

### Good Commit Messages:
```bash
git commit -m "Add primary button variant with hover states"
git commit -m "Update color tokens for better accessibility"
git commit -m "Fix responsive layout on mobile devices"
git commit -m "Add typography scale documentation"
```

### Bad Commit Messages:
```bash
git commit -m "updates"
git commit -m "fixed stuff"
git commit -m "changes"
```

### Commit Frequently:
- Commit after completing each feature
- Commit before taking a break
- Commit before trying something experimental

---

## Step 11: Working with Branches (Optional but Recommended)

Branches let you work on features without affecting the main code.

### Create a New Branch:
```bash
git checkout -b feature/add-card-component
```

### Work on Your Feature:
Make changes, commit as usual:
```bash
git add .
git commit -m "Add card component with shadow variants"
```

### Push Branch to GitHub:
```bash
git push -u origin feature/add-card-component
```

### Switch Back to Main Branch:
```bash
git checkout main
```

### Merge Feature Branch into Main:
```bash
git checkout main
git merge feature/add-card-component
git push
```

---

## Step 12: Syncing with Lovable (If Using GitHub Integration)

If you connected Lovable to GitHub:

### Lovable → GitHub:
- Changes in Lovable automatically push to GitHub
- No action needed!

### GitHub → Lovable:
- Push changes from your local machine to GitHub
- Lovable automatically syncs the changes
- Refresh Lovable to see updates

### Making Changes Locally and in Lovable:
1. Make changes in Lovable → Auto-pushed to GitHub
2. Pull latest changes locally:
   ```bash
   git pull
   ```
3. Make local changes → Commit and push
4. Changes sync back to Lovable automatically

---

## 🔧 Troubleshooting

### "Git is not recognized as an internal or external command"
- Git is not installed or not in PATH
- Solution: Reinstall Git and restart your terminal

### "Permission denied (publickey)"
- SSH key not set up with GitHub
- Solution: Use HTTPS URL instead, or set up SSH keys following [GitHub's guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### "Failed to push some refs"
- Your local code is behind GitHub
- Solution:
  ```bash
  git pull --rebase
  git push
  ```

### "Merge conflict"
- Same file edited in two places
- Solution: Open the file, resolve conflicts manually, then:
  ```bash
  git add .
  git commit -m "Resolve merge conflict"
  git push
  ```

### "npm: command not found"
- Node.js not installed
- Solution: Download and install from [nodejs.org](https://nodejs.org)

---

## 📚 Common Git Commands Reference

| Command | What It Does |
|---------|-------------|
| `git status` | See what files changed |
| `git add .` | Stage all changes |
| `git add filename` | Stage specific file |
| `git commit -m "message"` | Save changes with message |
| `git push` | Upload to GitHub |
| `git pull` | Download from GitHub |
| `git log` | See commit history |
| `git diff` | See what changed in files |
| `git checkout -b branchname` | Create new branch |
| `git checkout branchname` | Switch to branch |
| `git branch` | List all branches |

---

## ✅ Success Checklist

- [ ] Git installed and configured
- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Project runs locally (`npm run dev`)
- [ ] Can make changes and push updates
- [ ] Understand basic Git workflow

---

## 🎯 Next Steps

Now that your project is on GitHub:

1. **Set up Figma integration** → See `FIGMA_TOKENS_SETUP.md`
2. **Enable GitHub Pages** for free hosting (optional)
3. **Set up automated deployments** with Vercel or Netlify
4. **Invite collaborators** to contribute to your design system

---

## 📖 Additional Resources

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Lovable GitHub Integration Docs](https://docs.lovable.dev/)

---

**You're all set! Your V14 Design System is now version-controlled on GitHub.** 🎉
