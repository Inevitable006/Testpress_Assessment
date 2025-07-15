describe('Video Playback Test', () => {
  it('should show an error message if video fails to load or play', () => {
    cy.visit('http://localhost:5173');

    // Click the first video
    cy.get('.video-card', { timeout: 8000 }).first().click();

    // Wait for player logic to trigger (simulating load)
    cy.wait(1500);

    // Match either possible error message
    cy.contains(/(Failed to play video|Error loading video)/i).should('exist');
  });
});
