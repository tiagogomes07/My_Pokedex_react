import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import MyButton from '../myButton';

export default class TableStyled extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return <TableContainer component={Paper}>
            <Table  size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                <TableCell align="left">Detail</TableCell>
                <TableCell align="left">Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                this.props.list.map((row) => (
                  <TableRow key={row.name} >
                    <TableCell component="th" scope="row">
                        <a onMouseOver={ () => {this.props.getPokemonDetails(row.name)} }
                        > 
                            <MyButton  name={row.name} textButton={row.name}  />
                        </a>
                    </TableCell>
                   <TableCell>{row.name}</TableCell>                           
                </TableRow>))
                }
            </TableBody>
            </Table>
        </TableContainer>;
    }
}