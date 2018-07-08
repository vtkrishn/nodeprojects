#!/bin/bash

git config --global credential.helper "cache --timeout=3600"

[[ ! $1 ]] && {
	echo 'please provide comment'
	exit 0	
}

git add .
git commit -m $1
git push origin master
