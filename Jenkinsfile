
pipeline {
    agent any
    tools {
        nodejs "NODEJS"
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh  'npm run build'
            }
        }
    }
}