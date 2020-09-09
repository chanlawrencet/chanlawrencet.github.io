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
      style={{width: 300}}
    >

      <ListLink
        link='https://www.goodreads.com/book/show/53331127-pachinko'
        linkText='Pachinko'
        description='Min Jin Lee'
      />
      <ListLink
        link='https://www.goodreads.com/book/show/22823462-the-life-changing-magic-of-tidying-up'
        linkText='The Life-Changing Magic of Tidying Up'
        description=' Marie Kondō'
      />
      <ListLink
        link='https://www.goodreads.com/book/show/32200035-arrival'
        linkText='Arrival'
        description='Ted Chiang'
      />
      <div style={{marginTop: 20}}>
        ... others on my <a href='https://www.goodreads.com/user/show/108515434-lawrence'>Goodreads Profile!</a>
      </div>
    </div>
  </div>
)

export default Reading;