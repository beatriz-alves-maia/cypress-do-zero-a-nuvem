Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    text: 'John text'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"]').click()
})