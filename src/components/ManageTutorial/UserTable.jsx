import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './UserTable.css'
import {Select,Input } from 'antd'
const { Option } = Select;
const StyledTableCell = withStyles((theme) => ({
  head: {
    
    color:"#FF9300",
    fontSize: 16,
  },
  body: {
    fontSize: 14,
     color:"#fff",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
     
    },
  },
}))(TableRow);
function handleChange (value) {
  console.log(`selected ${value}`);
}
function createData(sno,deposit, withdraw, join, win, note,date) {
  return {sno,deposit, withdraw, join, win, note,date};
}

const rows = [
   createData(1,100, 0.00, 1000, 2000,"Add money to join wallet","04/05/2020 13:00"),
  createData(2,500, 0.00, 5000, 10000,"Add money to join wallet","04/05/2020 13:00"),
 
];
function createsecondData(sno,match,paid,won,date) {
  return {sno,match,paid,won,date};
}

const secondrows = [
   createsecondData(1,"Fifa Mania", 10, 100,"04/05/2020 13:00"),
  createsecondData(2,"Squad Fifa", 10, 200, "07/06/2020 12:54"),
  createsecondData(3,"Fifa Magic", 10, 0,"05/08/2020 12:59"),
 
];
function createthirdData(sno,name,earning,status,date) {
  return {sno,name,earning,status,date};
}

const thirdrows = [
   createthirdData(1,"Melon", 1000, "Active","04/04/2020 13:00"),
  createthirdData(2,"Abdul Khadhir", 500, "Not Active", "07/05/2020 14:54"),
  createthirdData(3,"Ragul", 1500, "Active","05/07/2020 13:59"),
 
];
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

const { Search } = Input;
  return (
  <div className="user_table_cont">
        
       <div className="border_apply"></div>
       <div className="side_head">Wallet History</div>
       <div className="show_entry_par">
       <div className="show_entry">
       <div>Show</div>
        <Select defaultValue="5"  onChange={handleChange} style={{width:"70px"}} className="select_head">
       <Option value="5">5</Option>
        <Option value="10">10</Option>
         <Option value="20">20</Option>
    </Select>
     <div>Entries</div>
    
     </div>
      <div><Search placeholder="Search " style={{width:"180px"}} className="search_button" onSearch={value => console.log(value)} enterButton /></div>
     </div>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No.</StyledTableCell>
            <StyledTableCell align="right">Deposit</StyledTableCell>
            <StyledTableCell align="right">Withdraw</StyledTableCell>
            <StyledTableCell align="right">Join Money</StyledTableCell>
            <StyledTableCell align="right">Win Money</StyledTableCell>
             <StyledTableCell align="right">Note</StyledTableCell>
             <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.sno}</StyledTableCell>
              <StyledTableCell align="right">{row.deposit}</StyledTableCell>
              <StyledTableCell align="right">{row.withdraw}</StyledTableCell>
              <StyledTableCell align="right">{row.join}</StyledTableCell>
              <StyledTableCell align="right">{row.win}</StyledTableCell>
               <StyledTableCell align="right">{row.note}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
        <div className="border_apply"></div>
       <div className="side_head">My Statistics</div>
       <div className="show_entry_par">
       <div className="show_entry">
       <div>Show</div>
        <Select defaultValue="5"  onChange={handleChange} style={{width:"70px"}} className="select_head">
       <Option value="5">5</Option>
        <Option value="10">10</Option>
         <Option value="20">20</Option>
    </Select>
     <div>Entries</div>
    
     </div>
      <div><Search placeholder="Search " style={{width:"180px"}} className="search_button" onSearch={value => console.log(value)} enterButton /></div>
     </div>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No.</StyledTableCell>
            <StyledTableCell align="right">Match Info</StyledTableCell>
            <StyledTableCell align="right">Paid</StyledTableCell>
            <StyledTableCell align="right">Won</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {secondrows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.sno}</StyledTableCell>
              <StyledTableCell align="right">{row.match}</StyledTableCell>
              <StyledTableCell align="right">{row.paid}</StyledTableCell>
              <StyledTableCell align="right">{row.won}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <div className="border_apply"></div>
       <div className="side_head">Referral</div>
       <div className="show_entry_par">
       <div className="show_entry">
       <div>Show</div>
        <Select defaultValue="5"  onChange={handleChange} style={{width:"70px"}} className="select_head">
       <Option value="5">5</Option>
        <Option value="10">10</Option>
         <Option value="20">20</Option>
    </Select>
     <div>Entries</div>
    
     </div>
      <div><Search placeholder="Search " style={{width:"180px"}} className="search_button" onSearch={value => console.log(value)} enterButton /></div>
     </div>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No.</StyledTableCell>
            <StyledTableCell align="right">Player Name</StyledTableCell>
            <StyledTableCell align="right">Earning</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {thirdrows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.sno}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.earning}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
           
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    
    </div>
  );
}
