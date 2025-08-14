# Deployment Fix Instructions

## Issue
The deployment is failing because the `.replit` file uses development commands instead of production commands.

## Current Configuration (in .replit file)
```
[deployment]
deploymentTarget = "autoscale"
run = ["sh", "-c", "npm run dev"]
```

## Required Fix
Update the deployment section in `.replit` file to:
```
[deployment]
deploymentTarget = "autoscale"
run = ["sh", "-c", "npm run build && npm start"]
```

## Alternative Production Commands
You can also use any of these production commands:

### Option 1 (Recommended):
```
run = ["sh", "-c", "npm run build && npm start"]
```

### Option 2:
```
run = ["npm", "run", "build"]
buildCommand = ["npm", "start"]
```

### Option 3:
```
run = ["sh", "-c", "npm run build && NODE_ENV=production node dist/index.js"]
```

## Manual Steps to Fix

1. Open the `.replit` file in the Replit editor
2. Find the `[deployment]` section (around line 8-10)
3. Change the `run` line from:
   ```
   run = ["sh", "-c", "npm run dev"]
   ```
   to:
   ```
   run = ["sh", "-c", "npm run build && npm start"]
   ```
4. Save the file
5. Try deploying again

## Verification
- Build script: ✅ Already configured (`npm run build`)
- Start script: ✅ Already configured (`npm start`)
- Production build: ✅ Tested and working
- Static assets: ✅ Generated in `dist/public/`

The project is production-ready, only the deployment configuration needs to be updated manually.