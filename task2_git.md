# Create a new directory for your project
```
mkdir my_project
cd my_project
```

# Initialize a new Git repository
```
git init
```

# Configure user information
```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

# Create a new file
```
echo "# My Project" > README.md
```

# Stage the file for commit
```
git add README.md
```

# Commit the file to the repository
```
git commit -m "Initial commit"
```

# Add a remote repository (e.g., GitHub)
```
git remote add origin https://github.com/username/my_project.git
```

# Push the commit to the remote repository
```
git push -u origin master
```
  


## Understanding Git Objects: Commits, Trees, and Blobs
# View the commit history:
```
git log
```

# Display a specific commit's details:
```
git show <commit_hash>
```

# Examine the tree structure of a commit:
```
git ls-tree <commit_hash>
```
