import React from 'react'
import './StatusBadge.css'
const StatusBadge = ({status}) => {
    let classname=`badge badge-${status}`
    if(status==null){
      classname='badge'
     
    }

  return (
    <div className={classname}>{status}</div>
  )
}

export default StatusBadge
