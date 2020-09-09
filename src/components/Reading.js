import React from "react"
import ListLink from "./ListLink"

const Reading = () => (
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
      Reading
    </div>
    <div
      style={{maxWidth: 300}}
    >

      <ListLink
        link='https://www.goodreads.com/book/show/53331127-pachinko'
        linkText='Pachinko'
        description='Min Jin Lee'
      />
      <ListLink
        link='https://www.goodreads.com/book/show/36247169-educated'
        linkText='Educated'
        description='Tara Westover'
      />
      <ListLink
        link='https://www.goodreads.com/book/show/29584452-the-underground-railroad'
        linkText='The Underground Railroad'
        description='Colson Whitehead'
      />
      <div style={{marginTop: 20}}>
        ... others on my <a href='https://www.goodreads.com/user/show/108515434-lawrence'>Goodreads Profile!</a>
      </div>
    </div>
  </div>
)

export default Reading;