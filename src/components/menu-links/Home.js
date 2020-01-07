import React from 'react'
import {Header, Button} from 'semantic-ui-react'
import SampleTable from '../table/Table';
import EditTable from '../table/EditTable';
import DataLoadingMessage from '../misc/DataLoadingMessage';

class Home extends React.Component {
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
	isDismissSuccessMessage: false
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      isEdit: !prevState.isEdit
    }));
  }

  handleChange = (data, dataType, event) => {
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
    this.setState({ isDataLoading : true });
    console.log('<<<< SUBMITTED DATA >>>>', this.state.tableData);

    setTimeout(() => {
      this.setState({ isDataLoading : false, isDismissSuccessMessage : true});
    }, 2000);
  }

  updateDismissSuccessMessage = () => {
	  this.setState({ isDismissSuccessMessage : false });
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


  render() {
    const editButton = this.state.isEdit ? <div><Button content='Add Row' onClick={this.handleAddRow} /><Button content='Done' primary onClick={this.handleButtonClick}/></div> : 
    <Button content='Edit' onClick={this.handleButtonClick}/>;

    const submitButton = this.state.isEdit ? null: <Button content='Submit' positive onClick={this.handleSubmit}/>;

	  const messageContent = this.state.isDataLoading ? "We are submitting your data." : "Data submitted successfully (check console log for submitted data)";
    const submitStatusMessage = <DataLoadingMessage isDataLoading={this.state.isDataLoading} isDismissSuccessMessage={this.state.isDismissSuccessMessage} content={messageContent} updateDismissSuccessMessage={this.updateDismissSuccessMessage}/>;

    const table = this.state.isEdit ? <EditTable data={this.state.tableData} handleChange={this.handleChange} /> : <SampleTable data={this.state.tableData} />
    
    return  (
		<div>
			<Header as='h1' color='green'>
				Home
			</Header>
			
			{table}

			<div>
				{editButton}
				{submitButton}
			</div>
			
			<div style={{marginTop: '10px'}}>
				{submitStatusMessage}
			</div>
		</div>
    )
  }
}
export default Home