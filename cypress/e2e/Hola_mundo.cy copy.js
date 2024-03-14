
describe("Bienvenido al curso de Cypress seccion 1", () => {

  it("Mi primer test -> Hola Mundo", () => {

    cy.log("Hola Mundo");

  });

  it("Segundo test -> campo name", () => {

    cy.visit("https://demoqa.com/text-box");

    cy.get("#userName").type("Rodrigo");
    cy.wait(4000)
  });


}); // Cierre de describedescribe("Bienvenido al curso de Cypress seccion 1"