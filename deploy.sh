#!/bin/bash

# deploy.sh - deploy to gh-pages branch

if [ $# != 1 ]
then
	echo "Usage: ./deploy.sh [commit message]"
	exit
fi

export NODE_OPTIONS=--openssl-legacy-provider

# Commit source changes first
git add .
git commit -m "$1"
git push origin master

# Install dependencies
yarn

# Build and deploy to gh-pages
yarn build
npx gh-pages -d build

echo "Deploy complete! Site will be live at https://www.chanlawrencet.com"
