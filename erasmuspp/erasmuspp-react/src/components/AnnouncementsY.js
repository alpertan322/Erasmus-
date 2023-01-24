import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AnnouncementCardBreakY from './AnnouncementCardBreakY';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function AnnouncementsY() {

  const [userName, setuserName] = useState("");
  const [userRole, setuserRole] = useState("");

  const [announcements, setAnnouncements] = useState([]);
  const [addAnnouncementHidden, setAddAnnouncementHidden] = useState(true);


  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/announcement/token=" + window.localStorage.getItem("USER_TOKEN"))
      .then(res => {
        setAnnouncements(res.data);
      })
      .catch(err=>{
        console.log(err)
      })

  }, [])

  useEffect(() => {
    var userToken = 
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
         .then(res => setuserName(res.data.name));
  }, [userName]) 

  useEffect(() => {
    var userToken = 
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
         .then((res) => {setuserRole(res.data.role); })
  }, [userRole] ) 

  useEffect(() => {
    // 👇️ only runs once
    setButtons();
  });

  function setButtons(){
    if(userRole == "ROLE_CANDIDATE"){
    }

    if(userRole == "ROLE_COORDINATOR"){
      setAddAnnouncementHidden(false);
    }

    if(userRole == "ROLE_ADMIN"){
      setAddAnnouncementHidden(false);
    }

  }

  let navigate = useNavigate();
  function handleClick() {
    navigate("/addAnnouncement");
  }
  
  return (
    <div style={{backgroundColor: "#1F908F"}}>
      <Card style={{backgroundColor: "#C7D6D2"}}>
        <Card.Body>
          <Card.Title>
            <div style={{ display: "flex" }}>
            <h1>Announcements</h1>
            <Button className='me-2' hidden={addAnnouncementHidden} onClick={handleClick} style={{ marginLeft: "auto", backgroundColor: "#3C7479" }}>
              Add New Announcement+
            </Button>
            </div>
          </Card.Title>
        </Card.Body>
      </Card>

      <Row xs={2} md={1} className="g-4">
        <AnnouncementCardBreakY/>
        {announcements.map(announcement => (
          <Col md={{ span: 10, offset: 1 }}>
            <Card style={{backgroundColor: "#F4EFF2", width: "65rem"}}>
              <Card.Body>
                <Card.Title>{announcement.title}</Card.Title>
                <Card.Text>
                  {announcement.content}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
