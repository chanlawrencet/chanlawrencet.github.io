#!/bin/bash

if [ $# != 2 ]
then
	echo "Usage: ./deploy.sh [commit message]
	exit
fi

yarn build

rm -rf ../build
mv build ..

git checkout master
cp -r ../build/* .

git add .
git commit -m "$1"
git push

git checkout dev

echo "Deploy complete."


