import React from 'react'
import { Message} from 'semantic-ui-react'

//TODO: this message should disappear after 2 seconds
//TODO: this should handle fetch success or fail
const NotificationMessage = (props) => {
    return (
        <Message
            compact
            header='TODO'
            color='yellow'
            content='this is pending development'
        />
    )
}


export default NotificationMessage
