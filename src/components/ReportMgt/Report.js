import React from 'react'
import Sidebar from '../SideBar/Sidebar'

const Report = () => {
  const [inactive, setInactive] = React.useState(false);
 
  return (
    <div>

        <Sidebar
        onCollapse={(inactive) => {
            setInactive(inactive);
        }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
            
            <h1>Report</h1>
            
        </div>
    </div>
  )
}

export default Report