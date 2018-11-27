pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        sh 'echo "Testing..."; ng test'
      }
    }
    stage('Build') {
      steps {
        sh 'echo "Building..."; ng build;'
      }
    }
    stage('') {
      steps {
        sh 'echo "Deploying..."'
      }
    }
  }
}