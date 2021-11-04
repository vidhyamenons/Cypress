pipeline{

    agent any
    
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/integration/local/gam/**/*.js", description: "Enter the script to run")
        choice(name: 'SCRIPT', choices: ['cy:open', 'cy:gamtesting'], description: "Select one")
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