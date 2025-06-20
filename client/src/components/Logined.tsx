import { Link } from "react-router-dom"
import Login from "./Login"
const Logined = () => {
  const { email, password } = Login;
  return (
    <>
      <div>Welcome back bro</div>
      <div>
        <Link to='/'>Back To Home</Link>
      </div>
    </>
  )
}
export default Logined