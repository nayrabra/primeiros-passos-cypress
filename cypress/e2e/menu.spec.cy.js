import userData from "../fixtures/userData.json";
import MenuPage from "../pages/menuPage";
import MaintenancePage from "../pages/maintenancePage";
import LoginPage from "../pages/loginPage";

const menuPage = new MenuPage();
const maintenancePage = new MaintenancePage();
const loginPage = new LoginPage();

describe("Access Menu Orange HRM Tests", () => {
  it("Click on menu buttons", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSucess.username,
      userData.userSucess.password
    );
    menuPage.accessSearch();
    menuPage.accessAdmin();
    menuPage.accessPim();
    menuPage.accessLeave();
    menuPage.accessTime();
    menuPage.accessRecruitment();
    menuPage.accessMyInfo();
    menuPage.accessPerformance();
    menuPage.accessDashboard();
    menuPage.accessDirectory();
    maintenancePage.accessMaintenancePage(userData.userSucess.password);
    menuPage.accessClaim();
    menuPage.accessBuzz();
  });
});
