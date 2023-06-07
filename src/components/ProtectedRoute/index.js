import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtecteRoute = props => {
  if (Cookies.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtecteRoute
