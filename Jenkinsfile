pipeline{

    agent any
    
    parameters{
        
        choice(name: 'SCRIPT', choices: ['greenkart', 'all'], description: "Select one")
    }
    stages{
        
        stage('Building'){
            steps{
            echo "Building the application"
            }
            
        }    
        stage('Testing'){
            steps{
                sh "cypress run --headed --spec ${SPEC}"
                }
            }
            stage('Deploying'){
                steps{
            echo "Deploy the application"
                }
            
        } 
    }
    
}