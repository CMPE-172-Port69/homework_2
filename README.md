# Docker
Everything in TwitterApp shipped and containerized into 2 docker containers (Docker/express-server, Docker/twitter-client); 1 for front-end, 1 for back-end

## FOR TESTING: To run the two containers seperately
### In the twitter-client directory:
```bash
docker build -t client .
docker run -p 4200:4200 client
```
### In the express-server directory:
```bash
docker build -t server .
docker run -p 3000:3000 server
```
After building images for both client & server and running them, you can now access the application on http://localhost:4200

## PREFERRED: To run the full-stack application in one command
Make sure all containers are killed before running or else ports will conflict
To check running containers:
```bash
docker ps
```
If there are any listings, to kill a container:
```bash
docker kill <CONTAINER ID>
```
### Run the docker-compose.yml file in the Docker directory:
This builds and starts all the containers
```bash
docker-compose up
```
You can now access the application on http://localhost:4200

#### References
https://www.linkedin.com/pulse/serve-static-files-from-docker-via-nginx-basic-example-arun-kumar/

# TwitterApp
Web app using Docker and Twitter API
Built with Angular 6 Framework, Nodejs, Express, and twit

## Setup
```bash
git clone https://github.com/CMPE-172-Port69/homework_2
cd homework_2/TwitterApp
npm i
npm run start
npm run build

cp .env.example .env
# Then update the API keys in ./TwitterApp/.env
```
