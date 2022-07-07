import hre from 'hardhat'
const contract = '0x391584e170ef76A6109407B66Ef755c44E8c84ce'

async function main() {
  if (!contract) {
    throw new Error('please specify contract address')
  }

  await hre.run('verify:verify', {
    address: contract
    // constructorArguments: ['Hello, Hardhat!'],
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
