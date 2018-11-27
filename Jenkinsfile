pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        sh 'cd TwitterApp; echo "Testing..."; ng test'
      }
    }
    stage('Build') {
      steps {
        sh 'echo "Building..."; ng build;'
      }
    }
    stage('error') {
      steps {
        sh 'echo "Deploying..."'
      }
    }
  }
}