pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh '''export PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin; cd TwitterApp; 
echo "Setting up environment...";  








npm install;'''
      }
    }
    stage('Test') {
      steps {
        sh '''export PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin; 
ng --version;
cd TwitterApp; echo "Testing..."; 
ng test;'''
      }
    }
    stage('Build') {
      steps {
        sh 'export PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin; cd TwitterApp; echo "Building..."; ng build;'
      }
    }
    stage('Deploy') {
      steps {
        sh ''' export PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin; 
echo "Deploying..."; 
/bin/mv TwitterApp/dist Docker/twitter-client/dist; 
cd Docker; 
eval $(docker-machine env the-vm-name);
docker-machine ls;
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