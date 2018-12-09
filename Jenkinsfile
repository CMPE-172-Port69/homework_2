pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh '''
          whoami; 
          echo "Setting up environment...";
          cd TwitterApp;
          npm install;'''
      }
    }
    stage('Test') {
      steps {
        sh '''
          ng --version;
          cd TwitterApp; 
          echo "Testing..."; 
          export CHROME_BIN=/usr/bin/chromium-browser; 
          ng test;'''
      }
    }
    stage('Build') {
      steps {
        sh '''
          cd TwitterApp; 
          echo "Building..."; 
          ng build; 
          mv dist ../Docker/twitter-client;'''
      }
    }
    stage('Deploy') {
      steps {
        sh '''
          echo "Deploying..."; 
          cd Docker; 
          sudo docker-compose build; 
          nohup sudo docker-compose up &'''
      }
    }
    stage('Cleanup') {
      steps {
        sh '''
          echo "Cleaning up..."; 
          rm -r TwitterApp/node_modules; 
          rm -r Docker/twitter-client/dist/*'''
      }
    }
  }
}