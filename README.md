# docker_hw2
Everything in homework_2 shipped and containerized into 2 docker containers; 1 for front-end, 1 for back-end

## Setup 
### In the twitter-client directory:
```
docker build -t client .
docker run -p 4200:4200 client
```
### In the express-server directory:
```
docker build -t server .
docker run -p 3000:3000 server
```

After building images for both client & server and running them, you can now access the application on http://localhost:4200

## To run the full-stack application in one command
### In the docker_hw2 directory:
```
docker-compose up
```

# homework_2
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
