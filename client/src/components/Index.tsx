import { Link } from "react-router-dom"
const index = () => {
  return (
    <div>  
        <h1>hello this is the main page of the website</h1>
        <div style={{display: 'flex', gap: '55px', justifyContent: 'center'}}>
          <Link to='/login'>login</Link>
          <Link to='/register'>Register</Link>
        </div>
      </div>
  )
}
export default index