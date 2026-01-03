
import { useParams } from 'react-router-dom'

function User() {
  let {id} = useParams();
  return (
    <div className='text-center'>
      <h1>User: {id}</h1>
    </div>
  )
}

export default User;
