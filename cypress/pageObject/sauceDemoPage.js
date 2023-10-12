class SauceDemoPage {
  constructor() {
    this.sortOptionSelect = '[data-test="product_sort_container"]';
    this.productNames = '.inventory_item_name';
  }

  isCurrentSortOption(option) {
    cy.get('.active_option').should('have.text', option);
  }

  verifyProductsSortedInAtoZOrder() {
    this._getProductNames().then((productNames) => {
      const sortedProductNames = [...productNames].sort();
      expect(productNames).to.deep.equal(sortedProductNames);
    });
  }

  verifyProductsSortedInZtoAOrder() {
    this._getProductNames().then((productNames) => {
      const sortedProductNames = [...productNames].sort((a, b) => {
        return b.localeCompare(a);
      });
      expect(productNames).to.deep.equal(sortedProductNames);
    });
  }

  selectSortOption(option) {
    cy.get(this.sortOptionSelect).select(option);
  }

  _getProductNames() {
    return cy.get(this.productNames).then(($elements) => {
      return $elements.map((index, element) => Cypress.$(element).text()).get();
    });
  }
}

export default new SauceDemoPage();
