pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh '''whoami; cd TwitterApp; 
echo "Setting up environment..."; 








npm install;'''
      }
    }
    stage('Test') {
      steps {
        sh '''ng --version;
cd TwitterApp; echo "Testing..."; 
export CHROME_BIN=/usr/bin/chromium-browser; ng test;'''
      }
    }
    stage('Build') {
      steps {
        sh 'cd TwitterApp; echo "Building..."; ng build;'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "Deploying..."; cd Docker; export DOCKER_HOST=127.0.0.1:2376; docker-compose up;'
      }
    }
    stage('Cleanup') {
      steps {
        sh 'cd TwitterApp; echo "Cleaning up..."; rm -r node_modules'
      }
    }
  }
}