describe('Comment Like Test', () => {
  it('allows multiple likes from same user – bug', () => {
    cy.visit('http://localhost:5173');

    cy.get('.video-card', { timeout: 8000 }).should('exist').first().click();

    cy.get('textarea[aria-label="Comment text"]', { timeout: 8000 })
      .should('exist')
      .type('Test comment');

    cy.get('button[aria-label="Post comment"]').click();

    cy.get('button[aria-label="Like comment"]').click().click().click();

    cy.get('button[aria-label="Like comment"]')
      .invoke('text')
      .then((text) => {
        const count = parseInt(text.replace(/\D/g, ''), 10);
        cy.log(`Like count: ${count} — should not exceed 1.`);
        expect(count).to.be.greaterThan(1); // proves the bug
      });
  });
});
