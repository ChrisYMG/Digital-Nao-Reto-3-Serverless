pipeline {
    agent any

    environment {
        NVM_DIR = '/var/lib/jenkins/.nvm'
        // Especifica la versión de Node.js requerida por tu proyecto
        NODE_VERSION = '20'
    }

    stages {
        stage('Preparation') {
            steps {
                echo 'Setting up NVM and Node.js'
                sh '''
                    export NVM_DIR="$NVM_DIR"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"
                    nvm install $NODE_VERSION
                    nvm use $NODE_VERSION
                '''
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying...'
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-pipeline-credentials']]) {
                    sh 'serverless deploy'
                }
            }
        }
    }
}