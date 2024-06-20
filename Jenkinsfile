pipeline {
    agent any

    environment {
        PATH = "/home/ubuntu/.nvm/versions/node/v20.14.0/bin:${env.PATH}"
        NVM_BIN = "/home/ubuntu/.nvm/versions/node/v20.14.0/bin"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Aquí van los pasos para construir tu proyecto
                // Por ejemplo, si estás usando Node.js:
                sh 'chmod -R 777 .' // Otorga permisos temporales (cuidado con usar 777 en producción)
                sh 'npm install'
                sh 'chmod -R 755 .' // Restaura los permisos
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Aquí van los pasos para probar tu proyecto
                // Por ejemplo, si estás usando pruebas con Node.js:
                sh 'npm test'
            }
        }
        stage('Deploy') {
            when {
                branch 'main' // Asegúrate de que esto coincida con el nombre de tu rama
            }
            steps {
                echo 'Deploying...'
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-pipeline-credentials']]) {
                    // Aquí van los pasos para desplegar tu proyecto
                    // Desplegar usando Serverless Framework
                    sh 'serverless deploy'
                }
            }
        }
    }
}
