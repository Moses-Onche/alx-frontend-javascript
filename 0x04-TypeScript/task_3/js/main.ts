import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Joseph',
    lastName: 'Olakunle',
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {age: 23, ...row};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
