
import { AptosAccount, AptosClient, BCS, HexString, Network, Provider } from "aptos";
export class StakeAmount {
  private provider = new Provider(Network.DEVNET);
  public moduleAddress = `0x4b9756767d645fd255bebcbe818ce313dd3036cfbd2c994fe7ddf2728084267e`;
  public teamAddress = "0x242c026099140c0d787faf9da562d0aace66700666a4d8fd80dab86756b31660";
  public streamsThreshold = 1000;
  public stakeAmount = 100000000;
  private isStaked: boolean = false;
  private privateKeyHex = "0xddb7925e1958cbbc6aa9be59ed6a8107b8b157634e51a7f09f1ca20f7440f785"; //process.env.PRIVATE_KEY;
  private withdrawalAddress = "0x09659772f012f49dd49b0c8f98ef2252f29f7eb21c1e49eaaac6f70b11344d3c";
  private privateKeyBytes = HexString.ensure(this.privateKeyHex).toUint8Array();
  

  private checkSponsorSetup = async (account: any) => {
    const payload = {
      function: `${this.moduleAddress}::locked_coins::is_sponsor_setup`,
      type_arguments: ["0x1::aptos_coin::AptosCoin"],
      arguments: [account.address],
    };
    const client = (this.provider as any).aptosClient;
    try {
      const result = await client.view(payload);
      return result === 1;
    } catch (error) {
      console.error("Error checking sponsor setup:", error);
      return false;
    }
  };
  

  public initializeSponsor = async () => {
    // @ts-ignore
    const wallet = window?.aptos;
    const response = await wallet.connect();
    const account = await wallet.account();

    if (!account) {
      console.error("No account connected");
      return;
    }

    
  // const isSponsorSetup = await this.checkSponsorSetup(account);
  // if (!isSponsorSetup) {
  //   console.error("Sponsor account has not been set up to create locks for the specified CoinType yet.");
  //   return;
  // }

    const lockingPayload={

      type: "entry_function_payload",
      function: `${this.moduleAddress}::locked_coins::initialize_sponsor`,
      type_arguments: ["0x1::aptos_coin::AptosCoin"],
      arguments: [this.teamAddress],
    }
    try {
      console.log(account.address);
      const pendingTransaction = await (
        window as any
      ).aptos.signAndSubmitTransaction(lockingPayload);
      console.log(pendingTransaction);
      console.log(this.provider);
      const client = (this.provider as any).aptosClient;
      console.log(client);
      const txn = await client.waitForTransactionWithResult(
        pendingTransaction.hash
      );
      console.log(txn);
    } catch (error: any) {
      console.error("Error  Initialising:", error);
    }


  }
  public handleStaking = async () => {
    // @ts-ignore
    const wallet = window?.aptos;
    const response = await wallet.connect();
    const account = await wallet.account();

    if (!account) {
      console.error("No account connected");
      return;
    }

    const lockingPayload = {
      type: "entry_function_payload",
      function: `${this.moduleAddress}::locked_coins::add_locked_coins`,
      type_arguments: ["0x1::aptos_coin::AptosCoin"],
      arguments: [this.teamAddress, this.stakeAmount, this.streamsThreshold],
    };

    try {
      console.log(account.address);
      const pendingTransaction = await (
        window as any
      ).aptos.signAndSubmitTransaction(lockingPayload);
      console.log(pendingTransaction);
      console.log(this.provider);
      const client = (this.provider as any).aptosClient;
      console.log(client);
      const txn = await client.waitForTransactionWithResult(
        pendingTransaction.hash
      );
      console.log(txn);
      this.isStaked = true;
      localStorage.setItem("isStaked", this.isStaked.toString());
    } catch (error: any) {
      console.error("Error Staking:", error);
    }
    localStorage.setItem("isStaked", this.isStaked.toString());
  };

  public haveStaked = async () => {
    // @ts-ignore
    const wallet = window?.aptos;
    const response = await wallet.connect();
    const account = await wallet.account();

    if (!account) {
      console.error("No account connected");
      return;
    }

    const payload = {
      function: this.moduleAddress + "::locked_coins::artist_exists",
      type_arguments: ["0x1::aptos_coin::AptosCoin"],
      arguments: [this.teamAddress, account.address],
    };
    const client = (this.provider as any).aptosClient;
    const check = await client.view(payload);
    if (check == 1) {
      this.isStaked = true;
    } else {
      this.isStaked = false;
    }
    localStorage.setItem("isStaked", this.isStaked.toString());
    return this.isStaked;
  };
}
