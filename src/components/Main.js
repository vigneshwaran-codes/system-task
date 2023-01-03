import Table from './Table'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { IoNotifications } from 'react-icons/io5'

const Main = () => {
  return (
    <Router>
      <div className='content'>
        <div className='topbar'>
          <span><IoNotifications className='notification-icon' /><Badge bg='danger'>2</Badge></span>
          <h4 className='app-name'>App Test Store</h4>
        </div>
        <div>
          <ul className='links'>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='list'>List</Link></li>
          </ul>
        </div>
        <Table />
      </div>
    </Router>
  )
}

export default Main
