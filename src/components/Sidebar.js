import { Dropdown } from 'react-bootstrap'
import { MdStore, MdHome, MdSearch, MdKeyboardArrowLeft } from 'react-icons/md'
import { RxExternalLink, RxDoubleArrowLeft } from 'react-icons/rx'
const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <header>
        <div className='text header-text'>
          <p className='header-name'><span className='app-title'>BIG</span>COMMERCE <RxDoubleArrowLeft /></p>
        </div>
        <div className='menu-bar'>
          <div className='menu'>
            <ul className='menu-links'>
              <li className='nav-link'>
                <a href='#store'>
                  <i className='icon'><MdStore /></i>
                  <span className='text'>View Store <RxExternalLink /></span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='#home'>
                  <i className='icon'><MdHome /></i>
                  <span className='text'>Home</span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='#search'>
                  <i className='icon'><MdSearch /></i>
                  <span className='text'>Search</span>
                </a>
              </li>
            </ul>
            <Dropdown.Menu show className='dropdown'>
              <Dropdown.Header className='drop-hname'><MdKeyboardArrowLeft /> Apps</Dropdown.Header>
              <Dropdown.Item eventKey='2' className='drop-name'>Marketplace</Dropdown.Item>
              <Dropdown.Item eventKey='3' className='drop-name'>My Apps</Dropdown.Item>
              <Dropdown.Item eventKey='4' className='drop-name btn'><span className='drop-icon'>B</span> Laravel React App</Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </div>
      </header>
    </nav>
  )
}

export default Sidebar
