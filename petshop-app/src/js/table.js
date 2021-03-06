/* Light Theme stylesheet
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React from 'react';
import { Input } from 'react-materialize';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import EditIcon from 'material-ui/svg-icons/image/edit';
import TrashIcon from 'material-ui/svg-icons/action/delete';
import CheckIcon from 'material-ui/svg-icons/navigation/check';

import '../css/general.css'
import '../css/table.css'

const row = (x, i, header, handleRemove, startEditing, editIdx, handleChange, stopEditing) => {
  const currentlyEditing = editIdx === i;
  return (
    <TableRow key={`tr-${i}`} selectable={false} className='scroll-x'>
      {header.map((y, k) => (
        <TableRowColumn key={`trc-${k}`} className='table-col'>
          {currentlyEditing && y.editable ? (
            <Input
              name={y.prop}
              className='input box-shadow'
              label={y.name}
              onChange={e => handleChange(e, y.prop, i)}
              value={x[y.prop]}
              validate
              type={y.type}
            />
          ) : (
            x[y.prop]
          )}
        </TableRowColumn>
      ))}
      <TableRowColumn className='table-col'>
        {currentlyEditing ? (
          <CheckIcon className='text' onClick={() => stopEditing()} />
        ) : (
          <EditIcon onClick={() => startEditing(i)} />
        )}
      </TableRowColumn>
      <TableRowColumn className='table-col'>
        <TrashIcon onClick={() => handleRemove(i)} />
      </TableRowColumn>
    </TableRow>
  );
};

export default ({
  data,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing
}) => (
  <Table>
    <TableHeader>
      <TableRow>
        {header.map((x, i) => (
          <TableHeaderColumn key={`thc-${i}`} className='table-col fit-content'>{x.name}</TableHeaderColumn>
        ))}
        <TableHeaderColumn className='table-col fit-content'>Editar</TableHeaderColumn>
        <TableHeaderColumn className='table-col fit-content'>Excluir</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((x, i) =>
        row(
          x,
          i,
          header,
          handleRemove,
          startEditing,
          editIdx,
          handleChange,
          stopEditing
        )
      )}
    </TableBody>
  </Table>
);
