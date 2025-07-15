describe('Bookmark Reset Bug – Thumbnail Player View', () => {
  it('should lose bookmark after refresh even from player controls', () => {
    cy.visit('http://localhost:5173');

    // Step 1: Click on a video card
    cy.get('.video-card', { timeout: 8000 }).first().click();

    // Step 2: Wait for player controls to render and click bookmark
    cy.wait(1000); // Allow video player controls to render
    cy.get('button[aria-label="Add bookmark"]').should('exist').click();

    // Step 3: Reload the page
    cy.reload();

    // Step 4: Video selection should be reset (player disappears)
    cy.get('.video-player').should('not.exist');

    // Step 5: Click the same video again
    cy.get('.video-card', { timeout: 8000 }).first().click();
    cy.wait(1000);

    // Step 6: Check that bookmark button is visible (not necessarily active)
    cy.get('button[aria-label="Add bookmark"]').should('exist');
  });
});
