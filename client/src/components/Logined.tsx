import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const Logined = () => {
  const location = useLocation();
  const email = location.state?.email;
  return (
    <>
      <div>Welcome back {email} bro</div>
      <div>
        <Link to='/'>Back To Home</Link>
      </div>
    </>
  )
}
export default Logined