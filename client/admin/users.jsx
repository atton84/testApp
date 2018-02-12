import React, {Component} from "react";
import {AppBar, IconButton, Drawer, MenuItem, TextField, AutoComplete} from "material-ui";
//import FontIcon from 'material-ui/FontIcon';
import {withRouter} from "react-router-dom";
import axios from "axios";

import {
    SortingState, SelectionState, FilteringState, PagingState, GroupingState,
    IntegratedFiltering, IntegratedGrouping, IntegratedPaging, IntegratedSorting, IntegratedSelection,
    CustomPaging,
} from '@devexpress/dx-react-grid';

import {
    Grid,
    Table, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow,
    PagingPanel, GroupingPanel, DragDropProvider, TableColumnReordering, Toolbar,
    TableColumnVisibility, ColumnChooser,
} from '@devexpress/dx-react-grid-material-ui';
//import FontIcon from 'material-ui/FontIcon';
/*import axios from "axios";
import {Redirect} from "react-router-dom";*/

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            filters:{},
            sorting: [],
            totalCount: 0,
            pageSize: 2,
            currentPage: 0,
            loading: true,
        };
        this.changeSorting = sorting => {
            let ret = {};
            ret[sorting[0].columnName]=sorting[0].direction;
            this.getUsers({sorting:ret});
        };

        this.changeFilter = filter => {
            let ret = {};
            filter.forEach(el=>{
                if(el.value)
                    ret[el.columnName] = el.value;
            });
            this.getUsers({filters:ret});
        };

        this.changeCurrentPage = page => {
            /*let ret = {};
            filter.forEach(el=>{
                if(el.value)
                    ret[el.columnName] = el.value;
            });*/
            console.log(page);
            this.getUsers({limit:{skip:(page*this.state.pageSize),limit:this.state.pageSize},currentPage:page});
        };
    }

    getUsers(options){
        options=options||{sorting:this.state.sorting,filters:this.state.filters};
        axios.post("/admin/users",options)
            .then(res=>{
                this.setState({rows:res.data.rows,totalCount:res.data.total,currentPage:this.state.currentPage});
            },error=>{
                console.log(error);
            });
    }


    componentDidMount(){
        return this.getUsers();
    }


   /* handleUpdateInput(fieldname, value){
        let filters=this.state.filters||{};
        if(value)
            filters[fieldname] = value;
        else
            delete filters[fieldname];

        this.setState({filters:filters});

        axios.post("/admin/users",{filters:filters})
            .then(res=>{
                this.setState({users:res.data});
            },error=>{
                console.log(error);
            });
    }*/

    render(){
        const {
            rows, columns, pageSize, currentPage, totalCount, loading,
            } = this.state;


        console.log(this.state);

        return(
            <Grid
                rows={rows}
                columns={[
                  { name: '_id', title: 'ID' },
                  { name: 'username', title: 'Name' },
                  { name: 'password', title: 'Password' },
                ]}>
                <FilteringState
                    defaultFilters={[
                    { columnName: '_id', value: '' },
                    { columnName: 'username', value: '' },
                    { columnName: 'password', value: '' }]}
                    onFiltersChange={this.changeFilter}
                />
                <SortingState
                    defaultSorting={[
                      { columnName: '_id', direction: 'asc' },
                      { columnName: 'username', direction: 'asc' },
                      { columnName: 'password', direction: 'asc' },
                    ]}
                    onSortingChange={this.changeSorting}
                />
                <PagingState
                    currentPage={currentPage}
                    onCurrentPageChange={this.changeCurrentPage}
                    pageSize={pageSize}
                />
                <CustomPaging
                    totalCount={totalCount}
                />
                <Table />
                <TableHeaderRow showSortingControls />
                <TableFilterRow />
                <PagingPanel />
            </Grid>
        );

    };
}

export default withRouter(Users);