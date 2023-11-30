export const addCartq = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

export const deleteCartq = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}