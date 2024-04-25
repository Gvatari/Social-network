export let store: storeType = {
    _state: {
        profilePage: {
            newPostMessage: '',
            posts: [
                { id: 1, message: 'Hi, we are you ?', likes: 3 },
                { id: 2, message: 'I am happiness', likes: 1 },
            ]
        },
        dialogsPage: {
            dialogs: [
                { id: 1, title: 'Sveta' },
                { id: 2, title: 'Igor' },
                { id: 3, title: 'Alexey' },
                { id: 4, title: 'Sasha' },
                { id: 5, title: 'Pasha' },
            ],
            newDilogsMessage: '',
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'I am gote it' },
                { id: 3, message: 'What ara you doing ?' },
            ]
        }
    },
    getState() {
        return this._state
    },
    addPost() {
        const newPost: postType = {
            id: new Date().getTime(), message: this._state.profilePage.newPostMessage, likes: 0
        }
        
        this._state.profilePage.posts.push(newPost);
        this.newPostMessageEvent('')
    },
    newPostMessageEvent(message: string) {
        this._state.profilePage.newPostMessage = message
        this._callSubscriber(this._state)
    },
    addMessage() {
        const newMessage: messageType = {
            id: new Date().getTime(), message: this._state.dialogsPage.newDilogsMessage
        }
    
        this._state.dialogsPage.messages.push(newMessage);
        this.newDilogsMessageEvent('')
    },
    newDilogsMessageEvent(message: string) {
        this._state.dialogsPage.newDilogsMessage = message
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer
    },
    _callSubscriber(state: stateType) {
        console.log('state changed')
    }
}

export type storeType = {
    _state: stateType
    addPost: () => void
    newPostMessageEvent: (message: string) => void
    addMessage: () => void
    newDilogsMessageEvent: (message: string) => void
    subscribe: (observer: (state: stateType) => void) => void
    _callSubscriber: (state: stateType) => void
    getState: () => stateType
}

export type postType = {
    id: number
    message: string
    likes: number
}

export type dialogType = {
    id: number
    title: string
}

export type messageType = {
    id: number
    message: string
}

export type stateType = {
    profilePage: {
        newPostMessage: string
        posts: postType[]
    }
    dialogsPage: {
        newDilogsMessage: string
        dialogs: dialogType[]
        messages: messageType[]
    }
}

export type AppPropsType = {
    newPostMessage: string
    newDilogsMessage: string
    state: stateType
    addPost: () => void
    newPostMessageEvent: (message: string) => void
    newDilogsMessageEvent: (message: string) => void
    addMessage: () => void
}