/// <reference types="cypress"/>

import Footer from "../../../pageObjects/Footer";
import AboutUs from "../../../pageObjects/AboutUsPage";
import ApiPage from "../../../pageObjects/ApiPage";

const footer = new Footer();
const aboutUs = new AboutUs();
const apiPage = new ApiPage();

describe('About Us', () => {

    beforeEach(function () {
        cy.fixture('url').then(url  => {
            this.url = url;
        });
        cy.visit('/');
    })

    it('About us > Verify "Products Documentation" button redirects to API page', function() {
        footer.clickAboutUsLink();
        aboutUs.clickProductsDocumentationButton();

        cy.url().should('include', this.url.API);
        apiPage.elements.getWeatherApiTitle().should('be.visible');
    });
    
    it('About us > Verify the button "Buy in the Marketplace" redirects to the Marketplace page', function() {
        footer.clickAboutUsLink();
        aboutUs.clickBuyMarketplaceButton();

        cy.url().should('include', this.url.MarketPage);
        marketplacePage.elements.getMarketplacePageTitle().should('be.visible')
    });

});