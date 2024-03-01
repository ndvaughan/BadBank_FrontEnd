function Deposit() {
  // State variables for form inputs, status, and user balance
  const [amount, setAmount] = React.useState("");
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext); // Accessing UserContext

  // Function to handle deposit
  function handleDeposit() {
    const depositAmount = parseFloat(amount);
    if (isNaN(depositAmount)) {
      setStatus("Error: Not a Number");
      setTimeout(() => setStatus(""), 3000);
      return;
    }
    if (depositAmount <= 0) {
      setStatus("Error: Negative Deposit");
      setTimeout(() => setStatus(""), 3000);
      return;
    }
    
    // Update balance
    const updatedBalance = ctx.users[0].balance + depositAmount;
    ctx.users[0].balance = updatedBalance;
    
    ctx.users[0].deposits.push(depositAmount);
    console.log(depositAmount, updatedBalance);
    setStatus("Deposit successful");
    setAmount(""); // Clear input field after deposit
    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card
        bgcolor="secondary"
        header="Deposit"
        status={status}
        body={
          <>
            <img
              src="Bank_logo.png"
              className="img-fluid"
              alt="Responsive image"
            ></img>
            <p>Available balance: ${ctx.users[0].balance}</p>
            <br />
            Amount to Deposit
            <br />
            <input
              type="input"
              className="form-control"
              id="depositAmount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleDeposit}
              disabled={!amount} // Disable button if no input
            >
              Deposit
            </button>
          </>
        }
      />
    </div>
  );
}