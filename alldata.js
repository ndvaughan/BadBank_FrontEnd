function AllData() {
  const ctx = React.useContext(UserContext);

  // State to track changes in user transactions
  const [transactions, setTransactions] = React.useState([]);

  // Effect to update transactions when ctx.users changes
  React.useEffect(() => {
    // Flatten transactions from all users
    const allTransactions = ctx.users.reduce((acc, user) => {
      // Create transaction objects for each deposit and withdrawal
      const depositTransactions = user.deposits.map((amount, index) => ({
        type: 'Deposit',
        name: user.name,
        email: user.email,
        amount,
        balance: user.balance,
        key: `deposit-${user.email}-${index}`
      }));
      const withdrawalTransactions = user.withdrawals.map((amount, index) => ({
        type: 'Withdrawal',
        name: user.name,
        email: user.email,
        amount,
        balance: user.balance,
        key: `withdrawal-${user.email}-${index}`
      }));
      // Concatenate deposit and withdrawal transactions
      return [...acc, ...depositTransactions, ...withdrawalTransactions];
    }, []);

    // Update transactions state
    setTransactions(allTransactions);
  }, [ctx.users]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {transactions.map((transaction) => (
          <Card
            key={transaction.key}
            bgcolor="secondary"
            header="Transaction Details"
            title="AllData"
            body={
              <>
                <img
                  src="Bank_logo.png"
                  className="img-fluid"
                  alt="Responsive image"
                ></img>
                <h5>User Details</h5>
                <p><strong>Name:</strong> {transaction.name}</p>
                <p><strong>Email:</strong> {transaction.email}</p>
                <p><strong>Type:</strong> {transaction.type}</p>
                <p><strong>Amount:</strong> ${transaction.amount}</p>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
