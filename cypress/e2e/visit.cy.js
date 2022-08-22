describe('navegando a un sitio', () => {

    it('visita sitio admin', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.visit('https://admin.woki.ar');
      })
});