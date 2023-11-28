const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGDynamicTables = require('../../pages/TGDynamicTables')

const dynamicTables = new TGDynamicTables()

Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	dynamicTables.getPageHeading().should('have.text', heading)
})

Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const headers = dataTable.rawTable[0]

	dynamicTables.getTableHeaders().each((el,index) => {
		cy.wrap(el).should('contain', headers[index])
	})
})

Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const rows = dataTable.rawTable.flat()

	dynamicTables.getTableRows().each((el,index) => {
		cy.wrap(el).should('contain', rows[index])
	})
})


Then(/^the user should see the “ADD PRODUCT” button is enabled$/, () => {
	dynamicTables.getAddProductBtn().should('be.enabled')
})



Then(/^the user should see the "([^"]*)" text displayed$/, (total) => {
	dynamicTables.getTotal().should('contain', total)
})



When(/^the user clicks on the “ADD PRODUCT” button$/, () => {
	dynamicTables.clickAddProductBtnByText()
})


Then(/^the user should see the “Add New Product” modal with its heading$/, () => {
	dynamicTables.addNewProductPopUp().should('be.visible')
})


Then(/^the user should see the label$/, (dataTable) => {
	const label = dataTable.rawTable.flat()

	dynamicTables.getPopUpLabels().each((el,index) => {
		cy.wrap(el).should('have.text', label[index])
	})
})


Then(/^the user should see the input box is enabled$/, (dataTable) => {
	const inputs = dataTable.rawTable.flat()

	dynamicTables.getPopupInputs().each((el,index) => {
		cy.wrap(el).should('be.enabled', inputs[index])
	})
})


Then(/^the user should see the button is enabled$/, () => {
	dynamicTables.getClosePopUpButton().should('be.enabled') && dynamicTables.getSubmit().should('be.enabled')
})


When(/^the user clicks on the “X” button$/, () => {
	dynamicTables.clickClosePopUpBtn()
})

Then(/^the user should not see the “Add New Product” modal$/, () => {
	dynamicTables.addNewProductPopUp().should('not.exist')
})