import hre from 'hardhat'
const contract = '0x71669fE0682E8Eb7388CFd9C4dF4D42Ede88e3EF'

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
