interface SetDragItemStartAction {
    type: "SET_DITEM_START";
    payload: {
        dragItemStart: number;
    };
}

export const dragStart = (index: number): SetDragItemStartAction => {
    try {
        return {
            type: "SET_DITEM_START",
            payload: {
                dragItemStart: index,
            },
        };
    } catch (error) {
        console.log("An error occurred while dragging:", error);
        throw error;
    }
};
