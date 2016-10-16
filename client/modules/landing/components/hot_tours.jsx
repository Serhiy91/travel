import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';

export default class HotTours extends React.Component {
  render() {
    return (
      <div className="hot-tours">
        <h3 className="hot-tours-title">Гарячі Тури</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <Divider />
      </div>
    );
  }
}
