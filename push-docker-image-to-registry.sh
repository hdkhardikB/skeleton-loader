#!/bin/sh

# Login
docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD

# Push latest to docker
docker build -t evl-ui-components:latest --build-arg
docker tag evl-ui-components:latest everledgerio/evl-ui-components:latest
docker push everledgerio/evl-ui-components:latest

# Push Bitbucket build number as tag to docker
docker tag everledgerio/evl-ui-components:latest everledgerio/evl-ui-components:$BITBUCKET_BUILD_NUMBER
docker push everledgerio/evl-ui-components:$BITBUCKET_BUILD_NUMBER