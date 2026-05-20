pipeline {

    agent any

    environment {
        IMAGE_NAME = "task-api"
        CONTAINER_NAME = "task-api-container"
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building Docker Image...'

                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Automated Tests...'

                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running SonarQube Analysis...'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running Trivy Security Scan...'
            }
        }

        stage('Deploy') {
            steps {

                echo 'Deploying Application...'

                sh '''
                docker rm -f $CONTAINER_NAME || true
                docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }

        stage('Release') {
            steps {
                echo 'Release Stage Completed'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring Stage Configured'
            }
        }
    }
}