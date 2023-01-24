import './App.css';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import PostAnnouncementY from './components/PostAnnouncementY';
import MyApplicationsN from './components/MyApplicationsN';
import RegisterCandidateY from './components/RegisterCandidateY';
import StudentsTableY from './components/StudentsTableY';
import MyApplicationY from './components/MyApplicationY';
import ApplicationFormEditY from './components/ApplicationFormEditY';
import ApplicationFormViewY from './components/ApplicationFormViewY';
import ToDoListN from './components/ToDoListN';
import ChangePasswordN from './components/ChangePasswordN';
import RoadmapY from './components/RoadmapY';
import LearningAgreementN from './components/LearningAgreementN';
import PreApprovalFormN from './components/PreApprovalForm';
import ForgotPasswordN from './components/ForgotPasswordN';
import CourseRegistrationY from './components/CourseRegistrationY';
import CourseEquivalenceRequestY from './components/CourseEquivalenceRequestY';
import CoordinatorViewApplicationN from './components/CoordinatorViewApplicationN';
import CoordinatorViewCourseRegistrationN from './components/CoordinatorViewCourseRegistrationN';
import CoordinatorLearningAgreementN from './components/CoordinatorLearningAgreementN';
import CoordinatorPreApprovalFormN from './components/CoordinatorPreApprovalFormN';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/" exact element = {<LoginScreen />}> </Route>
        <Route path ="/login" element = {<LoginScreen />}> </Route>
        <Route path ="/main" element = {<MainScreen />}> </Route>
        <Route path ="/profile" element = {<ProfileScreen />}> </Route>
        <Route path ="/addAnnouncement" element = {<PostAnnouncementY />}> </Route>
        <Route path ="/myApplications" element = {<MyApplicationsN />}> </Route>
        <Route path ="/candidateRegistration" element = {<RegisterCandidateY />}> </Route>
        <Route path ="/studentsTable" element = {<StudentsTableY />}> </Route>
        <Route path ="/myApplication" element = {<MyApplicationY />}> </Route>
        <Route path ="/editApplicationForm" element = {<ApplicationFormEditY/>}> </Route>
        <Route path ="/viewApplicationForm" element = {<ApplicationFormViewY/>}> </Route>
        <Route path ="/toDoList" element = {<ToDoListN/>}> </Route>
        <Route path ="/forgotPassword" element = {<ForgotPasswordN/>}> </Route>
        <Route path ="/changePassword" element = {<ChangePasswordN/>}> </Route>
        <Route path ="/roadmap" element = {<RoadmapY/>}> </Route>
        <Route path ="/learningAgreement" element = {<LearningAgreementN/>}> </Route>
        <Route path ="/preApprovalForm" element = {<PreApprovalFormN/>}> </Route>
        <Route path ="/forgotPassword" element = {<ForgotPasswordN/>}> </Route>
        <Route path ="/courseRegistration" element = {<CourseRegistrationY/>}> </Route>
        <Route path ="/courseEquivalenceRequest" element = {<CourseEquivalenceRequestY/>}> </Route>
        <Route path ="/coordinatorViewApplication" element = {<CoordinatorViewApplicationN/>}> </Route>CoordinatorViewCourseRegistrationN
        <Route path ="/coordinatorViewCourseRegistration" element = {<CoordinatorViewCourseRegistrationN/>}> </Route>
        <Route path ="/coordinatorLearningAgreement" element = {<CoordinatorLearningAgreementN/>}> </Route>
        <Route path ="/coordinatorPreApprovalForm" element = {<CoordinatorPreApprovalFormN/>}> </Route>
      </Routes>  
    </>
  );
}

export default App;
