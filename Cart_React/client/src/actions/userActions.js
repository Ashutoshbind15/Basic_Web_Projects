import axios from "axios";
import { userActions } from "../reducers/userReducer";

export const loginUser = (payload) => async (dispatch) => {
  dispatch(userActions.setLoading(true));

  try {
    const { data } = await axios.post(
      "https://ecom-backend1.herokuapp.com/users/login",
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

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(userActions.logout());
};

export const registerUser = (payload) => async (dispatch) => {
  dispatch(userActions.setLoading(true));

  try {
    const { data } = await axios.post(
      "https://ecom-backend1.herokuapp.com/users/register",
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
