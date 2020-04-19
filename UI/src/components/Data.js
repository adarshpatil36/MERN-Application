import React from 'react';
import DataTable from 'react-data-table-component';

class Data extends React.PureComponent {
   constructor(props){
       super(props);
       this.state={visible:false,
    data: null};
   }
    columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
        width: '20%',
        fontSize: '20%',
    },{
        name: 'Year',
        selector: 'year',
        sortable: true,
        width: '8%',
    },
     {
        name: 'Attacker King',
        selector: 'attacker_king',
        sortable: true,
        width: '15%',
        right: true,
    },
    {
        name: 'Defender King',
        selector: 'defender_king',
        sortable: true,
        width: '15%',
        right: true,
    },{
        name: 'Battle Type',
        selector: 'battle_type',
        sortable: true,
        width: '15%',
        right: true,
    },{
        name: 'Location',
        selector: 'location',
        sortable: true,
        width: '20%',
        right: true,
    }
    ];

    render(){
        const Data= this.props.data;
        return(
            Data &&
        <DataTable
            columns={this.columns}
            data={Data}
            responsive={true}
            highlightOnHover={true}
            pointerOnHover={true}
            striped={true}
            overflowY={true}
            overflowYOffset={true}
            // expandableRows={true}
            // expandableRowsComponent={<ExpanableComponent MessagePopUp={this.MessagePopUp}/>}
            paginationDefaultPage={true}
            noHeader={false}
        />
        )
    }
}

export default Data;