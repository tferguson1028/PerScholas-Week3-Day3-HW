class BankAccount
{
  constructor(ownerName, balance, acctNum)
  {
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = acctNum;
  }
  
  deposit(cashAmount)
  {
    cashAmount = Number(cashAmount);
    this.balance += cashAmount;
  }
  
  withdraw(cashAmount)
  {
    cashAmount = Number(cashAmount);
    this.balance -= cashAmount;
    return cashAmount;
  }
}

class CheckingAccount extends BankAccount
{
  static overdraftFee = "35.00";
  constructor(ownerName, balance, acctNum, overdraftEnable)
  {
    super(ownerName, balance, acctNum);
    this.overdraftEnable = overdraftEnable;
  }
  withdraw(cashAmount)
  {
    cashAmount = Number(cashAmount);
    if(this.balance - cashAmount <= 0)
    {
      if(!this.overdraftEnable)
      {
        console.log(`The transaction has been declined since account ID${this.acctNum} does not have enough in their balance.`);  
        return 0;
      }else
      {
        console.log(`The account ID${this.acctNum} has been charged for over drafting.`) 
        this.balance -= CheckingAccount.overdraftFee;
        // return super.withdraw(cashAmount);
      }
    }
    return super.withdraw(cashAmount);
  }
}

class SavingsAccount extends BankAccount
{
  withdraw()
  {
    console.log(`Withdrawing has been disabled for this account. Please contact your bank for more information.`);
    return 0;
  } 
}

let bnkAccount = new BankAccount("Dow", 0, "2123149")
let chkAccount = new CheckingAccount("Bun", 0, "1029124", true);
let chkAccount2 = new CheckingAccount("Bur", 0, "0137293", false);
let svnAccount = new SavingsAccount("Row", 0, "124154");

bankTest(bnkAccount);
bankTest(chkAccount);
bankTest(chkAccount2);
bankTest(svnAccount);

function bankTest(account)
{
  let wallet = 0;
  console.log(account);
  
  account.deposit(152.50);
  console.log(account.balance);
  
  wallet = account.withdraw(170.25);
  console.log("bal: " + account.balance);
  console.log("wal: " + wallet);
  console.log();
}
