import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing.", filesize : "0.4mb", close : false, tag: {isOpen : true, tagTitle : "Download Now", tagColor: "green"}, 
    },
    {
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing.", filesize : "0.9mb", close : false, tag: {isOpen : true, tagTitle : "Download Now", tagColor: "sky"}, 
    },
    {
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing.", filesize : "1.4mb", close : false, tag: {isOpen : true, tagTitle : "Upload", tagColor: "red"}, 
    },
  ];
  return (
    <div ref={ref} className='fixed z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground