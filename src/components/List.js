import { useState } from 'react'
import orders from './Data'
import { Button, Badge } from 'react-bootstrap'

const List = () => {
  const [data, setData] = useState(orders)
  console.log(setData)

  return (
    <>
      {
        data.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.orderId}</td>
              <td>{el.name}</td>
              <td>{el.total}</td>
              <td><Badge style={{ color: el.color }} bg={el.bg}>{el.status}</Badge></td>
              <Button variant='danger' className='action-btn' size='sm'>Cancel</Button>
            </tr>
          )
        })
      }
    </>
  )
}

export default List
