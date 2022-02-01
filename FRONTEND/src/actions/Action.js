export const Addnote = "addNote";
export const Delnote = "delNote";
export const Comments = "HandlingComments";
export const LikeDisLike = "setLDL";


export function addNote(newNote) {

    return {
        type: "addNote",
        newNote
    }
};


export function delNote(id) {
    return {
        type: "delNote",
        id
    }
};


export function HandlingComments(comentobj, id) {
    return {
        type: "HandlingComments",
        obj: comentobj,
        Id: id
    }
};


export function setLDL(id, op, value1, value2, boolean) {

    return {
        type: "setLDL",
        Id: id,
        operation: op,
        Lvalue: value1,
        DLvalue: value2,
        setLiked: boolean
    }
};