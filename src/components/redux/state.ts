import { message } from "antd"
// import { rerenderEntireTree } from "../../rerender"

let rerenderEntireTree = (state: stateType) => {}

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

export const state: stateType = {
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
}

export const addPost = () => {
    const newPost: postType = {
        id: new Date().getTime(), message: state.profilePage.newPostMessage, likes: 0
    }
    
    state.profilePage.posts.push(newPost);
    newPostMessageEvent('')
}

export const addMessage = () => {
    const newMessage: messageType = {
        id: new Date().getTime(), message: state.dialogsPage.newDilogsMessage
    }

    state.dialogsPage.messages.push(newMessage);
    newDilogsMessageEvent('')
}
 
export const newPostMessageEvent = (message: string) => {
    state.profilePage.newPostMessage = message
    rerenderEntireTree(state)
}

export const newDilogsMessageEvent = (message: string) => {
    state.dialogsPage.newDilogsMessage = message
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: stateType) => void) => {
    rerenderEntireTree = observer
}