class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
      } else {
        console.log("Insufficient funds");
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  

  const account1 = new BankAccount(1001, "Iqbal Hossen", 1500);
  const account2 = new BankAccount(1002, "Jahid Hossen", 1000);
  

  account1.deposit(700);
  account1.withdraw(100);
  account1.withdraw(700); 
  
  account2.deposit(300);
  account2.withdraw(200);
  

  console.log("\nAccount 1 Information:");
  account1.displayAccountInfo();
  
  console.log("\nAccount 2 Information:");
  account2.displayAccountInfo();
  