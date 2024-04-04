import { rerenderEntireTree } from "../../rerender"

export type postType = {
    id: number
    message: string | undefined
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
        posts: postType[]
    }
    dialogsPage: {
        dialogs: dialogType[]
        messages: messageType[]
    }
}

export type AppPropsType = {
    state: stateType
    addPost: (message: string) => void
}

export const state: stateType = {
    profilePage: {
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
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'I am gote it' },
            { id: 3, message: 'What ara you doing ?' },
        ]
    }
}

export const addPost = (message: string) => {
    const newPost: postType = {
        id: new Date().getTime(), message, likes: 0
    }
    state.profilePage.posts.push(newPost);
    console.debug(state.profilePage.posts);
    rerenderEntireTree(state)
}