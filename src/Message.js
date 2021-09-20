import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ userName, message}, ref) => {
    const isUser = userName === message.userName;
    return (
        <div ref={ref} className={`message ${isUser && 'msg__user'}`}>
            <Card className={isUser ? 'message__userCard' : 'message__userGuest'}>
                <CardContent>
                    <Typography color='white' variant='h5' component='h2'>
                       {!isUser && `${message.userName} : `}  {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;
