function Withdraw() {
  // State variables for form inputs, status, and user balance
  const [amount, setAmount] = React.useState("");
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext); // Accessing UserContext

  // Function to handle withdrawal
  function handleWithdrawal() {
    const withdrawAmount = parseFloat(amount);
    if (isNaN(withdrawAmount)) {
      setStatus("Error: Not a Number");
      setTimeout(() => setStatus(""), 3000);
      return;
    }
    if (withdrawAmount <= 0) {
      setStatus("Error: Negative Withdrawal");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    // Check if withdrawal amount exceeds balance
    if (withdrawAmount > ctx.users[0].balance) {
      setStatus("Error: Insufficient Balance");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    // Update balance
    const updatedBalance = ctx.users[0].balance - withdrawAmount;
    ctx.users[0].balance = updatedBalance;

    ctx.users[0].withdrawals.push(withdrawAmount);
    console.log(withdrawAmount, updatedBalance);
    setStatus("Withdrawal successful");
    setAmount(""); // Clear input field after withdrawal
    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card
        bgcolor="secondary"
        header="Withdraw"
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
            Amount to Withdraw
            <br />
            <input
              type="input"
              className="form-control"
              id="withdrawAmount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleWithdrawal}
              disabled={!amount} // Disable button if no input
            >
              Withdraw
            </button>
          </>
        }
      />
    </div>
  );
}
