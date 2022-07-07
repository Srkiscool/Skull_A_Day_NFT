import hre from 'hardhat'
const contract = '0x6B6C69AD428BF369cB73597688bBF18e7B9e3509'

async function main() {
  if (!contract) {
    throw new Error('please specify contract address')
  }

  await hre.run('verify:verify', {
    address: contract,
    constructorArguments: ['Hello, Hardhat!'],
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
