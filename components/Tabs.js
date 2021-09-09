import React from 'react';
import { Tab as ReactTab, TabList as ReactTablist, TabPanel as ReactTabPanel } from 'react-tabs'

const TabList = ({children, ...props}) => {
  return (
    <ReactTablist {...props} className="flex flex-nowrap space-x-4 border-b font-semibold text-[rgb(113,113,113)] overflow-x-scroll lg:scrollbar-hide">
      {children}
    </ReactTablist>
  )
}

TabList.tabsRole = "TabList";

const Tab = ({children, ...props}) => {
  
  return (
    <ReactTab {...props} className={`border-black ${props.selected && "border-b-2"} ${props.selected ? "text-black": ""}`}>
      <div className="cursor-default py-2 px-2 rounded-lg hover:bg-gray-100 whitespace-nowrap">
        {children}
      </div>
    </ReactTab>
  )
}

Tab.tabsRole = "Tab"

const TabPanel = ({children, ...props}) => {
  return (
    <ReactTabPanel {...props}>
      {children}
    </ReactTabPanel>
  )
}

TabPanel.tabsRole = "TabPanel"

export {Tab, TabList, TabPanel}