pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh '''whoami; cd TwitterApp; 
echo "Setting up environment...";    sudo apt  install nodejs npm;








npm install;'''
      }
    }
    stage('Test') {
      steps {
        sh '''ng --version;
cd TwitterApp; echo "Testing..."; 
ng test;'''
      }
    }
    stage('Build') {
      steps {
        sh 'cd TwitterApp; echo "Building..."; ng build;'
      }
    }
    stage('Deploy') {
      steps {
        sh ''' echo "Deploying..."; 
/bin/mv TwitterApp/dist Docker/twitter-client/dist; 
cd Docker;
docker-machine create --driver virtualbox default;
eval "docker-machine env default";  
docker-compose up;'''
      }
    }
    stage('Cleanup') {
      steps {
        sh 'cd TwitterApp; echo "Cleaning up..."; rm -r node_modules'
      }
    }
  }
}