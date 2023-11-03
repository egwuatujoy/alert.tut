
let balance = 5000;

const myBalance = parseInt(
  prompt(
    "Welcome Joy Banking Services\n1. Check balance \n2. Recharge \n3. Transfer \n4. Buy Data "
  )
);

switch (myBalance) {
  case 1:
    alert(`Your balance is ${balance} NAIRA`);
    break;
  case 2:
    recharge();
    break;
  case 3:
    transfer();
    break;
  case 4:
    alert("not available at the moment");
}

function transfer() {
  alert("Welcome to EasyBanking by JoyBank");
  const myTransfer = parseInt(
    prompt(
      " Where do you want to make your transaction to :\n 1: Transfer to Zenith Bank\n2:Transfer to Wema Bank"
    )
  );

  switch (myTransfer) {
    case 1:
      const amount = parseInt(prompt("Enter Amount:"));
      const name = prompt(`Enter your destination`);
      if (balance == 0) {
        alert("dail 555 to borrow money from our platform\n Thank you.");
      } else if (amount <= balance) {
        balance -= amount;
        alert(
          `Your transfer of ${amount} to ${name} is sucessful\n Your new balance is now ${balance} `
        );
      } else if (amount >= balance) {
        alert(`insufficient fund but you still have ${balance} in your wallet`);
      }

      break;
    case 2:
      alert("WELCOME TO WEMA BANK");
      break;
    default:
      alert("INPUT ERROR");
  }
}

function recharge() {
  const myRecharge = parseInt(
    prompt("What type of recharge do you want? \n1. Airtime \n 2.Data ")
  );
  switch (myRecharge) {
    case 1:
      const amount = parseInt(prompt("Enter Amount:"));
      const num = prompt(`Enter your destination`);
      if (amount <= balance) {
        balance -= amount;
        alert(
          `Your recharge of ${amount} to ${num}is sucessful\n Your new balance is now ${balance} `
        );
      } else {
        alert("abeg go hustle");
      }
      break;
    case 2:
      alert("Data service is not available");
      break;
    default:
      alert("Invalid number");
  }
}
