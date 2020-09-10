#!/usr/bin/env bash

if [ $# !=  2 ]
then
    echo "Usage: ./deploy.sh [commit message]"
fi

yarn deploy

rm -rf ../build
mv ./build ..

git checkout master

cp -r ../build/* .
rm -rf ../build

git add .
git commit -m "$1"
git push

git checkout dev

