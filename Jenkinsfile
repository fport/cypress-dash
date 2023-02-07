pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build.'
                sh 'docker rm cypress-test --force'
                sh 'docker build --build-arg  -t cypress-test .'
                sh 'docker run --name cypress-test -d -p 80:80 cypress-test'

            }
        }
    }
}