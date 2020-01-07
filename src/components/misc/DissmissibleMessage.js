import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

//this message disappears when user clicks 'x'
class DissmissibleMessage extends Component {
    state = { visible: true }
  
    handleDismiss = () => {
      this.setState({ visible: false })
    }
  
    render() {
        const {header, content, color, isCompact} = this.props; 

        if (this.state.visible) {
            //isCompact : true, ie message does not take full container width
            if(isCompact){
                return (
                    <Message
                        onDismiss={this.handleDismiss}
                        header={header}
                        content={content}
                        color={color}
                        compact
                    />
                )
            }
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

DissmissibleMessage.defaultProps = {
    header: "default - No header",
    content: "default - No Content"
}
  
export default DissmissibleMessage;