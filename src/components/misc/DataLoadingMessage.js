import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const DataLoadingMessage = (props) => {
    if(props.isDataLoading){
        return (
            <Message icon>
                <Icon name='circle notched' loading />
                <Message.Content>
                <Message.Header>Just one second</Message.Header>
                    {props.content}
                </Message.Content>
            </Message>
        )
    } 
    
    if (!props.isDataLoading && props.isDismissSuccessMessage) {
        return (
            <Message
                compact
                success
                onDismiss={props.updateDismissSuccessMessage}
                header='Success'
                content={props.content}
            />
        )
    }

    return null;

}

export default DataLoadingMessage
