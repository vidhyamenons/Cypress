/// <reference types="Cypress" />
import HomePage from '../examples/pageObj/HomePage'
import ProductPage from '../examples/pageObj/PdtPage'
import CheckoutPage from '../examples/pageObj/ChkOutPage'
describe("Framework Suite", function()
{
  before(function()
 {
 cy.fixture('testdata').then(function(data)
 {
 this.data=data
 })
  
 } )

it("first", function()

{
    const homePage = new HomePage()
    const pdtPage = new ProductPage()
    const chkoutPage = new CheckoutPage()
    cy.visit(Cypress.env('url')+"/angularpractice/")
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    //Expicitwait
    //Cypress.config('defaultCommandTimeout', 8000)
    homePage.getShopTab().click()
    //cy.selectProduct('Blackberry')
    //cy.selectProduct('Nokia Edge')
    this.data.productName.forEach(function(element) {
     cy.selectProduct(element)   

    })
    pdtPage.getCart().click()
    var sum=0
    pdtPage.getPrice().each(($e1, index, $list) => {
    const amount = $e1.text()
    var res=amount.split(" ")
    res=res[1].trim()
    sum=Number(sum)+Number(res)
    }).then(function () {
        cy.log(sum)
    })
    pdtPage.getTotal().then(function(element)
    {
     const actualTotal = element.text()
     var res=actualTotal.split(" ")
     res=res[1].trim()
     expect(Number(res)).to.equal(sum)
     })
    pdtPage.getCheckout().click()
    chkoutPage.getCountryName().type('India')
    chkoutPage.getCountry().click()
    chkoutPage.getCheckbox().click()
    chkoutPage.getPurchase().click()
   // chkoutPage.getText().should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
   chkoutPage.getText().then(function(element)
   {
    const actualText = element.text()
    expect(actualText.includes('Success')).to.be.true
    })

    


  })

})