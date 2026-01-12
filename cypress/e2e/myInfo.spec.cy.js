import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";
import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";

const Chance = require("chance");

const chance = new Chance();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();
const loginPage = new LoginPage();

describe("My Info Page Orange HRM Tests", () => {
  it("Fill My Info fields", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSucess.username,
      userData.userSucess.password
    );
    menuPage.accessMyInfo();
    myInfoPage.fillPersonalDetails(
      chance.first(),
      chance.name({ middle: true }),
      chance.last(),
      chance.syllable()
    );
    myInfoPage.fillEmployeeDetails(
      chance.string({ length: 10 }),
      chance.word(),
      chance.natural(),
      "2030-10-02"
    );
    myInfoPage.fillNationalityAndOthers("2002-04-08");
    myInfoPage.fillCustomFields(chance.string());
    myInfoPage.saveForm();
  });
});
