import { VisibilityFilters } from "../Actions/actions";

export const todos = (state = [], action) => {
    switch (action.type) {
      case VisibilityFilters.SHOW_ALL:
        return ['wow'];
      default:
        return state;
    }
  }