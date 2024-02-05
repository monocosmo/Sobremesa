#! /bin/bash

# Please set up docker network and mongoDB first
# docker network create node-app
# docker pull mongo
# docker run -d -p 27017:27017 --network node-app --name mongo_db mongo

docker rm sobremesa

docker run -d -p 8082:3000 --network node-app --name sobremesa -e DATABASEURL=mongodb://mongo_db:27017/restful_blog_app -e PORT=3000 -e IP=0.0.0.0 sobremesa
