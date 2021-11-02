/// <reference types="Cypress" />


describe("First Test Suite", function()
{

it("Second Test Case", function()

{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').as('productlocator')
    cy.get('.products').find('.product').each(($e1, index, $list) => {
    const vegtext=$e1.find('h4.product-name').text()
    if(vegtext.includes('Cashews'))
    {
        $e1.find('button').click()
    }
        
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    //cy.contains('Place Order').click()
    cy.get(':nth-child(14)').click()


  })

})