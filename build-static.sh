#!/bin/bash

# Build the application for static deployment
echo "Building application..."
npm run build

# Copy built files from dist/public to dist root for static deployment
echo "Preparing static deployment structure..."
if [ -d "dist/public" ]; then
    cp -r dist/public/* dist/
    rm -rf dist/public
    echo "✅ Static deployment structure ready!"
    echo "Files available in dist/ directory:"
    ls -la dist/
else
    echo "❌ dist/public directory not found. Build may have failed."
    exit 1
fi

echo "🚀 Ready for static deployment on Replit!"