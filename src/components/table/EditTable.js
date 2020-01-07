import React, { Component } from "react";
import { Table, Input } from "semantic-ui-react";

class EditTable extends Component {
  render() {
    const { data } = this.props;
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Phones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(data => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>
                    <Input value={data.name} onChange={(e) => this.props.handleDataChange(data, 'name', e)}/>
                </Table.Cell>
                <Table.Cell>
                    <Input value={data.username} onChange={(e) => this.props.handleDataChange(data, 'username', e)}/>
                </Table.Cell>
                <Table.Cell>
                    <Input value={data.email} onChange={(e) => this.props.handleDataChange(data, 'email', e)}/>
                </Table.Cell>
                <Table.Cell>
                    <Input value={data.phone} onChange={(e) => this.props.handleDataChange(data, 'phone', e)}/>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default EditTable;
