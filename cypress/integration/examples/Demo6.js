/// <reference types="Cypress" />


describe("First Test Suite", function()
{

it("Fourth Test Case", function()

{
    //Mouse Actions
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //jQuery command invoke will work only on immediate parent of hidden element
    //cy.get('.mouse-hover-content').invoke('show')
    //cy.contains('Top').click()
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')  


  })

})