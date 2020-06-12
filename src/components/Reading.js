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
      style={{fontSize: 20, fontWeight: 'bold'}}
    >
      Reading
    </div>
    <div
      style={{maxWidth: 300}}
    >
      <ListLink
        link='https://www.goodreads.com/book/show/41023090-the-second-mountain'
        linkText='The Second Mountain: The Quest for a Moral Life'
        description='David Brooks'
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