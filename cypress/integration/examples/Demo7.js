/// <reference types="Cypress" />


describe("First Test Suite", function()
{

it("Fourth Test Case", function()

{
    //child windows
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#opentab').then(function(el)
    {
      const url=prop('href')
      cy.visit(url)
    
})
    
    


  })

})