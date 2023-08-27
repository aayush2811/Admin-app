const InstituteVerifierAuth = artifacts.require("InstituteVerifierAuth");

module.exports = function (deployer) {
 deployer.deploy(InstituteVerifierAuth);
};