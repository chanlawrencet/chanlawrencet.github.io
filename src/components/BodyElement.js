import React from "react"
import ListLink from "./ListLink"

const BodyElement = ({bodyTitle, bodyContents}) => (
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
      {bodyTitle}
    </div>
    <div
      style={{width: 300}}
    >
      {bodyContents.body.map(element =>
        <ListLink
          data={element}
        />
        )}
      {
        bodyContents.footer ?
          <div style={{marginTop: 20}}>
            {bodyContents.footer.preText}<a href={bodyContents.footer.link}>{bodyContents.footer.linkText}</a>
          </div> : null
      }

    </div>
  </div>
)

export default BodyElement;