pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Aquí van los pasos para construir tu proyecto
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Aquí van los pasos para probar tu proyecto
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploying...'
                // Aquí van los pasos para desplegar tu proyecto
            }
        }
    }
}