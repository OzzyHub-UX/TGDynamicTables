
const {  Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGDynamicTables = require('../../pages/TGDynamicTables')


const dynamicTables = new TGDynamicTables()



Then(/^the user enters the following inputs$/, (dataTable) => {

    const arr = dataTable.rawTable.flat()
	dynamicTables.getPopupInputs().each((el,index) => {
		cy.wrap(el).type(arr[index])
	})


})


Then(/^the user clicks on the “SUBMIT” button$/, () => {
	dynamicTables.clickSubmit()
})


Then(/^the user should see the table with the new row below$/, (dataTable) => {
	
    const row  = dataTable.rawTable.flat()

    dynamicTables.getLastRow().each((el, index) =>  {
        cy.wrap(el).should('have.text',row[index])
    })



})

