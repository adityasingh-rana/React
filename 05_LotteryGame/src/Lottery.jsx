import Ticket from "./Ticket";
import { useState } from 'react';
import { genTicket, sum } from './helper';

export default function Lottery({n = 3, winCondition}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  }
  return (
      <div >
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}></Ticket>
        <button onClick={buyTicket}>Buy Ticket</button>
        <h3>{isWinning && "Congratulations, You Won!"}</h3>
      </div>
  );
}