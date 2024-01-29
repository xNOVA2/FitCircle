import Post_Community from '@/components/Post-Community/Post-Community'
import React from 'react'

export default function page() {
  return (
    <div>
      <Post_Community Title='Post' subTitle='Topic' isCommunityPage={true}/>
    </div>
  )
}
