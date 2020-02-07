#!/bin/sh

# Get tag from BB pipelines command
export TAG=$1

# Login
docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD

# Push latest to docker
docker tag evl-ui-components:latest everledgerio/evl-ui-components:latest
docker push everledgerio/evl-ui-components:latest

# Push Bitbucket build number as tag to docker
docker tag everledgerio/evl-ui-components:latest everledgerio/evl-ui-components:$TAG
docker push everledgerio/evl-ui-components:$TAG