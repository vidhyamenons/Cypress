/// <reference types="Cypress" />


describe("First Test Suite", function()
{

it("Fourth Test Case", function()

{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    cy.on('window:alert', (str)=>
    {
      //Mocha
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm', (str)=>
    {
      //Mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    cy.wait(2000)
    //Child Window by removing target attribute so it opens in same tab instead of new tab
    cy.get('#opentab').invoke('removeAttr','target').click()
    
    //url assertion
    cy.url().should('include','rahulshettyacademy')
    cy.go('back')




   


  })

})