# Healium Smart Contract Commands

Working Contract on Polygon Scan: https://mumbai.polygonscan.com/address/0xafb9DDf5A0Cb46C483F760aA57500239bC45fD74#code  

This project demonstrates a basic Hardhat use case. It comes with Billing contract, a test for that contract, and a script that deploys that contract.  
<br />
# Overall Cracked Hardhat Documentation Turtorial on Deploying + Creating
Docs: https://hardhat.org/tutorial/deploying-to-a-live-network  
Deploy to Mumbai: https://wiki.polygon.technology/docs/develop/hardhat/  
Setting up dotenv: https://www.npmjs.com/package/dotenv  
Mumbai Faucet: https://faucet.polygon.technology/  
Polygon Mumbai Scan: https://mumbai.polygonscan.com  


<br /><br />
# Overall Workflow
1. Create Project + Files
2. Work on Smart Contract ETC
3. Create Tests in js file using Mocha / ethers ABI etc
4. Create Deploy.js + edit hardhat.config to change the network you are deploying to
5. Deploy it in command line
6. Verify the smart contract so that the code can be displayed on net not just bytecode
7. Test on the scanner because they let you do function calls and ETC
<br />  

```shell
npx init
npx hardhat
npx hardhat compile
npx hardhat test
npx hardhat 
npx hardhat run scripts/deploy.js --network <network-name>
npx hardhat verify --network <network-name> <smart-contract-address>

REPORT_GAS=true npx hardhat test
npx hardhat node
```