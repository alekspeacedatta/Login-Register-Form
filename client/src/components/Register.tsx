const Register = () => {
  return (
    <div>
        <h1>hi, this is the register page</h1>
        <form action="/register" method="post">
            <section>
                <label >email: </label>
                <input type="text" name="email" placeholder="enter your email"/>
            </section>
            <section>
                <label >password: </label>
                <input type="password" name="password" placeholder="enter your passwrod"/>
            </section>
            <section>
                <label >password: </label>
                <input type="password" placeholder="re enter your password"/>
            </section>
            <button type="submit">register</button>
        </form>
        <div className="home">
            <a href="/"> ← back</a>
        </div>
    </div>
  )
}
export default Register