// A bank account similulation in JS with classes

class BankAccount {
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    get balance(){
        console.log("Balance was accessed!");
        return this._balance;
    }

    get owner(){
        return this._owner;
    }

    set owner(name){
        this._owner = name;
    }

    set balance(amount){
        if (amount < 0){
            throw new Error ("Amount can not be negative\n")
        }
        this._balance = amount;
    }

    deposit(amount){
        if (amount <= 0) return;
        this.balance += amount;
    }

    withdraw(amount){
        if (amount > this.balance){
            console.log("Insufficient funds\n");
            return;
        }
        this.balance -= amount;
    }
}



// usage

const acc = new BankAccount("Papaa Morindat", 200000);
acc.deposit(1000000);
acc.withdraw(2000);
console.log("Available Balance:", acc.balance);
acc.deposit(2000);
console.log("Account balance after depositing 2000:", acc.balance);
console.log("\n");

// bad behaviours
// console.log("Account Owner: ", acc.owner);
// console.log("Balance: ", acc.balance);

// professional behaviours
console.log("Account Owner: ", acc.owner);
console.log("Available Balance: ", acc.balance);
console.log("\n");