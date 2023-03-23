var bank = (function () {
  var accounts = [];
  function openAccount(name, balance) {
    var account = new Account(name, balance);
    accounts.push(account);
  }
  function findAccount(number) {
    var account = accounts.find(function (account) {
      return account.number === number;
    });
    if (account != undefined) {
      return account;
    } else {
      throw Error("Account number " + number + " not found");
    }
  }
  function printAccounts() {
    accounts.forEach(function (account) {
      console.log(account.toString());
    });
  }
  function Account(name, balance) {
    this.name = name;
    this.number = Account.nextNumber++;
    this.balance = balance || 0;
  }
  Account.nextNumber = 1001;
  Account.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  Account.prototype.withdraw = function (amount) {
    this.balance -= amount;
  };
  Account.prototype.toString = function () {
    return (
      "Account[name=" +
      this.name +
      ", number=" +
      this.number +
      ", balance=" +
      this.balance +
      "]"
    );
  };
  return {
    open: openAccount,
    find: findAccount,
    printAlls: printAccounts,
  };
})();

bank.openAccount("Smith", 100);
bank.openAccount("Jones", 200);
try {
  bank.findAccount(1001).deposit(100);
  bank.findAccount(1002).withdraw(100);
  bank.findAccount(1003).deposit(100);
} catch (error) {
  console.log(error);
}
bank.printAccounts();
