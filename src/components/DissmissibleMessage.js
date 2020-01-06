import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class DissmissibleMessage extends Component {
    state = { visible: true }
  
    handleDismiss = () => {
      this.setState({ visible: false })
    }
  
    render() {
        const {header, content, color} = this.props; 

        if (this.state.visible) {
            return (
            <Message
                onDismiss={this.handleDismiss}
                header={header}
                content={content}
                color={color}
            />
            )
        }

        return null;
    }
  }
  
  export default DissmissibleMessage;