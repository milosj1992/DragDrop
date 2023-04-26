interface DragItem {
    indexStart: number | null;
}

interface UserInfoState {
    dragItem: DragItem;
}

interface SetDragItemStartAction {
    type: "SET_DITEM_START";
    payload: {
        dragItemStart: DragItem;
    };
}

type UserInfoAction = SetDragItemStartAction;

const initialState: UserInfoState = {
    dragItem: {
        indexStart: null
    }
};

const userInfoReducer = (
    state: UserInfoState = initialState,
    action: UserInfoAction
): UserInfoState => {
    switch (action.type) {
        case "SET_DITEM_START":
            return { ...state, dragItem: action.payload.dragItemStart };
        default:
            return state;
    }
};

export default userInfoReducer;
