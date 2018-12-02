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
        sh 'cd TwitterApp; echo "Deploying..."; cd Docker; docker-compose up;'
      }
    }
    stage('Cleanup') {
      steps {
        sh 'cd TwitterApp; echo "Cleaning up..."; rm -r node_modules'
      }
    }
  }
}