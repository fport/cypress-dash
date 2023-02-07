pipeline {
   agent any

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm i'
           }
       }
       stage('e2e Tests') {
           steps {
               sh 'npm run cypress'
           }
       }
       
   }
}
