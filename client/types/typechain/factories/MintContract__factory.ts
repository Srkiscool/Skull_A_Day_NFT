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
import type { MintContract, MintContractInterface } from "../MintContract";

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
        name: "_data",
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
];

const _bytecode =
  "0x67016345785d8a000060099081556003600d55601080546001600160a01b031916738eb4e89ee45b50a44738330aa5b4dd572f86ebeb179055600b60808181526a536b756c6c20612044617960a81b60a090815261010060405260c093845268534b554c4c4144415960b81b60e0529092916200007f9160009162000119565b5080516200009590600190602084019062000119565b505050620000b2620000ac620000c360201b60201c565b620000c7565b600160085561016e600b55620001fc565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200012790620001bf565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b600181811c90821680620001d457607f821691505b60208210811415620001f657634e487b7160e01b600052602260045260246000fd5b50919050565b611e6d806200020c6000396000f3fe6080604052600436106101815760003560e01c8063715018a6116100d1578063b88d4fde1161008a578063c87b56dd11610064578063c87b56dd1461045d578063d5abeb011461047d578063e985e9c514610493578063f2fde38b146104dc57600080fd5b8063b88d4fde14610412578063c407321714610432578063c6cfdc5b1461044757600080fd5b8063715018a61461036a5780638da5cb5b1461037f57806395d89b411461039d578063a0712d68146103b2578063a22cb465146103c5578063ada7c4ed146103e557600080fd5b80632a55205a1161013e5780636352211e116101185780636352211e146102f45780636817c76c146103145780636f8b44b01461032a57806370a082311461034a57600080fd5b80632a55205a1461027b578063346de50a146102ba57806342842e0e146102d457600080fd5b806301ffc9a71461018657806306fdde03146101bb578063081812fc146101dd578063095ea7b31461021557806318160ddd1461023757806323b872dd1461025b575b600080fd5b34801561019257600080fd5b506101a66101a1366004611a21565b6104fc565b60405190151581526020015b60405180910390f35b3480156101c757600080fd5b506101d061054e565b6040516101b29190611bfc565b3480156101e957600080fd5b506101fd6101f8366004611a59565b6105e0565b6040516001600160a01b0390911681526020016101b2565b34801561022157600080fd5b506102356102303660046119f8565b61066d565b005b34801561024357600080fd5b5061024d600a5481565b6040519081526020016101b2565b34801561026757600080fd5b506102356102763660046118ae565b610783565b34801561028757600080fd5b5061029b610296366004611a71565b6107b4565b604080516001600160a01b0390931683526020830191909152016101b2565b3480156102c657600080fd5b50600c546101a69060ff1681565b3480156102e057600080fd5b506102356102ef3660046118ae565b6107e4565b34801561030057600080fd5b506101fd61030f366004611a59565b6107ff565b34801561032057600080fd5b5061024d60095481565b34801561033657600080fd5b50610235610345366004611a59565b610876565b34801561035657600080fd5b5061024d610365366004611862565b6108a5565b34801561037657600080fd5b5061023561092c565b34801561038b57600080fd5b506007546001600160a01b03166101fd565b3480156103a957600080fd5b506101d0610962565b6102356103c0366004611a59565b610971565b3480156103d157600080fd5b506102356103e03660046119be565b610b8d565b3480156103f157600080fd5b5061024d610400366004611862565b60116020526000908152604090205481565b34801561041e57600080fd5b5061023561042d3660046118e9565b610b9c565b34801561043e57600080fd5b50610235610bd4565b34801561045357600080fd5b5061024d600d5481565b34801561046957600080fd5b506101d0610478366004611a59565b610c12565b34801561048957600080fd5b5061024d600b5481565b34801561049f57600080fd5b506101a66104ae36600461187c565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156104e857600080fd5b506102356104f7366004611862565b610d98565b60006001600160e01b031982166380ac58cd60e01b148061052d57506001600160e01b03198216635b5e139f60e01b145b8061054857506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461055d90611d75565b80601f016020809104026020016040519081016040528092919081815260200182805461058990611d75565b80156105d65780601f106105ab576101008083540402835291602001916105d6565b820191906000526020600020905b8154815290600101906020018083116105b957829003601f168201915b5050505050905090565b60006105eb82610e33565b6106515760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610678826107ff565b9050806001600160a01b0316836001600160a01b031614156106e65760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610648565b336001600160a01b0382161480610702575061070281336104ae565b6107745760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610648565b61077e8383610e50565b505050565b61078d3382610ebe565b6107a95760405162461bcd60e51b815260040161064890611c96565b61077e838383610fa4565b60008060646107c484600a611d13565b6107ce9190611cff565b6010546001600160a01b03169590945092505050565b61077e83838360405180602001604052806000815250610b9c565b6000818152600260205260408120546001600160a01b0316806105485760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610648565b6007546001600160a01b031633146108a05760405162461bcd60e51b815260040161064890611c61565b600b55565b60006001600160a01b0382166109105760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610648565b506001600160a01b031660009081526003602052604090205490565b6007546001600160a01b031633146109565760405162461bcd60e51b815260040161064890611c61565b6109606000611140565b565b60606001805461055d90611d75565b600260085414156109c45760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610648565b6002600855600c5460ff16610a115760405162461bcd60e51b81526020600482015260136024820152721b5a5b9d1a5b99c81b9bdd08195b98589b1959606a1b6044820152606401610648565b600d543360009081526011602052604090205410610a6a5760405162461bcd60e51b8152602060048201526016602482015275195e18d959591cc81b585e081c195c881dd85b1b195d60521b6044820152606401610648565b6009543414610aa95760405162461bcd60e51b815260206004820152600b60248201526a77726f6e672076616c756560a81b6044820152606401610648565b600a54600b5411610ae75760405162461bcd60e51b81526020600482015260086024820152671cdbdb19081bdd5d60c21b6044820152606401610648565b60606000805b83811015610b8257336000908152601160205260408120805491610b1083611db0565b9091555050600a8054906000610b2583611db0565b9190505550600a549150600e610b3a83611192565b604051602001610b4b929190611b09565b6040516020818303038152906040529250610b6633836112ac565b610b7082846112c6565b80610b7a81611db0565b915050610aed565b505060016008555050565b610b98338383611351565b5050565b610ba63383610ebe565b610bc25760405162461bcd60e51b815260040161064890611c96565b610bce84848484611420565b50505050565b6007546001600160a01b03163314610bfe5760405162461bcd60e51b815260040161064890611c61565b600c805460ff19811660ff90911615179055565b6060610c1d82610e33565b610c835760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b6064820152608401610648565b60008281526006602052604081208054610c9c90611d75565b80601f0160208091040260200160405190810160405280929190818152602001828054610cc890611d75565b8015610d155780601f10610cea57610100808354040283529160200191610d15565b820191906000526020600020905b815481529060010190602001808311610cf857829003601f168201915b505050505090506000610d42604080518082019091526007815266697066733a2f2f60c81b602082015290565b9050805160001415610d55575092915050565b815115610d87578082604051602001610d6f929190611ada565b60405160208183030381529060405292505050919050565b610d9084611453565b949350505050565b6007546001600160a01b03163314610dc25760405162461bcd60e51b815260040161064890611c61565b6001600160a01b038116610e275760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610648565b610e3081611140565b50565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610e85826107ff565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610ec982610e33565b610f2a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610648565b6000610f35836107ff565b9050806001600160a01b0316846001600160a01b03161480610f705750836001600160a01b0316610f65846105e0565b6001600160a01b0316145b80610d9057506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff16610d90565b826001600160a01b0316610fb7826107ff565b6001600160a01b03161461101b5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610648565b6001600160a01b03821661107d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610648565b611088600082610e50565b6001600160a01b03831660009081526003602052604081208054600192906110b1908490611d32565b90915550506001600160a01b03821660009081526003602052604081208054600192906110df908490611ce7565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6060816111b65750506040805180820190915260018152600360fc1b602082015290565b8160005b81156111e057806111ca81611db0565b91506111d99050600a83611cff565b91506111ba565b60008167ffffffffffffffff81111561120957634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611233576020820181803683370190505b5090505b8415610d9057611248600183611d32565b9150611255600a86611dcb565b611260906030611ce7565b60f81b81838151811061128357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506112a5600a86611cff565b9450611237565b610b9882826040518060200160405280600081525061153a565b6112cf82610e33565b6113325760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610648565b6000828152600660209081526040909120825161077e928401906117ad565b816001600160a01b0316836001600160a01b031614156113b35760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610648565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61142b848484610fa4565b6114378484848461156d565b610bce5760405162461bcd60e51b815260040161064890611c0f565b606061145e82610e33565b6114c25760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610648565b60006114e8604080518082019091526007815266697066733a2f2f60c81b602082015290565b905060008151116115085760405180602001604052806000815250611533565b8061151284611192565b604051602001611523929190611ada565b6040516020818303038152906040525b9392505050565b611544838361167a565b611551600084848461156d565b61077e5760405162461bcd60e51b815260040161064890611c0f565b60006001600160a01b0384163b1561166f57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906115b1903390899088908890600401611bbf565b602060405180830381600087803b1580156115cb57600080fd5b505af19250505080156115fb575060408051601f3d908101601f191682019092526115f891810190611a3d565b60015b611655573d808015611629576040519150601f19603f3d011682016040523d82523d6000602084013e61162e565b606091505b50805161164d5760405162461bcd60e51b815260040161064890611c0f565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610d90565b506001949350505050565b6001600160a01b0382166116d05760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610648565b6116d981610e33565b156117265760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610648565b6001600160a01b038216600090815260036020526040812080546001929061174f908490611ce7565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8280546117b990611d75565b90600052602060002090601f0160209004810192826117db5760008555611821565b82601f106117f457805160ff1916838001178555611821565b82800160010185558215611821579182015b82811115611821578251825591602001919060010190611806565b5061182d929150611831565b5090565b5b8082111561182d5760008155600101611832565b80356001600160a01b038116811461185d57600080fd5b919050565b600060208284031215611873578081fd5b61153382611846565b6000806040838503121561188e578081fd5b61189783611846565b91506118a560208401611846565b90509250929050565b6000806000606084860312156118c2578081fd5b6118cb84611846565b92506118d960208501611846565b9150604084013590509250925092565b600080600080608085870312156118fe578081fd5b61190785611846565b935061191560208601611846565b925060408501359150606085013567ffffffffffffffff80821115611938578283fd5b818701915087601f83011261194b578283fd5b81358181111561195d5761195d611e0b565b604051601f8201601f19908116603f0116810190838211818310171561198557611985611e0b565b816040528281528a602084870101111561199d578586fd5b82602086016020830137918201602001949094529598949750929550505050565b600080604083850312156119d0578182fd5b6119d983611846565b9150602083013580151581146119ed578182fd5b809150509250929050565b60008060408385031215611a0a578182fd5b611a1383611846565b946020939093013593505050565b600060208284031215611a32578081fd5b813561153381611e21565b600060208284031215611a4e578081fd5b815161153381611e21565b600060208284031215611a6a578081fd5b5035919050565b60008060408385031215611a83578182fd5b50508035926020909101359150565b60008151808452611aaa816020860160208601611d49565b601f01601f19169290920160200192915050565b60008151611ad0818560208601611d49565b9290920192915050565b60008351611aec818460208801611d49565b835190830190611b00818360208801611d49565b01949350505050565b600080845482600182811c915080831680611b2557607f831692505b6020808410821415611b4557634e487b7160e01b87526022600452602487fd5b818015611b595760018114611b6a57611b96565b60ff19861689528489019650611b96565b60008b815260209020885b86811015611b8e5781548b820152908501908301611b75565b505084890196505b505050505050611bb6611bb082602f60f81b815260010190565b85611abe565b95945050505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611bf290830184611a92565b9695505050505050565b6020815260006115336020830184611a92565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611cfa57611cfa611ddf565b500190565b600082611d0e57611d0e611df5565b500490565b6000816000190483118215151615611d2d57611d2d611ddf565b500290565b600082821015611d4457611d44611ddf565b500390565b60005b83811015611d64578181015183820152602001611d4c565b83811115610bce5750506000910152565b600181811c90821680611d8957607f821691505b60208210811415611daa57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611dc457611dc4611ddf565b5060010190565b600082611dda57611dda611df5565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610e3057600080fdfea264697066735822122015f055b96cd5c6e4b48569409a6dd464b0cf92de9cbba032ce003a85c79a2a4464736f6c63430008040033";

export class MintContract__factory extends ContractFactory {
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
  ): Promise<MintContract> {
    return super.deploy(overrides || {}) as Promise<MintContract>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MintContract {
    return super.attach(address) as MintContract;
  }
  connect(signer: Signer): MintContract__factory {
    return super.connect(signer) as MintContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintContractInterface {
    return new utils.Interface(_abi) as MintContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintContract {
    return new Contract(address, _abi, signerOrProvider) as MintContract;
  }
}