export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
  SET_TODO_LIMIT = "SET_TODO_LIMIT"
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccesAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodoFetch {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction = FetchTodoAction | FetchTodoErrorAction | FetchTodoSuccesAction | SetTodoFetch