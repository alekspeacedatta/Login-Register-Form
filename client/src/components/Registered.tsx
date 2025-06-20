import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const Registered = () => {
  const location = useLocation();
  const email = location.state?.email;
  const password = location.state?.password
  return (
    <>
      <div>Registered</div>
      <ul>
        <li>
          mail: {email}
          <br />
          password: {password}
        </li>
      </ul>
      <div>
        <Link to='/'>Back To Home</Link>
      </div>
    </>
  )
}
export default Registered