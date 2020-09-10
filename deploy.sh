#!/bin/bash

# deploy.sh

if [ $# != 1 ]
then
	echo "Usage: ./deploy.sh [commit message]"
	exit
fi

yarn build

rm -rf ../build
mv build ..

git stash

git checkout master
cp -r ../build/* .

git add .
git commit -m "$1"
git push

git checkout dev
git stash apply

echo "Deploy complete."


