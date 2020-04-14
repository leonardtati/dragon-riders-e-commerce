import React from "react";
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
  <>
  <h1>Something Went Wrong! Please Use the Following Link to get back to Shopping</h1>
  <Link to="/">Link</Link>
  <div>ErrorPage</div>
  </>
  )
}

export default ErrorPage;

