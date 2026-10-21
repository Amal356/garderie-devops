pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'amal878'
        FRONT_IMAGE    = "${DOCKERHUB_USER}/garderie-frontend"
        BACK_IMAGE     = "${DOCKERHUB_USER}/garderie-backend"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                dir('frontend') { sh 'npm ci' }
                dir('backend')  { sh 'npm ci' }
            }
        }

        stage('Test') {
            steps {
                // Si le test échoue, npm renvoie un code d'erreur : le pipeline s'arrête ici
                dir('frontend') { sh 'npm test' }
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t $FRONT_IMAGE:latest -t $FRONT_IMAGE:$BUILD_NUMBER frontend'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t $BACK_IMAGE:latest -t $BACK_IMAGE:$BUILD_NUMBER backend'
            }
        }

        stage('Push Frontend') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials',
                                                  usernameVariable: 'DH_USER',
                                                  passwordVariable: 'DH_PASS')]) {
                    sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
                    sh 'docker push $FRONT_IMAGE:latest && docker push $FRONT_IMAGE:$BUILD_NUMBER'
                }
            }
        }

        stage('Push Backend') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials',
                                                  usernameVariable: 'DH_USER',
                                                  passwordVariable: 'DH_PASS')]) {
                    sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
                    sh 'docker push $BACK_IMAGE:latest && docker push $BACK_IMAGE:$BUILD_NUMBER'
                }
            }
        }
    }

    post {
        always  { sh 'docker logout || true' }
        success { echo 'Pipeline réussi : images publiées sur Docker Hub' }
        failure { echo 'Pipeline en échec : voir l\'étape en rouge' }
    }
}
