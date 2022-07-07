import hre from 'hardhat'
const contract = '0xe0f3dfa9ABA3F17639eE308C826E196849D23695'

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
