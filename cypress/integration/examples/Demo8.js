/// <reference types="Cypress" />
import 'cypress-iframe'

describe("First Test Suite", function()
{

it("Eighth Test Case", function()

{
    //Frames
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
    
    


  })

})