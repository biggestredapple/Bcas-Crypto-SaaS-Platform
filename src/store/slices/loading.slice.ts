import { createSlice } from "@reduxjs/toolkit";

type LoadingState = {
	status: boolean[];
};

const initialState: LoadingState = {
	status: [],
};

const loadingSlice = createSlice({
	name: "loading",
	initialState: initialState,
	reducers: {
		setLoading(state: LoadingState) {
			state.status.push(true);
		},
		finishLoading(state: LoadingState) {
			state.status.pop();
		},
	},
});

export const loadingActions = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
