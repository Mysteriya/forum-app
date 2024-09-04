// Types of Objects

export interface IItemsProprtyes {
    title?: string,
    description?: string,
    text?: string;
    articleID?: string;
    comments?: TypeComments[];
}

export type TypeComments = {
    name?: string;
    text?: string;
    articleID?: string;
    commentID?: string;
    userID?: string;
}

export type TypePostComment = {
    name?: string;
    text?: string;
    articleID?: string;
    userID?: string;
}

export type TypePostArticles = {
    userName: string;
    userID: string;

    title: string,
    description: string;
    text: string;

    category: string;

    date: string;



}

