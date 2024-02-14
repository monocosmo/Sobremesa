#! /bin/bash

# Please set up docker network and mongoDB first
# docker network create <your_network_name>
# docker pull mongo
# docker run -d --network <your_network_name> --name mongo_db mongo

# input your_network_name
if [[ $1 == "" ]] 
	then
	echo "Please input your network name as an arg"
	exit 1
fi

docker stop sobremesa

docker rm sobremesa

docker run -d -p 8082:3000 --network $1 --name sobremesa -e DATABASEURL=mongodb://mongo_db/restful_blog_app -e PORT=3000 -e IP=0.0.0.0 sobremesa
