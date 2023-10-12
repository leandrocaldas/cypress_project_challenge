describe('API Test', () => {
  it('should call the API, find objects with Category: Authentication & Authorization, and print them', () => {
    // Step 1: Call the API
    cy.log('Calling the API...');
    const apiEndpoint = 'https://api.publicapis.org/entries';

    cy.request(apiEndpoint).then((response) => {
      // Step 2: Read the response and find objects with "Category: Authentication & Authorization"
      const responseData = response.body.entries;
      const filteredObjects = responseData.filter((entry) => {
        return entry.Category === 'Authentication & Authorization';
      });

      // Step 3: Compare and verify the number of objects
      // Assert the count using Cypress
      cy.wrap(filteredObjects.length).should('be.eq', 7);
      
      // Step 4: Print found objects to the console
      cy.log('Objects with Category "Authentication & Authorization":');
      filteredObjects.forEach((entry, index) => {
        cy.log(`Object ${index + 1}: ${JSON.stringify(entry)}`);
      });
    });
  });
});
