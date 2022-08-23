
pipeline {
    agent any
    tools {
        nodejs "NODEJS"
    }
    stages {
        stage('Build') { 
            steps {
                bat 'npm install' 
                bat  'npm run build'
            }
        }
    }
}