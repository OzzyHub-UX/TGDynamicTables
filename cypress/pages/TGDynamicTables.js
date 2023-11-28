class TGDynamicTables {

  getPageHeading(){
      return cy.get( 'div.mb-2 > h1')
  }

   getTableHeaders(){
      return cy.get('#product_table > thead > tr >th')
   }

   getTablebody(){
      return cy.get('#product_table > tbody ')
   }
   getTableRows(){
    return cy.get('#product_table tbody > tr > td')
   }

   addNewProductPopUp() {
      return cy.get('.modal')
   }
   getAddProductBtn(){
       return  cy.get('#add_product_btn')
     }

   clickAddProductBtnByText() {
       this.getAddProductBtn().click()
   }
     getClosePopUpButton(){
       return cy.get('.delete')
   }
   clickClosePopUpBtn() {
       this.getClosePopUpButton().click()
   }
   getTotal(){
    return cy.get('#total_amount')
 }

  getAddNewPrdPoP(){
    return cy.get('.modal-card-title')
  }
  getPopUpLabels(){
    return cy.get('.field > label ')
  }
  getPopupInputs(){
    return cy.get('.input')
  }
  getSubmit(){
    return cy.get('#submit')
  }
  clickSubmit(){
    this.getSubmit().click()
  }
  getButtonByLabel(label){
    switch(label) {
        case 'Submit': 
            return this.getSubmit()
        case 'X': 
            return this.getClosePopUpButton()
    }
}

getLastRow(){
  return cy.get('tr:nth-child(4) > td')
}

}

module.exports = TGDynamicTables