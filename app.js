// Import the Web3.js library
// const Web3 = import('Web3');

import {Web3} from "Web3";

// Set up a provider for the Web3.js library to connect to the blockchain network
const provider = new Web3.providers.HttpProvider('http://localhost:8545');

// Create an instance of the Web3.js library
const web3 = new Web3(provider);

// Define the address of your smart contract
const contractAddress = '0xafb9DDf5A0Cb46C483F760aA57500239bC45fD74';

// Define the ABI of your smart contract
const contractABI = require('./contracts/contracts/BillingABI.json')

// Create an instance of your smart contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Use the contract instance to call a function on the smart contract
contract.methods.myFunction().call((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});

// Get a reference to the form and add an event listener for the submit event
const form = document.getElementById('procedure-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submission behavior

  // Get the values of the input fields
  const cpt = document.getElementById('cpt-code-input').value;
  const price = document.getElementById('cpt-code-input').value;

  // Call the smart contract function with the input field values as arguments
  contract.methods.createBill(cpt, price)
    .send({ from: web3.eth.defaultAccount })
    .then(function(receipt) {
      console.log(receipt); // log the transaction receipt to the console
    })
    .catch(function(error) {
      console.error(error); // log any errors to the console
    });
});
