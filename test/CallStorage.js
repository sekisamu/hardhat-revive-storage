const { expect } = require("chai");

describe("Storage", function () {
  let storage;
  let callStorage;
  const initialValue = 42;

  beforeEach(async function () {
    const CallStorage = await ethers.getContractFactory("CallStorage");
    callStorage = await CallStorage.deploy();
    await callStorage.waitForDeployment();
  });

  it("Should fail to deploy storage", async function () {
    await expect(callStorage.newStorage(1, 2)).to.be.revertedWithPanic;
  });

  it("Should deploy storage successfully", async function () {
    const Storage = await ethers.getContractFactory("Storage");
    storage = await Storage.deploy(1);
    await storage.waitForDeployment();
    await callStorage.newStorage(1, 2);
    console.log(await callStorage.storageAddress());
  });
});