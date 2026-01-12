class MaintenancePage {
  selectorsList() {
    const selectors = {
      maintenanceButton:
        "[href='/web/index.php/maintenance/viewMaintenanceModule']",
      passwordField: "[name='password']",
      confirmButton: "[type='submit']",
    };
    return selectors;
  }
  accessMaintenancePage(password) {
    cy.get(this.selectorsList().maintenanceButton).click();
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().confirmButton).click();
  }
}

export default MaintenancePage;
