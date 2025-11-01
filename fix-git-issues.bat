@echo off
echo Fixing Git/GitHub issues...

echo 1. Removing tracked dist files...
git rm -r --cached dist/
git commit -m "Remove tracked build files from Git"

echo 2. Discarding local changes in dist...
git checkout -- dist/ 2>nul

echo 3. Adding new files...
git add DEPLOYMENT_CERTIFICATION.md PRODUCTION_DEPLOYMENT_REPORT.md

echo 4. Committing changes...
git add src/pages/Home.jsx yarn.lock
git commit -m "Update Home component and dependencies"

echo 5. Pushing to origin...
git push origin main

echo Git issues fixed!
pause