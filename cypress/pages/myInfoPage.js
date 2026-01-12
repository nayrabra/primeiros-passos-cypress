class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dataField: "[placeholder='yyyy-mm-dd']",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",
      activeSelectOption: ".oxd-select-text-input",
      nationalitySelect: ".oxd-select-dropdown > :nth-child(27)",
      statusSelect: ".oxd-select-dropdown > :nth-child(3)",
      bloodSelect: ".oxd-select-dropdown > :nth-child(5)",
    };
    return selectors;
  }

  fillPersonalDetails(firstName, middleName, lastName, nickName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName);
    cy.get(this.selectorsList().middleNameField).clear().type(middleName);
    cy.get(this.selectorsList().lastNameField).clear().type(lastName);
  }
  fillEmployeeDetails(employeeId, otherId, driversLicenceNumber, expiryDate) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenceNumber);
    cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate);
    cy.get(this.selectorsList().dateCloseButton).click();
  }
  fillNationalityAndOthers(dateOfBirth) {
    cy.get(this.selectorsList().activeSelectOption).eq(0).click();
    cy.get(this.selectorsList().nationalitySelect).click();
    cy.get(this.selectorsList().activeSelectOption).eq(1).click();
    cy.get(this.selectorsList().statusSelect).click();
    cy.get(this.selectorsList().genericField).eq(8).clear().type(dateOfBirth);
    cy.get(this.selectorsList().dateCloseButton).click();
  }
  fillCustomFields(testField) {
    cy.get(this.selectorsList().activeSelectOption).eq(2).click();
    cy.get(this.selectorsList().bloodSelect).click();
    cy.get(this.selectorsList().genericField).eq(9).clear().type(testField);
  }
  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click({ force: true });
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(".oxd-toast-close");
  }
}

export default MyInfoPage;
