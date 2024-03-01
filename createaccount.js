function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validateName(name) {
    const regex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    return regex.test(name);
  }  

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validatePassword(password) {
    return password.length >= 8;
  }

  function handleCreate() {

    if (!validateName(name)) {
      setStatus("Invalid name");
      return;
    }
    if (!validateEmail(email)) {
      setStatus("Invalid email");
      return;
    }
    if (!validatePassword(password)) {
      setStatus("Password must be at least 8 characters long");
      return;
    }
  
    const newUser = { name, email, password, deposits:[], withdrawals:[], balance: 0 }; // Assuming balance starts at 0 for new users
    ctx.users.push(newUser); // Add new user to the context
    setStatus("Account created!");
    setShow(false);
    console.log(name, email, password, balance);
  }  

  // Clear status when the form is cleared
  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
    setStatus("");
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card
        bgcolor="secondary"
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              <img
                src="Bank_logo.png"
                className="img-fluid"
                alt="Responsive image"
              ></img>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <br />
              Email
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-dark"
                onClick={handleCreate}
                disabled={!name || !email || !password} // Disable button if any of the input fields is empty (name, email, or password)
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Success!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>
                Add Another Account
              </button>
            </>
          )
        }
      />
    </div>
  );
}
