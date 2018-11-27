pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh '''cd TwitterApp; 
echo "Setting up environment...";  








npm install;'''
      }
    }
    stage('Test') {
      steps {
        sh 'cd TwitterApp; echo "Testing..."; ng test'
      }
    }
    stage('Build') {
      steps {
        sh 'cd TwitterApp; echo "Building..."; ng build;'
      }
    }
    stage('Deploy') {
      steps {
        sh ' echo "Deploying..."; mv TwitterApp/dist Docker/twitter-client/dist; cd Docker; docker-compose up;'
      }
    }
    stage('Cleanup') {
      steps {
        sh 'cd TwitterApp; echo "Cleaning up..."; rm -r node_modules'
      }
    }
  }
}