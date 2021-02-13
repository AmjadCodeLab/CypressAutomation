/// <reference types="Cypress" />
describe("Testing Test App",()=>{
    it("Login Test",()=>{
        cy.visit("http://eaapp.somee.com/");
        cy.contains("Login").click();
        cy.url().should("include","/Account/Login");
        cy.get('#UserName').type('admin');
        cy.get('#Password').type('password');
        cy.get('.btn').click({force: true});
    })
    it("Employee List Selecetion",()=>{
        cy.contains("Employee List").click();
        // Table -> Rows -> Data
        cy.get('.table').find('tr')
        .contains("AutoUser").parent().contains("Benefits").click();
    })
})