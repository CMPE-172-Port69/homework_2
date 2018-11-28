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
ng test;'''
      }
    }
    stage('Build') {
      steps {
        sh 'cd TwitterApp; echo "Building..."; ng build;'
      }
    }
    stage('Cleanup') {
      steps {
        sh 'cd TwitterApp; echo "Cleaning up..."; rm -r node_modules'
      }
    }
  }
}