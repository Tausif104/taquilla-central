import { useState } from 'react'

const Ticket = ({ thumb }) => {
  const [ticketCount, setTicketCount] = useState(1)

  const handleIncr = (e) => {
    setTicketCount(ticketCount + 1)
  }

  const handleDec = () => {
    setTicketCount(ticketCount - 1)
  }

  return (
    <div className='ticket-item'>
      <div className='ticket-content'>
        <img src={thumb} alt='' />
        <div className='ticket-item-details'>
          <h4>Revelado a través del querido caminar abortivo</h4>
          <p>
            Su entrada al evento es su entrada a una experiencia inolvidable. Desde el momento en que ingrese al lugar, <b>permiso paterno</b>
          </p>
        </div>
      </div>
      <div className='ticket-item-price'>
        <p className='ticket-price'>
          €15.00 <span>(+ 0,00€ g.d.g.)</span>
        </p>
        <div className='ticket-count'>
          <button onClick={handleDec}>-</button>
          <input min='0' readOnly onChange={(e) => setTicketCount(e.target.value)} type='text' value={ticketCount} />
          <button onClick={handleIncr}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Ticket
