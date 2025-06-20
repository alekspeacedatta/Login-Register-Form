const Login = () => {
  return (
    <div>
        <h1>hi, this is the login page</h1>
        <form action="/login" method="post">
            <section>
                <label>email:</label>
                <input type="text" name="email" placeholder="enter your email"/>
            </section>
            <section>
                <label >password:</label>
                <input type="password" name="password" placeholder="enter your passwrod"/>
            </section>
            <button type="submit" >login</button>
        </form>

        <div className="home">
            <a href="/"> ← back</a>
        </div>
    </div>
  )
}
export default Login