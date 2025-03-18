// Types of Objects

export interface IItemsProprtyes {
    publicationID?: string,
    userName?: string,
    userID?: string, 
    title?: string, 
    description?: string,
    text?: TypeListInput[], 
    categoryName?: string, 
    category?: any;
    date?: string,
    pubID?: string;
}

export type TypeComments = {
    userName?: string;
    text?: string;
    publicationID?: string;
    commentID?: string;
    userID?: string;
    commID?: string;
}

export type TypePostComment = {
    userName?: string;
    text?: string;
    publicationID?: string;
    userID?: string;
}

export type TypePostPublication = {
    userName: string;
    userID: string;
    publicationID: string;

    title: string,
    description: string;
    text: TypeListInput[];

    categoryName: string;
    category?: {};

    date: string;
}

export type TypeVote = {
    name: string;
    countVotes: string;
    id: string;
}

export type TypeUserInfo = {
    name: string
    userID: string
}

export type TypeListInput = {
    type?: string;
    data?: string;
    key?: number
}