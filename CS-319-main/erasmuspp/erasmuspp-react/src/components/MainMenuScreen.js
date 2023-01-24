import React, { useState } from 'react';
import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import LeftSideBarAndAnnouncements from './LeftSideBarAndAnnouncementsY';


export default function MainMenuScreen(){
  return (
    <div>
      <TopNavBar/>
      <LeftSideBarAndAnnouncements/>
      
      <DefaultFooter/>
      
    </div>
    
  );
}