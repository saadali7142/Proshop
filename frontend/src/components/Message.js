import React from "react";
import { Alert } from "react-bootstrap";
<<<<<<< HEAD
=======

>>>>>>> master
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};
<<<<<<< HEAD
=======

>>>>>>> master
export default Message;
