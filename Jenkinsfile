pipeline{

    agent any
    
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/integration/examples", description: "Enter the script to run")
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