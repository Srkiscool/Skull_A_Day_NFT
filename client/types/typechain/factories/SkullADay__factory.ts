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
import type { SkullADay, SkullADayInterface } from "../SkullADay";

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
];

const _bytecode =
  "0x67016345785d8a000060099081556003600d55601080546001600160a01b031916738eb4e89ee45b50a44738330aa5b4dd572f86ebeb179055600b60808181526a536b756c6c20612044617960a81b60a090815261010060405260c093845268534b554c4c4144415960b81b60e0529092916200007f9160009162000119565b5080516200009590600190602084019062000119565b505050620000b2620000ac620000c360201b60201c565b620000c7565b600160085561016e600b55620001fc565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200012790620001bf565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b600181811c90821680620001d457607f821691505b60208210811415620001f657634e487b7160e01b600052602260045260246000fd5b50919050565b611cc7806200020c6000396000f3fe6080604052600436106101815760003560e01c8063715018a6116100d1578063b88d4fde1161008a578063c87b56dd11610064578063c87b56dd1461045d578063d5abeb011461047d578063e985e9c514610493578063f2fde38b146104dc57600080fd5b8063b88d4fde14610412578063c407321714610432578063c6cfdc5b1461044757600080fd5b8063715018a61461036a5780638da5cb5b1461037f57806395d89b411461039d578063a0712d68146103b2578063a22cb465146103c5578063ada7c4ed146103e557600080fd5b80632a55205a1161013e5780636352211e116101185780636352211e146102f45780636817c76c146103145780636f8b44b01461032a57806370a082311461034a57600080fd5b80632a55205a1461027b578063346de50a146102ba57806342842e0e146102d457600080fd5b806301ffc9a71461018657806306fdde03146101bb578063081812fc146101dd578063095ea7b31461021557806318160ddd1461023757806323b872dd1461025b575b600080fd5b34801561019257600080fd5b506101a66101a13660046118b3565b6104fc565b60405190151581526020015b60405180910390f35b3480156101c757600080fd5b506101d061054e565b6040516101b29190611a8e565b3480156101e957600080fd5b506101fd6101f83660046118eb565b6105e0565b6040516001600160a01b0390911681526020016101b2565b34801561022157600080fd5b5061023561023036600461188a565b610607565b005b34801561024357600080fd5b5061024d600a5481565b6040519081526020016101b2565b34801561026757600080fd5b50610235610276366004611740565b610722565b34801561028757600080fd5b5061029b610296366004611903565b610753565b604080516001600160a01b0390931683526020830191909152016101b2565b3480156102c657600080fd5b50600c546101a69060ff1681565b3480156102e057600080fd5b506102356102ef366004611740565b610783565b34801561030057600080fd5b506101fd61030f3660046118eb565b61079e565b34801561032057600080fd5b5061024d60095481565b34801561033657600080fd5b506102356103453660046118eb565b6107fe565b34801561035657600080fd5b5061024d6103653660046116f4565b61080b565b34801561037657600080fd5b50610235610891565b34801561038b57600080fd5b506007546001600160a01b03166101fd565b3480156103a957600080fd5b506101d06108a5565b6102356103c03660046118eb565b6108b4565b3480156103d157600080fd5b506102356103e0366004611850565b610adb565b3480156103f157600080fd5b5061024d6104003660046116f4565b60116020526000908152604090205481565b34801561041e57600080fd5b5061023561042d36600461177b565b610aea565b34801561043e57600080fd5b50610235610b22565b34801561045357600080fd5b5061024d600d5481565b34801561046957600080fd5b506101d06104783660046118eb565b610b3e565b34801561048957600080fd5b5061024d600b5481565b34801561049f57600080fd5b506101a66104ae36600461170e565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156104e857600080fd5b506102356104f73660046116f4565b610c5e565b60006001600160e01b031982166380ac58cd60e01b148061052d57506001600160e01b03198216635b5e139f60e01b145b8061054857506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461055d90611bcf565b80601f016020809104026020016040519081016040528092919081815260200182805461058990611bcf565b80156105d65780601f106105ab576101008083540402835291602001916105d6565b820191906000526020600020905b8154815290600101906020018083116105b957829003601f168201915b5050505050905090565b60006105eb82610cd7565b506000908152600460205260409020546001600160a01b031690565b60006106128261079e565b9050806001600160a01b0316836001600160a01b031614156106855760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806106a157506106a181336104ae565b6107135760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161067c565b61071d8383610d36565b505050565b61072c3382610da4565b6107485760405162461bcd60e51b815260040161067c90611af3565b61071d838383610e22565b600080606461076384600a611b6d565b61076d9190611b59565b6010546001600160a01b03169590945092505050565b61071d83838360405180602001604052806000815250610aea565b6000818152600260205260408120546001600160a01b0316806105485760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161067c565b610806610fbe565b600b55565b60006001600160a01b0382166108755760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161067c565b506001600160a01b031660009081526003602052604090205490565b610899610fbe565b6108a36000611018565b565b60606001805461055d90611bcf565b600260085414156109075760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161067c565b6002600855600c5460ff166109545760405162461bcd60e51b81526020600482015260136024820152721b5a5b9d1a5b99c81b9bdd08195b98589b1959606a1b604482015260640161067c565b600d5433600090815260116020526040902054106109ad5760405162461bcd60e51b8152602060048201526016602482015275195e18d959591cc81b585e081c195c881dd85b1b195d60521b604482015260640161067c565b806009546109bb9190611b6d565b34146109f75760405162461bcd60e51b815260206004820152600b60248201526a77726f6e672076616c756560a81b604482015260640161067c565b600a54600b5411610a355760405162461bcd60e51b81526020600482015260086024820152671cdbdb19081bdd5d60c21b604482015260640161067c565b60606000805b83811015610ad057336000908152601160205260408120805491610a5e83611c0a565b9091555050600a8054906000610a7383611c0a565b9190505550600a549150600e610a888361106a565b604051602001610a9992919061199b565b6040516020818303038152906040529250610ab43383611184565b610abe828461119e565b80610ac881611c0a565b915050610a3b565b505060016008555050565b610ae6338383611238565b5050565b610af43383610da4565b610b105760405162461bcd60e51b815260040161067c90611af3565b610b1c84848484611307565b50505050565b610b2a610fbe565b600c805460ff19811660ff90911615179055565b6060610b4982610cd7565b60008281526006602052604081208054610b6290611bcf565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8e90611bcf565b8015610bdb5780601f10610bb057610100808354040283529160200191610bdb565b820191906000526020600020905b815481529060010190602001808311610bbe57829003601f168201915b505050505090506000610c08604080518082019091526007815266697066733a2f2f60c81b602082015290565b9050805160001415610c1b575092915050565b815115610c4d578082604051602001610c3592919061196c565b60405160208183030381529060405292505050919050565b610c568461133a565b949350505050565b610c66610fbe565b6001600160a01b038116610ccb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161067c565b610cd481611018565b50565b6000818152600260205260409020546001600160a01b0316610cd45760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161067c565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d6b8261079e565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610db08361079e565b9050806001600160a01b0316846001600160a01b03161480610df757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610c565750836001600160a01b0316610e10846105e0565b6001600160a01b031614949350505050565b826001600160a01b0316610e358261079e565b6001600160a01b031614610e995760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161067c565b6001600160a01b038216610efb5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161067c565b610f06600082610d36565b6001600160a01b0383166000908152600360205260408120805460019290610f2f908490611b8c565b90915550506001600160a01b0382166000908152600360205260408120805460019290610f5d908490611b41565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6007546001600160a01b031633146108a35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161067c565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60608161108e5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156110b857806110a281611c0a565b91506110b19050600a83611b59565b9150611092565b60008167ffffffffffffffff8111156110e157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561110b576020820181803683370190505b5090505b8415610c5657611120600183611b8c565b915061112d600a86611c25565b611138906030611b41565b60f81b81838151811061115b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535061117d600a86611b59565b945061110f565b610ae68282604051806020016040528060008152506113bd565b6000828152600260205260409020546001600160a01b03166112195760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b606482015260840161067c565b6000828152600660209081526040909120825161071d9284019061163f565b816001600160a01b0316836001600160a01b0316141561129a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161067c565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611312848484610e22565b61131e848484846113f0565b610b1c5760405162461bcd60e51b815260040161067c90611aa1565b606061134582610cd7565b600061136b604080518082019091526007815266697066733a2f2f60c81b602082015290565b9050600081511161138b57604051806020016040528060008152506113b6565b806113958461106a565b6040516020016113a692919061196c565b6040516020818303038152906040525b9392505050565b6113c783836114fd565b6113d460008484846113f0565b61071d5760405162461bcd60e51b815260040161067c90611aa1565b60006001600160a01b0384163b156114f257604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611434903390899088908890600401611a51565b602060405180830381600087803b15801561144e57600080fd5b505af192505050801561147e575060408051601f3d908101601f1916820190925261147b918101906118cf565b60015b6114d8573d8080156114ac576040519150601f19603f3d011682016040523d82523d6000602084013e6114b1565b606091505b5080516114d05760405162461bcd60e51b815260040161067c90611aa1565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c56565b506001949350505050565b6001600160a01b0382166115535760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161067c565b6000818152600260205260409020546001600160a01b0316156115b85760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161067c565b6001600160a01b03821660009081526003602052604081208054600192906115e1908490611b41565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461164b90611bcf565b90600052602060002090601f01602090048101928261166d57600085556116b3565b82601f1061168657805160ff19168380011785556116b3565b828001600101855582156116b3579182015b828111156116b3578251825591602001919060010190611698565b506116bf9291506116c3565b5090565b5b808211156116bf57600081556001016116c4565b80356001600160a01b03811681146116ef57600080fd5b919050565b600060208284031215611705578081fd5b6113b6826116d8565b60008060408385031215611720578081fd5b611729836116d8565b9150611737602084016116d8565b90509250929050565b600080600060608486031215611754578081fd5b61175d846116d8565b925061176b602085016116d8565b9150604084013590509250925092565b60008060008060808587031215611790578081fd5b611799856116d8565b93506117a7602086016116d8565b925060408501359150606085013567ffffffffffffffff808211156117ca578283fd5b818701915087601f8301126117dd578283fd5b8135818111156117ef576117ef611c65565b604051601f8201601f19908116603f0116810190838211818310171561181757611817611c65565b816040528281528a602084870101111561182f578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611862578182fd5b61186b836116d8565b91506020830135801515811461187f578182fd5b809150509250929050565b6000806040838503121561189c578182fd5b6118a5836116d8565b946020939093013593505050565b6000602082840312156118c4578081fd5b81356113b681611c7b565b6000602082840312156118e0578081fd5b81516113b681611c7b565b6000602082840312156118fc578081fd5b5035919050565b60008060408385031215611915578182fd5b50508035926020909101359150565b6000815180845261193c816020860160208601611ba3565b601f01601f19169290920160200192915050565b60008151611962818560208601611ba3565b9290920192915050565b6000835161197e818460208801611ba3565b835190830190611992818360208801611ba3565b01949350505050565b600080845482600182811c9150808316806119b757607f831692505b60208084108214156119d757634e487b7160e01b87526022600452602487fd5b8180156119eb57600181146119fc57611a28565b60ff19861689528489019650611a28565b60008b815260209020885b86811015611a205781548b820152908501908301611a07565b505084890196505b505050505050611a48611a4282602f60f81b815260010190565b85611950565b95945050505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611a8490830184611924565b9695505050505050565b6020815260006113b66020830184611924565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b60008219821115611b5457611b54611c39565b500190565b600082611b6857611b68611c4f565b500490565b6000816000190483118215151615611b8757611b87611c39565b500290565b600082821015611b9e57611b9e611c39565b500390565b60005b83811015611bbe578181015183820152602001611ba6565b83811115610b1c5750506000910152565b600181811c90821680611be357607f821691505b60208210811415611c0457634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611c1e57611c1e611c39565b5060010190565b600082611c3457611c34611c4f565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610cd457600080fdfea26469706673582212209bd99c49f9f0bacbcbe106b80460c4d1b6fb2a0379d4334494fcc274d78c4d1464736f6c63430008040033";

export class SkullADay__factory extends ContractFactory {
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
  ): Promise<SkullADay> {
    return super.deploy(overrides || {}) as Promise<SkullADay>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SkullADay {
    return super.attach(address) as SkullADay;
  }
  connect(signer: Signer): SkullADay__factory {
    return super.connect(signer) as SkullADay__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SkullADayInterface {
    return new utils.Interface(_abi) as SkullADayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SkullADay {
    return new Contract(address, _abi, signerOrProvider) as SkullADay;
  }
}
