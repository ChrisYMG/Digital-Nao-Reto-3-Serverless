pipeline {
    agent any

    environment {
        PATH = "/home/ubuntu/.nvm/versions/node/v20.14.0/bin:${env.PATH}"
        NVM_DIR = "/home/ubuntu/.nvm"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
                [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" # This loads nvm bash_completion
                npm install
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
                [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" # This loads nvm bash_completion
                npm test
                '''
            }
        }
        stage('Deploy') {
            when {
                branch 'main' // Asegúrate de que esto coincida con el nombre de tu rama
            }
            steps {
                echo 'Deploying...'
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-pipeline-credentials']]) {
                    sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
                    [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" # This loads nvm bash_completion
                    serverless deploy
                    '''
                }
            }
        }
    }
}
