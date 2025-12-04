import TicketNumber from "./TicketNumber"
import './Ticket.css';
export default function Ticket({ ticket }) {
  return (
    <>
      <div className="ticket">
      <p>Ticket</p>
      {ticket.map((num, idx) => (
         <TicketNumber key={idx} number={num}></TicketNumber>
       ))
       }
      </div>
    </>
  );
}