function NavBar() {
    // Function to get the current path
    function getCurrentPath() {
      return window.location.hash.substr(1);
    }
  
    // Function to add an 'active' class to the active link
    function isActive(link) {
      return link === getCurrentPath() ? 'active' : '';
    }
  
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#/">BadBank</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className={`nav-link ${isActive('#/')}`} href="#/" title="Home">Home</a>
                <a className={`nav-link ${isActive('#/createcccount/')}`} href="#/createaccount/" title="Create a user account">Create Account</a>
                <a className={`nav-link ${isActive('#/deposit/')}`} href="#/deposit/" title="Deposit money in your account">Deposit</a>
                <a className={`nav-link ${isActive('#/withdraw/')}`} href="#/withdraw/" title="Withdraw money from your account">Withdraw</a>
                <a className={`nav-link ${isActive('#/alldata/')}`} href="#/alldata/" title="All Data">All Data</a>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
  