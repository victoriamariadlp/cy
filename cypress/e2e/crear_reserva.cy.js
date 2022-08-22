describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
      cy.visit('https://admin.woki.ar')
    })
  })

  it('request', ()=> {
    cy
      .request({
        method: 'PUT',
        url: 'https://test.woki.ar/api/v1/booking/user',
        body: {
         quantity: 4,
         sector: 'Sector 2',
         showDay: '2022-08-23T11:00:00Z',
         partnerId: '652536a3-a600-450f-b93c-9edb1e3ee2f0',
         preferences: {
             Bebés: true,
             Discapacitados: false
           },
         id: 'cualquier cosa',
         comment: 'comida rica',
         userId: 'h868KSQVUdzbuy9bVRgc',
         providence: 1
        }});
  })      