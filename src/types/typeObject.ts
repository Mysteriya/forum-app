// Types of Objects

export interface IItemsProprtyes {
    publicationID?: string,
    userName?: string,
    userID?: string, 
    title?: string, 
    description?: string,
    text?: string, 
    categoryName?: string, 
    category?: any;
    date?: string,
}

export type TypeComments = {
    userName?: string;
    text?: string;
    publicationID?: string;
    commentID?: string;
    userID?: string;
}

export type TypePostComment = {
    userName?: string;
    text?: string;
    publicationID?: string;
    userID?: string;
}

export type TypePostArticles = {
    userName: string;
    userID: string;
    publicationID: string;

    title: string,
    description: string;
    text: string;

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