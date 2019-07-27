import $ from 'jquery';
export const addTodo = board => ({
  type: VisibilityFilters.SHOW_ALL,
  board
})

export const getBoard = () => {
    return dispatch => {
        $.ajax({
            url: 'http://google.com',
            success() {
                console.log('success');
            },
            error() {
                console.log('error');
            }
        })
    }
};


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
}