import Button from '@mui/material/Button';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function FilterBtns() {
  const storedValues = useContext(TodoContext);
  const {filterAll} = storedValues;
  const {filterCompleted} = storedValues;
  const {filterPending} = storedValues;
  const {crrState} = storedValues;

  return (
    <div className = "text-center">
      <Button
        onClick = {filterAll}
        variant= {crrState === "all" ? "contained" : "outlined"}
      >All</Button> &nbsp;
      <Button onClick = {filterCompleted}
        variant= {crrState === "completed" ? "contained" : "outlined"}
      >Completed</Button> &nbsp;
      <Button
        onClick = {filterPending}
        variant= {crrState === "pending" ? "contained" : "outlined"}
      >Pending</Button>
    </div>
  )
}

export default FilterBtns;
