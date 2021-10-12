import { makeStyles } from '@material-ui/core';
import {
  GridColumns,
  DataGrid,
  GridPageChangeParams,
  GridRowsProp,
  GridSortModelParams,
} from '@material-ui/data-grid';
import React from 'react';

interface IProps {
  columns: GridColumns,
  rows: GridRowsProp,
  page?: number,
  pageSize?: number,
  rowCount: number,
  orderBy: string,
  sort: 'asc' | 'desc',
  onChange: (params: advancedFilterModels.baseFilter) => any,
  disableColumnMenu?: boolean,
}

const useStyles = makeStyles({
  root: {
    colCell: {
      flex: 1,
      minWidth: "1px !important",
      maxWidth: "none !important"
    },
    viewport: {
      "& .rendering-zone": {
        width: "initial !important",
        maxWidth: "initial !important"
      }
    },
    row: {
      width: "100% !important"
    },
    colCellWrapper: {
      display: "flex"
    },
    cell: {
      flex: 1,
      minWidth: "1px !important",
      maxWidth: "none !important",
      "&:last-of-type": {
        minWidth: "0 !important",
        flex: 0
      }
    }
  },
});

const DataTable: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();

  const onChangeSort = (sortModelParams: GridSortModelParams) => {
    const baseFilter: advancedFilterModels.baseFilter = {
      orderBy: sortModelParams.sortModel[0].field,
      page: props.page as number,
      pageSize: props.pageSize as number,
      sort: sortModelParams.sortModel[0].sort === 'asc' ? 'asc' : 'desc',
    };

    if (baseFilter.sort !== props.sort || baseFilter.orderBy !== props.orderBy) {
      props.onChange(baseFilter);
    }
  };

  const onPage = (pageChangeParams: GridPageChangeParams) => {
    if (pageChangeParams.pageSize === 100) { return; }

    const baseFilter: advancedFilterModels.baseFilter = {
      orderBy: props.orderBy,
      page: pageChangeParams.page,
      pageSize: pageChangeParams.pageSize,
      sort: props.sort,
    };

    if (baseFilter.page !== props.page || baseFilter.pageSize !== props.pageSize) {
      props.onChange(baseFilter);
    }
  };

  return (
    <div className="datatable">
      <DataGrid
        className={classes.root}
        paginationMode="server"
        sortingMode="server"

        rows={props.rows}
        columns={props.columns}

        pagination
        pageSize={props.pageSize}
        rowsPerPageOptions={[10, 25, 50]}
        rowCount={props.rowCount}

        disableMultipleColumnsSorting={true}

        sortModel={[{
          field: props.orderBy,
          sort: props.sort
        }]}

        onPageChange={onPage}
        onSortModelChange={onChangeSort}

        disableExtendRowFullWidth={true}
        disableColumnMenu={props.disableColumnMenu}
      />
    </div>
  );

};

export default DataTable;
