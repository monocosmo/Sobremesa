# Sobremesa

This is a RESTful cooking blog app. It is built with Node.js, Express and MongoDB, and styling with Sematic-ui.

## Live Demo

To see a demo of this app, go to [link](http://150.136.251.183:8082/blogs)

## Features

* RESTful routes
    * Create
    * Update
    * Edit
    * Delete
* Modern designing with Sematic-ui

## Installing

> This app contains API keys to private database, so please replace them with your own database resources before running on local machine. However, feel free to clone this repository if necessary.

### Clone or download this repository

```
https://github.com/monocosmo/Sobremesa.git
```

### Install dependencies

```
npm install
```
> Please check package.json for a complete dependencies list.

## Environment variables

The following code need environment variables ```DATABASEURL, PORT, IP``` as inputs. Please prepare for your own before deployment.
```
mongoose.connect(process.env.DATABASEURL);
app.listen(process.env.PORT, process.env.IP, function(){
...
});
```
* DATABASEURL: MongoDB Url
* PORT: Sobremesa App Host port
* IP: Sobremesa App Host IP

## Deployment
### Option 1: Deployment with Docker

* [Install Docker Engine](https://docs.docker.com/engine/install/)
* Create a new docker network
  ```
  docker network create <input_your_network_name>
  ```
* Create MongoDB container on the network
  ```
  docker pull mongo
  docker run -d --network <input_your_network_name> --name mongo_db mongo
  ```
* Create Sobremesa app container on the same network
  ```
  docker build -t sobremesa .
  docker run -d -p <input_your_host_port>:3000 --network <input_your_network_name> --name sobremesa -e DATABASEURL=mongodb://mongo_db/restful_blog_app -e PORT=3000 -e IP=0.0.0.0 sobremesa
  ```
  * Note 1: <input_your_host_port>:3000 means forwarding host port you defined to container port 3000.
  * Note 2: please replace the environment variables with your own.

### Option 2: Deployment on Heroku

Please setup your own environment variables for all process.env in the code during deploying.

## Built With

* [express](https://expressjs.com/) - Web framework
* [npm](https://www.npmjs.com/) - Dependency Management
* [mongoDB](https://www.mongodb.com/) - Database
* [ejs](http://ejs.co/) - Front-end
* [sematic-ui](https://semantic-ui.com/) - Styling

## Platforms

* [Cloud9](https://c9.io/)
* [Heroku](https://www.heroku.com/)
* [mlab](https://mlab.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This app is developed based on the project of Udemy course - [The Web Developer Bootcamp by Colt Steele](https://www.udemy.com/the-web-developer-bootcamp/).
* Also appreciate Colt's dogs' accompany all along this fantastic course.
