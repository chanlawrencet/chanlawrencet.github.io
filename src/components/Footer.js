import React from "react";

const Footer = ({data}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      fontSize: 15
    }}
  >
    updated {data}
  </div>
)

export default Footer;