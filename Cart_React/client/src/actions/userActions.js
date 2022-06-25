import axios from "axios";
import { userActions } from "../reducers/userReducer";

export const loginUser = (payload) => async (dispatch) => {
  dispatch(userActions.setLoading(true));

  try {
    const { data } = await axios.post(
      "http://localhost:3001/auth/login",
      payload
    );

    dispatch(userActions.login(data));
    dispatch(userActions.setLoading(false));

    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(
      userActions.setError({
        message: error.response.data.message,
        statusCode: error.response.status,
      })
    );
    dispatch(userActions.setLoading(false));
  }
};

export const registerUser = (payload) => async (dispatch) => {
  dispatch(userActions.setLoading(true));

  try {
    const { data } = await axios.post(
      "http://localhost:3001/auth/register",
      payload
    );

    dispatch(userActions.login(data));
    dispatch(userActions.setLoading(false));

    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(
      userActions.setError({
        message: error.response.data.message,
        statusCode: error.response.status,
      })
    );
    dispatch(userActions.setLoading(false));
  }
};
