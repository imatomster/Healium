const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Billing Contract", function () {
  async function deployBillingFixture() {
    const Billing = await ethers.getContractFactory("Billing");
    const [physician, patient] = await ethers.getSigners();
    const hardhatBilling = await Billing.deploy();

    await hardhatBilling.deployed();

    // Fixtures can return anything you consider useful for your tests
    return { Billing, hardhatBilling, physician, patient };
  }

  describe("Deploying contract", function () {
    it("Should set the right owner", async function () {
      const { hardhatBilling, physician } = await loadFixture(
        deployBillingFixture
      );
      expect(await hardhatBilling.owner()).to.equal(physician.address);
    });
  });

  describe("Creating Bills", function () {
    it("Should create a bill with Patient Address and emit", async function () {
      const { hardhatBilling, physician, patient } = await loadFixture(
        deployBillingFixture
      );

      await expect(hardhatBilling.createBill(patient.address, 69930, 125400))
        .to.emit(hardhatBilling, "BillCreated")
        .withArgs(physician.address, patient.address, 69930, 125400);
    });

    it("Should get Bill Count of 1", async function () {
      const { hardhatBilling, patient } = await loadFixture(
        deployBillingFixture
      );

      await hardhatBilling.createBill(patient.address, 69930, 125400);
      const billCount = await hardhatBilling.getBillCount(patient.address);
      expect(billCount).to.equal(1);
    });

    it("Should get the Bill content of first bill", async function () {
      const { hardhatBilling, physician, patient } = await loadFixture(
        deployBillingFixture
      );

      await hardhatBilling.createBill(patient.address, 69930, 125400);
      const billContent = await hardhatBilling.getBillAtIndex(
        patient.address,
        0
      );

      expect(billContent[0]).to.equal(physician.address);
      expect(billContent[1]).to.equal(patient.address);
      expect(billContent[2]).to.equal(69930);
      expect(billContent[3]).to.equal(125400);
      expect(billContent[4]).to.equal(false);
    });

    it("Should get Bill Count of 2", async function () {
      const { hardhatBilling, patient } = await loadFixture(
        deployBillingFixture
      );

      await hardhatBilling.createBill(patient.address, 69930, 125400);
      await hardhatBilling.createBill(patient.address, 92557, 3900);
      const billCount = await hardhatBilling.getBillCount(patient.address);
      expect(billCount).to.equal(2);
    });
  });

  describe("Paying Bills", function () {
    it("Should pay one bill and emit", async function () {
      const { hardhatBilling, physician, patient } = await loadFixture(
        deployBillingFixture
      );

      // represents 0.01 ether but in a datatype called BigInt (which is builtinto JS)
      // 10n ** 18n is standard but its 16n because 0.01 must represented by e-2
      let cost = 1n * 10n ** 16n;

      await hardhatBilling
        .connect(physician)
        .createBill(patient.address, 00000, cost);

      expect(
        await hardhatBilling
          .connect(patient)
          .payBill(
            patient.address,
            0,
            { value: web3.utils.toWei("0.01", "ether") }
          )
      )
        .to.emit(hardhatBilling, "BillPaid")
        .withArgs(patient.address, 00000, cost, true);
    });
  });
});
