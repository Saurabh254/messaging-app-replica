export interface MainBodyProps{
    bodyData: {
        id: number,
        messageText: string,
        at: Date,
        type: 'sender'  | 'receiver',
    },
    messageDivData: {
        messageText: string,
        at: Date,
        type: 'right'  | 'left',
    },
    messagesData:{
        id: number,
        messageText: string,
        at: Date,
        type: 'right' | 'left',
     }[],

}