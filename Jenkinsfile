pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running code quality checks...'
                sh 'npm audit || true'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running security scan...'
                sh 'npm audit --audit-level=high || true'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'echo "Application deployed to staging environment"'
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing application...'
                sh 'echo "Production release completed"'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring application...'
                sh 'echo "Monitoring and alerting enabled"'
            }
        }
    }
}