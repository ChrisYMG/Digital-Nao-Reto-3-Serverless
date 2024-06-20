pipeline {
    agent any

    environment {
        NVM_DIR = '/home/ubuntu/.nvm'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"
                    sudo $NVM_DIR/versions/node/v20.14.0/bin/npm install
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"
                    sudo $NVM_DIR/versions/node/v20.14.0/bin/npm test
                '''
            }
        }
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying...'
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-pipeline-credentials']]) {
                    sh '''
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"
                        sudo $NVM_DIR/versions/node/v20.14.0/bin/serverless deploy
                    '''
                }
            }
        }
    }
}
