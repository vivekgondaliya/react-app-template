import React from 'react';
import { Header } from 'semantic-ui-react';
import MainTable from './../table/MainTable';

class Home extends React.Component {
  state = {}

  render() { 
    return  (
      <div>
        <Header as='h1' color='green'>
          Home Component
        </Header>
        <MainTable />
      </div>	
    )
  }
}
export default Home