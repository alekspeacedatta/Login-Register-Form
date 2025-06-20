import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const res = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
    
        if (res.ok) {
          navigate('/registered');
        } else {
          alert('❌ Registration failed');
        }
      };

  return (
    <div>
        <h1>hi, this is the register page</h1>
        <form onSubmit={handleSubmit}>
            <section>
                <label >email: </label>
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="enter your email"/>
            </section>
            <section>
                <label >password: </label>
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="enter your passwrod"/>
            </section>
            <button type="submit">register</button>
        </form>
        <div className="home">
            <Link to='/'>← back</Link>
        </div>
    </div>
  )
}
export default Register