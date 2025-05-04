import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      Contact
      <Script
      strategy='beforeInteractive'>
        {`alert("Hey This is contact page")`}
      </Script>
    </div>
  )
}

export default contact
