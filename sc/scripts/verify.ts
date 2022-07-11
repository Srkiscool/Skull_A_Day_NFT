import hre from 'hardhat'
const contract = '0x69692f14813B0cc8b8E875179e5C2Ef24d81268D'

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
