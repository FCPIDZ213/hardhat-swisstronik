async function main() {
  const SimpleContract = await ethers.getContractFactory("SimpleContract");
  const simpleContract = await SimpleContract.deploy("Hello, Swisstronik!");

  await simpleContract.waitForDeployment();

  console.log("SimpleContract deployed to:", await simpleContract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
