function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card
        bgcolor="secondary"
        header="BadBank Home"
        title="BadBank Home"
        body={
          <>
            <img
              src="Bank_logo.png"
              className="img-fluid"
              alt="Responsive image"
            ></img>
            <h5>Welcome to the Bank!</h5>
            <p>You can use this Bank for all your Banking Needs!</p>
          </>
        }
      />
    </div>
  );
}
