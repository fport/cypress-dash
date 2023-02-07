pipeline {
   agent any

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm install'
           }
       }
       stage('e2e Tests') {
           steps {
               sh 'npm run cypress'
           }
       }
       
   }
}
