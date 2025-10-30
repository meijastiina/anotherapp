describe('another app', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('can visit root', () => {
    cy.visit('/')
  })

  // it('has correct title', () => {
  //   cy.title().should('equal', 'anotherapp')
  // })
  // it('can add new todo items', () => {
  //  const newItem = 'Test task'

  //   cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

  //   cy.get('.todo-list li')
  //     .should('have.length', 1)
  //     .last()
  //     .find('span').should('have.text', newItem)
  // })
  // it('can remove an item', () => {
  //   cy.get('#delete-button').click()
  //   cy.get('.todo-list li')
  //     .should('have.length', 0)
  // })
})
