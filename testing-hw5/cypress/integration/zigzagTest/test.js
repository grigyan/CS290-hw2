
describe('zigzag test', () => {
    it('shouldNotFindSearch', () => {
        cy.visit('https://zigzag.am/am');
        cy.get('#search').type("shaurma");
        cy.get('#search_mini_form > button').click();
        cy.get('body.page-products.page-with-filter.catalogsearch-result-index.page-layout-1column:nth-child(2) div.page-wrapper:nth-child(7) div.main.content div.page_inner:nth-child(5) div.custom_container div.filter_listing.row div.listing_section.col-12.col-lg-12 > div.message.notice')
        .should('be.visible');
    })
})