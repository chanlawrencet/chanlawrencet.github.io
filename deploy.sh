#!/bin/bash

# deploy.sh - simplified for master branch deployment

if [ $# != 1 ]
then
	echo "Usage: ./deploy.sh [commit message]"
	exit
fi

export NODE_OPTIONS=--openssl-legacy-provider

# Install dependencies
yarn

# Build the project
yarn build

# Copy build files to current directory
cp -r build/* .

# Clean up build directory
rm -rf build

# Commit and push
git add .
git commit -m "$1"
git push

echo "Deploy complete."
