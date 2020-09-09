import React from "react"
import ListLink from "./ListLink"

const Recs = () => (
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
      Recommends
    </div>
    <div
      style={{width: 300}}
    >
      <ListLink
        link='https://www.goodreads.com/book/show/40776644-the-moment-of-lift'
        linkText='The Moment of Lift'
        description='Melinda Gates'
      />
      <ListLink
        link='https://www.goodreads.com/book/show/34273236-little-fires-everywhere?ac=1&from_search=true'
        linkText='Little Fires Everywhere'
        description='Celeste Ng'
      />
      <ListLink
        link='https://www.goodreads.com/book/show/36247169-educated'
        linkText='Educated'
        description='Tara Westover'
      />
      <ListLink
        link='https://www.goodreads.com/book/show/22693187-epic-measures?from_search=true'
        linkText='Epic Measures'
        description='Jeremy Smith'
      />
    </div>
  </div>
);

export default Recs;