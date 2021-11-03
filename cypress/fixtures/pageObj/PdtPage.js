class ProductPage
{
getCart()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}
getPrice()
{
    return cy.get('tr td:nth-child(4) strong')
}
getCheckout()
{
    return cy.get(':nth-child(4) > :nth-child(5) > .btn')
}
getTotal()
{
    return cy.get('h3 > strong')
}

}
export default ProductPage