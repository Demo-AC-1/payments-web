pipeline {
  agent any
  environment { IMAGE = 'registry.acme.example/payments/payments-web' }
  stages {
    stage('Build') { steps { sh 'docker build -t $IMAGE:$BUILD_NUMBER .' } }
    stage('Push')  { steps { sh 'docker push $IMAGE:$BUILD_NUMBER' } }
    stage('Deploy') { steps { sh 'kubectl set image deployment/payments-web app=$IMAGE:$BUILD_NUMBER' } }
  }
}
