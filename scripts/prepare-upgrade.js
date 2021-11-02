// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = 'FILL_ME_IN'
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    console.log("Preparing upgrade...")
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2)
    console.log("BoxV2 at:", boxV2Address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
