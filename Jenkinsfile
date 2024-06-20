pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID = credentials('aws-credentials').accessKey
        AWS_SECRET_ACCESS_KEY = credentials('aws-credentials').secretKey
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Aquí van los pasos para construir tu proyecto
                // Por ejemplo, si estás usando Node.js:
                // sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Aquí van los pasos para probar tu proyecto
                // Por ejemplo, si estás usando pruebas con Node.js:
                // sh 'npm test'
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploying...'
                // Aquí van los pasos para desplegar tu proyecto
                // Desplegar usando Serverless Framework
                sh 'serverless deploy'
            }
        }
    }
}
