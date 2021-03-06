import React from 'react'
import { Header, Button } from 'semantic-ui-react';
import SampleTable from './Table';
import EditTable from './EditTable';
import DissmissibleMessage from './../misc/DissmissibleMessage';

class MainTable extends React.Component {
    state = {
        tableData: [
            {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                lat: "-37.3159",
                lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
            },
            {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            address: {
                street: "Victor Plains",
                suite: "Suite 879",
                city: "Wisokyburgh",
                zipcode: "90566-7771",
                geo: {
                lat: "-43.9509",
                lng: "-34.4618"
                }
            },
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: {
                name: "Deckow-Crist",
                catchPhrase: "Proactive didactic contingency",
                bs: "synergize scalable supply-chains"
            }
            },
            {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            address: {
                street: "Douglas Extension",
                suite: "Suite 847",
                city: "McKenziehaven",
                zipcode: "59590-4157",
                geo: {
                lat: "-68.6102",
                lng: "-47.0653"
                }
            },
            phone: "1-463-123-4447",
            website: "ramiro.info",
            company: {
                name: "Romaguera-Jacobson",
                catchPhrase: "Face to face bifurcated interface",
                bs: "e-enable strategic applications"
            }
            }
        ],
        isEdit: false,
        isDataLoading: false,
        isDataLoadingComplete: false
    }

    handleAddRow = () => {
        let tableData = this.state.tableData;

        const newRow = {
            id: tableData.length+1,
            name: "",
            username: "",
            email: "",
            phone: ""
        }
        tableData.push(newRow);
        this.setState({ tableData });
    }

    handleDeleteRow = (data) => {
        var tableData = this.state.tableData;
        const newTableData = tableData.filter((row) => row.id !== data.id);
        this.setState({ tableData : newTableData });
    }

    handleEditClick = () => {
        this.setState(prevState => ({
            isEdit: !prevState.isEdit
        }));
    }

    handleDoneEdit = () => {
        //TODO: if newRow data is empty then DO NOT add row
        this.setState(prevState => ({
            isEdit: !prevState.isEdit
        }));
    }

    handleDataChange = (data, dataType, event) => {
        const newState = this.state.tableData.map((item, i) => {
            if (item.id == data.id) {
                return {...item, [dataType]: event.target.value};
            }
            return item;
        });

        this.setState({
            tableData: newState
        });
    }

    handleSubmit = () => {
        this.setState({ isDataLoading : true, isDataLoadingComplete: false });
        console.log('<<<< SUBMITTED DATA >>>>', this.state.tableData);

        setTimeout(() => {
            this.setState({ isDataLoading : false, isDataLoadingComplete : true});
        }, 2000);
    }

    handleDataLoadingComplete = () => {
        this.setState({ isDataLoadingComplete : false });
    }


    render() {
        const table = this.state.isEdit ? 
                        <EditTable data={this.state.tableData} handleDataChange={this.handleDataChange} handleDeleteRow={this.handleDeleteRow}/> 
                            : <SampleTable data={this.state.tableData} />;

        const editButton = this.state.isEdit ? <div><Button content='Add Row' onClick={this.handleAddRow} /><Button content='Done' primary onClick={this.handleDoneEdit}/></div> : 
        <Button content='Edit' onClick={this.handleEditClick}/>;

        const submitButton = this.state.isEdit ? null : 
                                this.state.isDataLoading? <Button content='Loading' positive loading /> : <Button content='Submit' positive onClick={this.handleSubmit}/>;

        const submitSuccessMessage = this.state.isDataLoadingComplete ? <DissmissibleMessage 
                                        header='Success' 
                                        content='Successfully submitted your data. [check console log for confirmation]' 
                                        color='green' 
                                        isCompact={true}
                                    /> : null;
        
        return  (
            <div>
                <Header as='h2' color='orange'>
                    Table Title
                </Header>
                
                {table}

                <div>
                    {editButton}
                    {submitButton}
                </div>
                
                <div style={{marginTop: '10px'}}>
                    {submitSuccessMessage}
                </div>
            </div>
        )
    }
}

export default MainTable;