const { expect } = require("chai");

describe("Storage Creation", function () {
  let callStorage;

  beforeEach(async function () {
    const CallStorage = await ethers.getContractFactory("CallStorage");
    callStorage = await CallStorage.deploy();
    await callStorage.waitForDeployment();
  });

  it("Should fail to deploy storage", async function () {
    await expect(callStorage.newStorage(1, 2)).to.be.rejectedWith("CodeNotFound");
  });

  it("Should deploy storage successfully", async function () {
    const Storage = await ethers.getContractFactory("Storage");
    storage = await Storage.deploy(3);
    await storage.waitForDeployment();

    await callStorage.newStorage(1, 2);
    expect(await callStorage.storageAddress()).to.not.equal(0);
  });
});


describe("Storage Code", function () {
  let callStorage;

  beforeEach(async function () {
    const CallStorage = await ethers.getContractFactory("CallStorage");
    callStorage = await CallStorage.deploy();
    await callStorage.waitForDeployment();
  });

  it("Should get a hash", async function () {
    const storageCode = await callStorage.getStorageCode();
    expect(storageCode.length).to.be.equal(66);
  });
});

