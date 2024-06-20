pipeline {
    agent any

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
                branch 'main'
            }
            steps {
                echo 'Deploying...'
                 withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', aws-pipeline-credentials: 'aws-pipeline-credentials']]) {
                // Aquí van los pasos para desplegar tu proyecto
                // Desplegar usando Serverless Framework
                sh 'serverless deploy'
            }
        }
    }
}
