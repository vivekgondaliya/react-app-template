
import React, { Component } from 'react'
import { Form, Container, Grid } from 'semantic-ui-react'


const periodMonthOptions = [
    { key: 'nov', text: 'November', value: 'november' },
    { key: 'dec', text: 'December', value: 'december' },
    { key: 'jan', text: 'January', value: 'january' },
  ]

const periodYearOptions = [
    { key: '2020', text: '2020', value: '2020' },
    { key: '2019', text: '2019', value: '2019' },
    { key: '2018', text: '2018', value: '2018' },
]
class FormComponent extends Component {
  state = { name: '', email: '', emailSubject: '', pdfChecked: true, excelChecked: true, emailBody: '' }

  handleChange = (e, { name, value }) => {
        if (name === "pdfChecked") {
            this.setState({ pdfChecked: !this.state.pdfChecked });
            return;
        }
        if (name === "excelChecked") {
            this.setState({ excelChecked: !this.state.excelChecked });
            return;
        }
        this.setState({ [name]: value }) 
    }

  handleSubmit = () => {
    const { name, email, emailSubject, emailBody } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
  }

  render() {
    const { name, email, emailSubject,  emailBody, pdfChecked, excelChecked, submittedName, submittedEmail } = this.state

    return (
      <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <label>Reporting Period : </label>     
                <Form.Select
                    fluid
                    label='Period Month'
                    options={periodMonthOptions}
                    placeholder='Month'
                    width={6}
                />
                <Form.Select
                    fluid
                    label='Period Year'
                    options={periodYearOptions}
                    placeholder='Year'
                    width={6}
                />
            </Form.Group>
            <Form.Group inline>
                <label>Report Types : </label>
                <Form.Checkbox label='Main' />
                <Form.Checkbox label='Expanded' />
                <Form.Checkbox label='Grandfather' />    
            </Form.Group>
            <Form.Group inline>
                <label>Report Output : </label>
                <Form.Checkbox label='PDF' name='pdfChecked' checked={pdfChecked} 
                onChange={this.handleChange}  />
                <Form.Checkbox label='Excel' name='excelChecked' checked={excelChecked} 
                onChange={this.handleChange}  />  
            </Form.Group>
            <Form.Input 
                fluid 
                label='Email Subject' 
                placeholder='Subject' 
                name='emailSubject'
                value={emailSubject}
                onChange={this.handleChange}    
            />
            <Form.TextArea 
                multiline={true}
                label='Email Body' 
                placeholder='Message for email reciepients...'
                name='emailBody'
                value={emailBody}
                onChange={this.handleChange}    
            />


          <Form.Group>
            <Form.Input
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Button content='Send Reports' primary/>
          </Form.Group>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, email, emailSubject, emailBody, pdfChecked, excelChecked }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
      </Container>
    )
  }
}

export default FormComponent;