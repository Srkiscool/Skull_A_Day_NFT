/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SkullDay, SkullDayInterface } from "../SkullDay";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_WALLET_LIMIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isMintEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintedWallets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxSupply_",
        type: "uint256",
      },
    ],
    name: "setMaxSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleIsMintEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x67016345785d8a000060099081556003600d55601080546001600160a01b03191673a7b3e098c65c5e79d8fa82d5040d49532c428833179055600b60808181526a536b756c6c20612044617960a81b60a090815261010060405260c093845268534b554c4c4144415960b81b60e0529092916200007f9160009162000119565b5080516200009590600190602084019062000119565b505050620000b2620000ac620000c360201b60201c565b620000c7565b600160085561016e600b55620001fc565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200012790620001bf565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b600181811c90821680620001d457607f821691505b60208210811415620001f657634e487b7160e01b600052602260045260246000fd5b50919050565b611d99806200020c6000396000f3fe6080604052600436106101bb5760003560e01c806370a08231116100ec578063b88d4fde1161008a578063c87b56dd11610064578063c87b56dd146104c3578063d5abeb01146104e3578063e985e9c5146104f9578063f2fde38b1461054257600080fd5b8063b88d4fde14610478578063c407321714610498578063c6cfdc5b146104ad57600080fd5b806395d89b41116100c657806395d89b4114610403578063a0712d6814610418578063a22cb4651461042b578063ada7c4ed1461044b57600080fd5b806370a08231146103b0578063715018a6146103d05780638da5cb5b146103e557600080fd5b806324600fc31161015957806342842e0e1161013357806342842e0e1461033a5780636352211e1461035a5780636817c76c1461037a5780636f8b44b01461039057600080fd5b806324600fc3146102cc5780632a55205a146102e1578063346de50a1461032057600080fd5b8063095ea7b311610195578063095ea7b31461025657806312065fe01461027857806318160ddd1461029657806323b872dd146102ac57600080fd5b806301ffc9a7146101c757806306fdde03146101fc578063081812fc1461021e57600080fd5b366101c257005b600080fd5b3480156101d357600080fd5b506101e76101e2366004611943565b610562565b60405190151581526020015b60405180910390f35b34801561020857600080fd5b506102116105b4565b6040516101f39190611b1e565b34801561022a57600080fd5b5061023e61023936600461197b565b610646565b6040516001600160a01b0390911681526020016101f3565b34801561026257600080fd5b5061027661027136600461191a565b61066d565b005b34801561028457600080fd5b5030315b6040519081526020016101f3565b3480156102a257600080fd5b50610288600a5481565b3480156102b857600080fd5b506102766102c73660046117d0565b610788565b3480156102d857600080fd5b506102766107b9565b3480156102ed57600080fd5b506103016102fc366004611993565b6107ff565b604080516001600160a01b0390931683526020830191909152016101f3565b34801561032c57600080fd5b50600c546101e79060ff1681565b34801561034657600080fd5b506102766103553660046117d0565b61082f565b34801561036657600080fd5b5061023e61037536600461197b565b61084a565b34801561038657600080fd5b5061028860095481565b34801561039c57600080fd5b506102766103ab36600461197b565b6108aa565b3480156103bc57600080fd5b506102886103cb366004611784565b6108b7565b3480156103dc57600080fd5b5061027661093d565b3480156103f157600080fd5b506007546001600160a01b031661023e565b34801561040f57600080fd5b50610211610951565b61027661042636600461197b565b610960565b34801561043757600080fd5b506102766104463660046118e0565b610b87565b34801561045757600080fd5b50610288610466366004611784565b60116020526000908152604090205481565b34801561048457600080fd5b5061027661049336600461180b565b610b92565b3480156104a457600080fd5b50610276610bca565b3480156104b957600080fd5b50610288600d5481565b3480156104cf57600080fd5b506102116104de36600461197b565b610be6565b3480156104ef57600080fd5b50610288600b5481565b34801561050557600080fd5b506101e761051436600461179e565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b34801561054e57600080fd5b5061027661055d366004611784565b610cea565b60006001600160e01b031982166380ac58cd60e01b148061059357506001600160e01b03198216635b5e139f60e01b145b806105ae57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546105c390611c5f565b80601f01602080910402602001604051908101604052809291908181526020018280546105ef90611c5f565b801561063c5780601f106106115761010080835404028352916020019161063c565b820191906000526020600020905b81548152906001019060200180831161061f57829003601f168201915b5050505050905090565b600061065182610d63565b506000908152600460205260409020546001600160a01b031690565b60006106788261084a565b9050806001600160a01b0316836001600160a01b031614156106eb5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061070757506107078133610514565b6107795760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016106e2565b6107838383610dc2565b505050565b6107923382610e30565b6107ae5760405162461bcd60e51b81526004016106e290611b83565b610783838383610eae565b6107c161104a565b60105460405147916001600160a01b03169082156108fc029083906000818181858888f193505050501580156107fb573d6000803e3d6000fd5b5050565b600080606461080f84600a611bfd565b6108199190611be9565b6010546001600160a01b03169590945092505050565b61078383838360405180602001604052806000815250610b92565b6000818152600260205260408120546001600160a01b0316806105ae5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016106e2565b6108b261104a565b600b55565b60006001600160a01b0382166109215760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016106e2565b506001600160a01b031660009081526003602052604090205490565b61094561104a565b61094f60006110a4565b565b6060600180546105c390611c5f565b600260085414156109b35760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016106e2565b6002600855600c5460ff16610a005760405162461bcd60e51b81526020600482015260136024820152721b5a5b9d1a5b99c81b9bdd08195b98589b1959606a1b60448201526064016106e2565b600d543360009081526011602052604090205410610a595760405162461bcd60e51b8152602060048201526016602482015275195e18d959591cc81b585e081c195c881dd85b1b195d60521b60448201526064016106e2565b80600954610a679190611bfd565b3414610aa35760405162461bcd60e51b815260206004820152600b60248201526a77726f6e672076616c756560a81b60448201526064016106e2565b600a54600b5411610ae15760405162461bcd60e51b81526020600482015260086024820152671cdbdb19081bdd5d60c21b60448201526064016106e2565b60606000805b83811015610b7c57336000908152601160205260408120805491610b0a83611c9a565b9091555050600a8054906000610b1f83611c9a565b9190505550600a549150600e610b34836110f6565b604051602001610b45929190611a2b565b6040516020818303038152906040529250610b603383611210565b610b6a828461122a565b80610b7481611c9a565b915050610ae7565b505060016008555050565b6107fb3383836112c4565b610b9c3383610e30565b610bb85760405162461bcd60e51b81526004016106e290611b83565b610bc484848484611393565b50505050565b610bd261104a565b600c805460ff19811660ff90911615179055565b6060610bf182610d63565b60008281526006602052604081208054610c0a90611c5f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3690611c5f565b8015610c835780601f10610c5857610100808354040283529160200191610c83565b820191906000526020600020905b815481529060010190602001808311610c6657829003601f168201915b505050505090506000610c946113c6565b9050805160001415610ca7575092915050565b815115610cd9578082604051602001610cc19291906119fc565b60405160208183030381529060405292505050919050565b610ce2846113e6565b949350505050565b610cf261104a565b6001600160a01b038116610d575760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106e2565b610d60816110a4565b50565b6000818152600260205260409020546001600160a01b0316610d605760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016106e2565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610df78261084a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610e3c8361084a565b9050806001600160a01b0316846001600160a01b03161480610e8357506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610ce25750836001600160a01b0316610e9c84610646565b6001600160a01b031614949350505050565b826001600160a01b0316610ec18261084a565b6001600160a01b031614610f255760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016106e2565b6001600160a01b038216610f875760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016106e2565b610f92600082610dc2565b6001600160a01b0383166000908152600360205260408120805460019290610fbb908490611c1c565b90915550506001600160a01b0382166000908152600360205260408120805460019290610fe9908490611bd1565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6007546001600160a01b0316331461094f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106e2565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60608161111a5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611144578061112e81611c9a565b915061113d9050600a83611be9565b915061111e565b60008167ffffffffffffffff81111561116d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611197576020820181803683370190505b5090505b8415610ce2576111ac600183611c1c565b91506111b9600a86611cb5565b6111c4906030611bd1565b60f81b8183815181106111e757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611209600a86611be9565b945061119b565b6107fb82826040518060200160405280600081525061144d565b6000828152600260205260409020546001600160a01b03166112a55760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016106e2565b60008281526006602090815260409091208251610783928401906116cf565b816001600160a01b0316836001600160a01b031614156113265760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016106e2565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61139e848484610eae565b6113aa84848484611480565b610bc45760405162461bcd60e51b81526004016106e290611b31565b6060604051806080016040528060428152602001611d2260429139905090565b60606113f182610d63565b60006113fb6113c6565b9050600081511161141b5760405180602001604052806000815250611446565b80611425846110f6565b6040516020016114369291906119fc565b6040516020818303038152906040525b9392505050565b611457838361158d565b6114646000848484611480565b6107835760405162461bcd60e51b81526004016106e290611b31565b60006001600160a01b0384163b1561158257604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906114c4903390899088908890600401611ae1565b602060405180830381600087803b1580156114de57600080fd5b505af192505050801561150e575060408051601f3d908101601f1916820190925261150b9181019061195f565b60015b611568573d80801561153c576040519150601f19603f3d011682016040523d82523d6000602084013e611541565b606091505b5080516115605760405162461bcd60e51b81526004016106e290611b31565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610ce2565b506001949350505050565b6001600160a01b0382166115e35760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016106e2565b6000818152600260205260409020546001600160a01b0316156116485760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106e2565b6001600160a01b0382166000908152600360205260408120805460019290611671908490611bd1565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8280546116db90611c5f565b90600052602060002090601f0160209004810192826116fd5760008555611743565b82601f1061171657805160ff1916838001178555611743565b82800160010185558215611743579182015b82811115611743578251825591602001919060010190611728565b5061174f929150611753565b5090565b5b8082111561174f5760008155600101611754565b80356001600160a01b038116811461177f57600080fd5b919050565b600060208284031215611795578081fd5b61144682611768565b600080604083850312156117b0578081fd5b6117b983611768565b91506117c760208401611768565b90509250929050565b6000806000606084860312156117e4578081fd5b6117ed84611768565b92506117fb60208501611768565b9150604084013590509250925092565b60008060008060808587031215611820578081fd5b61182985611768565b935061183760208601611768565b925060408501359150606085013567ffffffffffffffff8082111561185a578283fd5b818701915087601f83011261186d578283fd5b81358181111561187f5761187f611cf5565b604051601f8201601f19908116603f011681019083821181831017156118a7576118a7611cf5565b816040528281528a60208487010111156118bf578586fd5b82602086016020830137918201602001949094529598949750929550505050565b600080604083850312156118f2578182fd5b6118fb83611768565b91506020830135801515811461190f578182fd5b809150509250929050565b6000806040838503121561192c578182fd5b61193583611768565b946020939093013593505050565b600060208284031215611954578081fd5b813561144681611d0b565b600060208284031215611970578081fd5b815161144681611d0b565b60006020828403121561198c578081fd5b5035919050565b600080604083850312156119a5578182fd5b50508035926020909101359150565b600081518084526119cc816020860160208601611c33565b601f01601f19169290920160200192915050565b600081516119f2818560208601611c33565b9290920192915050565b60008351611a0e818460208801611c33565b835190830190611a22818360208801611c33565b01949350505050565b600080845482600182811c915080831680611a4757607f831692505b6020808410821415611a6757634e487b7160e01b87526022600452602487fd5b818015611a7b5760018114611a8c57611ab8565b60ff19861689528489019650611ab8565b60008b815260209020885b86811015611ab05781548b820152908501908301611a97565b505084890196505b505050505050611ad8611ad282602f60f81b815260010190565b856119e0565b95945050505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611b14908301846119b4565b9695505050505050565b60208152600061144660208301846119b4565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b60008219821115611be457611be4611cc9565b500190565b600082611bf857611bf8611cdf565b500490565b6000816000190483118215151615611c1757611c17611cc9565b500290565b600082821015611c2e57611c2e611cc9565b500390565b60005b83811015611c4e578181015183820152602001611c36565b83811115610bc45750506000910152565b600181811c90821680611c7357607f821691505b60208210811415611c9457634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611cae57611cae611cc9565b5060010190565b600082611cc457611cc4611cdf565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610d6057600080fdfe697066733a2f2f62616679626569656c7967676c346461717a326578343274686e73616937626f6f72626963723570357663786d6778653666747469656961737879a2646970667358221220a4e1c4daa8a08a1f9108fd9eb4537ce0d880fc5f7dc9cf6b711bf3a6a53f318764736f6c63430008040033";

export class SkullDay__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<SkullDay> {
    return super.deploy(overrides || {}) as Promise<SkullDay>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SkullDay {
    return super.attach(address) as SkullDay;
  }
  connect(signer: Signer): SkullDay__factory {
    return super.connect(signer) as SkullDay__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SkullDayInterface {
    return new utils.Interface(_abi) as SkullDayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SkullDay {
    return new Contract(address, _abi, signerOrProvider) as SkullDay;
  }
}