'use client'

import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

const Disqus = ({ shortname, url, identifier, title }: { shortname: string, url: string, identifier: string, title: string }) => {
  return (
    <div style={{ colorScheme: 'light !important', filter: 'none', backgroundColor: '#FFFFFF01' }}>
      <DiscussionEmbed
        shortname={shortname}
        config={
          {
            url: url,
            identifier: identifier,
            title: title,
          }
        }
      />
    </div>
  )
}

export default Disqus