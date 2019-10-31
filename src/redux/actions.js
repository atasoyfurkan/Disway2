export const ADD_NODE = "ADD_NODE"
export const REMOVE_NODE = "REMOVE_NODE"
export const POP_NODE = "POP_NODE"
export const RESET_NODES = "RESET_NODES"
export const EDIT_SEARCH = "EDIT_SEARCH"

export const addNode = node=>({
    type: ADD_NODE,
    payload: node
})

export const removeNode = id=>({
    type: REMOVE_NODE,
    payload : id
})

export const resetNodes = _=>({
    type: RESET_NODES,
    payload:null
})
export const popNode = _=>({
    type:POP_NODE,
    payload: null
})
export const editSearch = edit=>({
    type:EDIT_SEARCH,
    payload:edit
})