/// <reference types="Cypress" />


describe("First Test Suite", function()
{

it("First Test Case", function()

{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //cy.get('.product:visible').should('have.length',4)
    //as() is used to declare multiple locators once
    //cy.get('.products').as('productlocator')
    //cy.get('@productlocator')
    cy.get('.products').find('.product').should('have.length',4)
    //Add item by index
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    //Add item by searching
    cy.get('.products').find('.product').each(($e1, index, $list) => {
    const vegtext=$e1.find('h4.product-name').text()
    if(vegtext.includes('Cashews'))
    {
        $e1.find('button').click()
    }
        
    })
    cy.get('.brand').should('have.text','GREENKART')
    //const logo = cy.get('.brand')
   // cy.log(logo.text())
   //Using then() to print in log
   cy.get('.brand').then(function(logoelement)
   {
    cy.log(logoelement.text())
   })
})

})