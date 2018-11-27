pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh '''cd TwitterApp; 









npm install;'''
      }
    }
    stage('Test') {
      steps {
        sh 'echo "Testing...";pwd ; ng test'
      }
    }
    stage('Build') {
      steps {
        sh 'echo "Building..."; ng build;'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "Deploying..."'
      }
    }
    stage('Cleanup') {
      steps {
        sh 'rm -r node_modules'
      }
    }
  }
}