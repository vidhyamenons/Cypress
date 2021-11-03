class CheckoutPage
{
getPurchase()
{
    return cy.get('form.ng-untouched > .btn')
}
getCheckbox()
{
    return cy.get('form.ng-untouched > .btn')
}
getCountryName()
{
    return cy.get('#country')
}
getCountry()
{
    return cy.get('.suggestions > ul > li > a')
}
getText()
{
    return cy.get('.alert')
}


}
export default CheckoutPage