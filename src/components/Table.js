import List from './List'
import { Table, ListGroup } from 'react-bootstrap'

const TableList = () => {
  return (
    <div className='table'>
      <ListGroup>
        <ListGroup.Item variant='light'>List Orders</ListGroup.Item>
      </ListGroup>
      <Table responsive>
        <tr>
          <th>Order ID</th>
          <th>Billing Name</th>
          <th>Order Total</th>
          <th>Order Status</th>
          <th>Actions</th>
        </tr>
        <List />
      </Table>
    </div>
  )
}

export default TableList
