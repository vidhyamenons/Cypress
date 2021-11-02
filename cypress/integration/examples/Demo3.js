/// <reference types="Cypress" />


describe("First Test Suite", function()
{

it("Third Test Case", function()

{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //CHECK BOXES
    //cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    //cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
    //Multiple checkboxes
    //cy.get("[type='checkbox']").check()
    //Select one
    cy.get("[type='checkbox']").check(['option1','option2'])

    //STATIC DROPDOWN
    cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

    //DYNAMIC DROPDOWN
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($e1, index, $list) => {
      
      if($e1.text()=='India')
      {
          $e1.click()
      }
          
      })

      cy.get('#autocomplete').should('have.value', 'India')
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()




   


  })

})