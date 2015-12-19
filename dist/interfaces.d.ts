/** Created by ge on 12/6/15. */
export interface Action {
    type: string;
}
export interface Thunk<TState> {
    (): Action | void;
}
export interface Hash<TS> {
    [key: string]: TS;
}
export interface Reducer {
    <TState>(state: TState, action: Action, callback?: (state: TState) => void): TState;
}
