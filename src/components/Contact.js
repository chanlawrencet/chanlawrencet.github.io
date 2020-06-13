import React from "react";
import ListLink from "./ListLink"

const Contact = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 30,
      flexWrap: 'wrap',
    }}
  >
    <div
      style={{fontSize: 25, fontWeight: 'bold', width: 200, marginBottom: 10}}
    >
      Contact
    </div>
    <div
      style={{minWidth: 300}}
    >
      <ListLink
        link='mailto:chanlawrencet@gmail.com'
        linkText='Email'
        description='chanlawrencet@gmail.com'
      />
    </div>
  </div>
)

export default Contact;