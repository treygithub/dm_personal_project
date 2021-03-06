import axios from "axios";

const initialState = {
  user: {},
  email: []
};

const GET_USER = "GET_USER";
const GET_SHIPPING_INFO = "GET_SHIPPING_INFO"
const ADD_SHIPPING_INFO = "ADD_SHIPPING_INFO";
const CONFIRMATION_EMAIL = "CONFIRMATION_EMAIL"

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/user")
  };
}

export function getShippingInfo() {
  return {
    type: GET_SHIPPING_INFO,
    payload: axios.get("/api/getShipInfo")
  }
}

export function addShippingInfo(
  firstname,
  lastname,
  phonenumber,
  email,
  streetaddress,
  extraaddressinfo,
  city,
  state,
  zip
) {
  console.log( firstname,
    lastname,
    phonenumber,
    email,
    streetaddress,
    extraaddressinfo,
    city,
    state,
    zip)
  return {
    type: ADD_SHIPPING_INFO,
    payload: axios.post("/api/addShipInfo", {
      firstname,
      lastname,
      phonenumber,
      email,
      streetaddress,
      extraaddressinfo,
      city,
      state,
      zip
    })
  };
}

export function confirmationEmail(name, email) {
  return {
    type: CONFIRMATION_EMAIL,
    payload: axios.post("/api/email", {
      name,
      email
    })
  }
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
    case `${GET_SHIPPING_INFO}_FULFILLED`:
    case `${ADD_SHIPPING_INFO}_FULFILLED`:
      console.log(action.payload.data)
      return {
        ...state,
        user: action.payload.data
      };
    case `${CONFIRMATION_EMAIL}_FULFILLED`:
      return {
        ...state,
        email: action.payload.data
      }
    default:
      return state;
  }
}
