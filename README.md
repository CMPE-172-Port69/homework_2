# docker_hw2
Everything in homework_2 shipped and containerized into 2 docker containers; 1 for front-end, 1 for back-end

## Setup 
### In the twitter-client directory:
```
docker build -t client .
docker run -p 4200:4200 client (OPTIONAL, use this to test front-end)
```
### In the express-server directory:
```
docker build -t server .
docker run -p 3000:3000 server (OPTIONAL, use this to test back-end)
```

After building images for both client & server and running them, you can now access the application on http://localhost:4200

## To run the full-stack application in one command
Make sure all containers are killed before running or else ports will conflict
To check running containers:
```
docker ps
```
To kill a container:
```
docker kill <CONTAINER ID>
```
### In the docker_hw2 directory:
```
docker-compose up
```
After running the docker-compose command, you can now access the application on http://localhost:4200

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
