/// <reference types="Cypress" />


describe("First Test Suite", function()
{

it("Fourth Test Case", function()

{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('tr trd:nth-child(2)').each(($e1, index, $list) => {

   const text=$e1.text()
   if(text.includes('Python')) 
   {
     cy.get('tr trd:nth-child(2)').eq(index).next().then(function(price)
     {
      const pricetext=price.text()
      expect(pricetext).to.equal('25')
     })
   }  

    })



   


  })

})