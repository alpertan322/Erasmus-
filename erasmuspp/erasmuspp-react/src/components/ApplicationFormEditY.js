import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/Button';
import DefaultFooter from './DefaultFooter';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ApplicationFormEditY() {
  const [userFirstNameInit, setUserFirstNameInit] = useState("");
  const [userLastNameInit, setUserLastNameInit] = useState("");
  const [userNationality, setUserNationality] = useState("");
  const [userDepartment, setUserDepartment] = useState("");
  const [userGpa, setUserGpa] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userEmailInit, setUserEmailInit] = useState("");


  const [uni1, setUni1] = useState("")
  const [uni2, setUni2] = useState("")
  const [uni3, setUni3] = useState("")
  const [uni4, setUni4] = useState("")
  const [uni5, setUni5] = useState("")
  const [selectedSemester, setSelectedSemester] = useState("");

  const [userMobilePhoneNo, setUserMobilePhoneNo] = useState("");
  const [userMobilePhoneNoInit, setUserMobilePhoneNoInit] = useState("");

  const [userId, setUserId] = useState("");

  const [userDoBInit, setUserDoBInit] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
      .then((res) => {
        setUserFirstNameInit(res.data.firstName);
        setUserLastNameInit(res.data.lastName);
        setUserEmailInit(res.data.email);
        setUserEmail(res.data.personalEmail);
        setUserNationality(res.data.nationality);
        setUserId(res.data.bilkentId);
        setUserDepartment(res.data.department);
        setUserGpa(res.data.gpa);
        setUserMobilePhoneNoInit(res.data.mobilePhone);
        setUserDoBInit(res.data.dob)
      }
      )
  }, [userFirstNameInit][userLastNameInit])

  let navigate = useNavigate();
  function clickBack() {
    navigate("/myApplications");
  }

  function submitForm() {

    axios.post("http://localhost:8080/api/v1/application/token=" + window.localStorage.getItem("USER_TOKEN"), {
      semester: selectedSemester,
      choice1:  uni1,
      choice2:  uni2,
      choice3:  uni3,
      choice4:  uni4,
      choice5:  uni5
    }).then((res) => {
        if (res.data === 1) {
          alert("Application successfull");
        }
        else {
          alert("Something went wrong");
        }
     })
  }
  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <TopNavBar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
            <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
              Go Back
            </Button>
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br />
            <h1 style={{ color: '#f4eff2' }}>Application Form</h1>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <LargeBreak />
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
            <Form>
              <Form.Group className="ps-4" controlId="applicationFormPersonalInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Personal Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditFirstName">
                <Form.Label>First Name:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditLastName">
                <Form.Label>Last Name:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditDoB">
                <Form.Label>Date of Birth:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditNationality">
                <Form.Label>Nationality:</Form.Label>
              </Form.Group>

              <Form.Group className="ps-4" controlId="applicationFormEditStudentInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Student Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditStudentID">
                <Form.Label>Student ID No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditDepartment">
                <Form.Label>Department/Class:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditCumGPA">
                <Form.Label>Cumulative GPA:</Form.Label>
              </Form.Group>

              <Form.Group className="ps-4" controlId="applicationFormEditContactInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Contact Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditUnivEmail">
                <Form.Label>University E-mail:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditPersonalEmail">
                <Form.Label>Personal E-mail:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditMobilePhoneNo">
                <Form.Label>Mobile Phone No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditPostalAddress">
                <Form.Label>Postal Address:</Form.Label>
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <br />
            <Form>
              <Form.Group className="pt-3 mb" controlId="applicationFormEditFirstNameForm">
                <Form.Label>{userFirstNameInit}</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditLastNameForm">
                <Form.Label>{userLastNameInit}</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditDoBForm">
                <Form.Label>{userDoBInit}</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb" controlId="applicationFormEditNationalityForm">
                <Form.Label>{userNationality}</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="pt-4 mb-1" controlId="applicationFormEditStudentIDForm">
                <Form.Label>{userId}</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditDepartmentForm">
                <Form.Label>{userDepartment}</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-3" controlId="applicationFormEditCumGPAForm">
                <Form.Label>{userGpa}</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditUnivEmailForm">
                <Form.Label>{userEmailInit}</Form.Label>
              </Form.Group>
              <Form.Group className="me-5 mb-2" controlId="applicationformEditPersonalEmailForm">
                <Form.Control placeholder={userEmail} />
              </Form.Group>
              <Form.Group className="me-5 mb-3" controlId="applicationFormEditMobilePhoneNoForm">
                <Form.Control placeholder={userMobilePhoneNoInit} />
              </Form.Group>
              <Form.Group className="me-5 mb-2" controlId="applicationFormEditPostalAddressForm">
                <Form.Control as="textarea" rows={4} placeholder="Postal Address" />
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <Form className="pe-5">
              <Form.Group controlId="applicationFormEditUnivPreferences">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Erasmus Host University Preferences:</h5></Form.Label>
              </Form.Group>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>1.</Form.Label>
              </Form.Group>
              <Form.Select aria-label="University Selection 1" onChange={(e) => {setUni1(e.target.value);}}>
                <option>Select</option>
                <option value="Aberystwyth University">Aberystwyth University</option>
                <option value="Adam Mickiewicz Universitesi">Adam Mickiewicz Universitesi</option>
                <option value="AGH University of Science and Technology">AGH University of Science and Technology</option>
                <option value="Akademia Sztuk Pi??knych w Gda??sku">Akademia Sztuk Pi??knych w Gda??sku</option>
                <option value="Amsterdam University College">Amsterdam University College</option>
                <option value="Architectural Institution in Prague">Architectural Institution in Prague</option>
                <option value="Aston University">Aston University</option>
                <option value="Athlone Institute of Technology">Athlone Institute of Technology</option>
                <option value="Bamberg ??niversitesi">Bamberg ??niversitesi</option>
                <option value="Bergen ??niversitesi">Bergen ??niversitesi</option>
                <option value="Bocconi University">Bocconi University</option>
                <option value="Bournemouth University">Bournemouth University</option>
                <option value="Ca Foscari University of Venice">Ca Foscari University of Venice</option>
                <option value="Cadiz ??niversitesi">Cadiz ??niversitesi</option>
                <option value="Corvinus University of Budapest">Corvinus University of Budapest</option>
                <option value="Cracow University of Economics">Cracow University of Economics</option>
                <option value="Eberhard Karls Universitat T??bingen">Eberhard Karls Universitat T??bingen</option>
                <option value="??cole Polytechnique F??d??rale (EPF)">??cole Polytechnique F??d??rale (EPF)</option>
                <option value="EDHEC Business School">EDHEC Business School</option>
                <option value="Erasmus Universiteit Rotterdam">Erasmus Universiteit Rotterdam</option>
                <option value="Erfurt ??niversitesi">Erfurt ??niversitesi</option>
                <option value="ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)">ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)</option>
                <option value="ESIEE Paris">ESIEE Paris</option>
                <option value="Eszterhazy Karoly Foiskola">Eszterhazy Karoly Foiskola</option>
                <option value="Free University of Bozen/Bolzano">Free University of Bozen/Bolzano</option>
                <option value="Friedrich-Alexander-Universitat Erlangen-N??rnberg">Friedrich-Alexander-Universitat Erlangen-N??rnberg</option>
                <option value="Ghent ??niversitesi">Ghent ??niversitesi</option>
                <option value="G??teborg ??niversitesi">G??teborg ??niversitesi</option>
                <option value="Groningen ??niversitesi">Groningen ??niversitesi</option>
                <option value="Hanzehogeschool Groningen">Hanzehogeschool Groningen</option>
                <option value="Helsinki Metropolia University of Applied Sciences">Helsinki Metropolia University of Applied Sciences</option>
                <option value="HOCHSCHULE F??R MUSIK UND THEATER HANNOVER">HOCHSCHULE F??R MUSIK UND THEATER HANNOVER</option>
                <option value="Hogeschool INHolland">Hogeschool INHolland</option>
                <option value="Huelva University">Huelva University</option>
                <option value="IBS - International Business School">IBS - International Business School</option>
                <option value="ICHEC Brussels Management School">ICHEC Brussels Management School</option>
                <option value="Institut Superieur de Traducteurs et Interpretes">Institut Superieur de Traducteurs et Interpretes</option>
                <option value="ISCTE IUL - Lisbon University Institute">ISCTE IUL - Lisbon University Institute</option>
                <option value="Johann Wolfgang Goethe University">Johann Wolfgang Goethe University</option>
                <option value="Katholieke Universiteit Leuven">Katholieke Universiteit Leuven</option>
                <option value="Kaunas Teknoloji ??niversitesi">Kaunas Teknoloji ??niversitesi</option>
                <option value="Kedge Business School">Kedge Business School</option>
                <option value="Kiel University">Kiel University</option>
                <option value="Kingston University">Kingston University</option>
                <option value="Konstanz University">Konstanz University</option>
                <option value="Leiden ??niversitesi">Leiden ??niversitesi</option>
                <option value="Leipzig ??niversitesi">Leipzig ??niversitesi</option>
                <option value="Leuphana Universitat L??neburg">Leuphana Universitat L??neburg</option>
                <option value="Liege ??niversitesi">Liege ??niversitesi</option>
                <option value="Ljubljana ??niversitesi">Ljubljana ??niversitesi</option>
                <option value="London Metropolitan University">London Metropolitan University</option>
                <option value="Maastricht University">Maastricht University</option>
                <option value="Malm?? ??niversitesi">Malm?? ??niversitesi</option>
                <option value="Mannheim ??niversitesi">Mannheim ??niversitesi</option>
                <option value="Masaryk ??niversitesi">Masaryk ??niversitesi</option>
                <option value="Minho ??niversitesi">Minho ??niversitesi</option>
                <option value="Neoma Business School">Neoma Business School</option>
                <option value="NHTV Breda University of Applied Sciences">NHTV Breda University of Applied Sciences</option>
                <option value="Otto-von-Guericke Universitat Magdeburg">Otto-von-Guericke Universitat Magdeburg</option>
                <option value="Pforzheim University">Pforzheim University</option>
                <option value="Politechnika Gdanska">Politechnika Gdanska</option>
                <option value="Politecnico di Milano">Politecnico di Milano</option>
                <option value="Polytechnic of Bari">Polytechnic of Bari</option>
                <option value="Prag Sahne Sanatlar Akademisi">Prag Sahne Sanatlar Akademisi</option>
                <option value="Prag'daki Charles ??niversitesi">Prag'daki Charles ??niversitesi</option>
                <option value="Radboud University Nijmegen">Radboud University Nijmegen</option>
                <option value="RISEBA">RISEBA</option>
                <option value="Roskilde Universitesi">Roskilde Universitesi</option>
                <option value="Ruhr-Universitat Bochum">Ruhr-Universitat Bochum</option>
                <option value="Ruprecht-Karls Universitat Heidelberg">Ruprecht-Karls Universitat Heidelberg</option>
                <option value="Saarland ??niversitesi">Saarland ??niversitesi</option>
                <option value="Sciences Po">Sciences Po</option>
                <option value="Sheffield ??niversitesi">Sheffield ??niversitesi</option>
                <option value="Strasbourg ??niversitesi">Strasbourg ??niversitesi</option>
                <option value="SZENT ISTVAN UNIVERSITY">SZENT ISTVAN UNIVERSITY</option>
                <option value="Tartu ??niversitesi">Tartu ??niversitesi</option>
                <option value="Technical University of Berlin">Technical University of Berlin</option>
                <option value="Technische Universiteti Eindhoven">Technische Universiteti Eindhoven</option>
                <option value="TELECOM SudParis">TELECOM SudParis</option>
                <option value="TU Universitaet Dortmund">TU Universitaet Dortmund</option>
                <option value="TU Vienna">TU Vienna</option>
                <option value="Turku ??niversitesi">Turku ??niversitesi</option>
                <option value="Universidad de Castilla-La Mancha">Universidad de Castilla-La Mancha</option>
                <option value="Universidad Pontificia Comillas de Madrid">Universidad Pontificia Comillas de Madrid</option>
                <option value="Universidade Catolica Portuguesa">Universidade Catolica Portuguesa</option>
                <option value="Universidade do Porto">Universidade do Porto</option>
                <option value="Universidade Nova de Lisboa">Universidade Nova de Lisboa</option>
                <option value="Universita degli Studi di Firenze">Universita degli Studi di Firenze</option>
                <option value="Universita degli Studi di L&#039;Aquila">Universita degli Studi di L&#039;Aquila</option>
                <option value="UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA">UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA</option>
                <option value="Universita degli Studi di Perugia">Universita degli Studi di Perugia</option>
                <option value="Universitaet Bayreuth">Universitaet Bayreuth</option>
                <option value="Universitat Autonoma de Barcelona">Universitat Autonoma de Barcelona</option>
                <option value="Universitat de Barcelona">Universitat de Barcelona</option>
                <option value="Universit??t Luzern">Universit??t Luzern</option>
                <option value="Universit?? Catholique de Lille (IESEG)">Universit?? Catholique de Lille (IESEG)</option>
                <option value="UNIVERSITE CATHOLIQUE DE LOUVAIN">UNIVERSITE CATHOLIQUE DE LOUVAIN</option>
                <option value="Universit?? de Bretagne Occidentale">Universit?? de Bretagne Occidentale</option>
                <option value="Universite Paris-Dauphine">Universite Paris-Dauphine</option>
                <option value="Universiteit Van Tilburg">Universiteit Van Tilburg</option>
                <option value="University of Applied Sciences Upper Austria">University of Applied Sciences Upper Austria</option>
                <option value="University of Bologna">University of Bologna</option>
                <option value="University of Deusto">University of Deusto</option>
                <option value="University of Dundee">University of Dundee</option>
                <option value="University of Edinburgh">University of Edinburgh</option>
                <option value="University of Limerick">University of Limerick</option>
                <option value="University of M??nster">University of M??nster</option>
                <option value="University of Southern Denmark">University of Southern Denmark</option>
                <option value="University of Twente">University of Twente</option>
                <option value="Univerversit?? Saint-Louis">Univerversit?? Saint-Louis</option>
                <option value="UNIWERSYTET SZCZECINSKI">UNIWERSYTET SZCZECINSKI</option>
                <option value="Utrecht ??niversitesi">Utrecht ??niversitesi</option>
                <option value="Var??ova ??niversitesi">Var??ova ??niversitesi</option>
                <option value="Vilnius ??niversitesi">Vilnius ??niversitesi</option>
                <option value="Vrije ??niversitesi">Vrije ??niversitesi</option>
                <option value="Warsaw School of Economics">Warsaw School of Economics</option>
                <option value="Waterford Institute of Technology">Waterford Institute of Technology</option>
                <option value="WHU - Otto Beisheim School of Management">WHU - Otto Beisheim School of Management</option>
              </Form.Select>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>2.</Form.Label>
              </Form.Group>
              <Form.Select aria-label="University Selection 2" onChange={(e) => setUni2(e.target.value)}>
                <option>Select</option>
                <option value="Aberystwyth University">Aberystwyth University</option>
                <option value="Adam Mickiewicz Universitesi">Adam Mickiewicz Universitesi</option>
                <option value="AGH University of Science and Technology">AGH University of Science and Technology</option>
                <option value="Akademia Sztuk Pi??knych w Gda??sku">Akademia Sztuk Pi??knych w Gda??sku</option>
                <option value="Amsterdam University College">Amsterdam University College</option>
                <option value="Architectural Institution in Prague">Architectural Institution in Prague</option>
                <option value="Aston University">Aston University</option>
                <option value="Athlone Institute of Technology">Athlone Institute of Technology</option>
                <option value="Bamberg ??niversitesi">Bamberg ??niversitesi</option>
                <option value="Bergen ??niversitesi">Bergen ??niversitesi</option>
                <option value="Bocconi University">Bocconi University</option>
                <option value="Bournemouth University">Bournemouth University</option>
                <option value="Ca Foscari University of Venice">Ca Foscari University of Venice</option>
                <option value="Cadiz ??niversitesi">Cadiz ??niversitesi</option>
                <option value="Corvinus University of Budapest">Corvinus University of Budapest</option>
                <option value="Cracow University of Economics">Cracow University of Economics</option>
                <option value="Eberhard Karls Universitat T??bingen">Eberhard Karls Universitat T??bingen</option>
                <option value="??cole Polytechnique F??d??rale (EPF)">??cole Polytechnique F??d??rale (EPF)</option>
                <option value="EDHEC Business School">EDHEC Business School</option>
                <option value="Erasmus Universiteit Rotterdam">Erasmus Universiteit Rotterdam</option>
                <option value="Erfurt ??niversitesi">Erfurt ??niversitesi</option>
                <option value="ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)">ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)</option>
                <option value="ESIEE Paris">ESIEE Paris</option>
                <option value="Eszterhazy Karoly Foiskola">Eszterhazy Karoly Foiskola</option>
                <option value="Free University of Bozen/Bolzano">Free University of Bozen/Bolzano</option>
                <option value="Friedrich-Alexander-Universitat Erlangen-N??rnberg">Friedrich-Alexander-Universitat Erlangen-N??rnberg</option>
                <option value="Ghent ??niversitesi">Ghent ??niversitesi</option>
                <option value="G??teborg ??niversitesi">G??teborg ??niversitesi</option>
                <option value="Groningen ??niversitesi">Groningen ??niversitesi</option>
                <option value="Hanzehogeschool Groningen">Hanzehogeschool Groningen</option>
                <option value="Helsinki Metropolia University of Applied Sciences">Helsinki Metropolia University of Applied Sciences</option>
                <option value="HOCHSCHULE F??R MUSIK UND THEATER HANNOVER">HOCHSCHULE F??R MUSIK UND THEATER HANNOVER</option>
                <option value="Hogeschool INHolland">Hogeschool INHolland</option>
                <option value="Huelva University">Huelva University</option>
                <option value="IBS - International Business School">IBS - International Business School</option>
                <option value="ICHEC Brussels Management School">ICHEC Brussels Management School</option>
                <option value="Institut Superieur de Traducteurs et Interpretes">Institut Superieur de Traducteurs et Interpretes</option>
                <option value="ISCTE IUL - Lisbon University Institute">ISCTE IUL - Lisbon University Institute</option>
                <option value="Johann Wolfgang Goethe University">Johann Wolfgang Goethe University</option>
                <option value="Katholieke Universiteit Leuven">Katholieke Universiteit Leuven</option>
                <option value="Kaunas Teknoloji ??niversitesi">Kaunas Teknoloji ??niversitesi</option>
                <option value="Kedge Business School">Kedge Business School</option>
                <option value="Kiel University">Kiel University</option>
                <option value="Kingston University">Kingston University</option>
                <option value="Konstanz University">Konstanz University</option>
                <option value="Leiden ??niversitesi">Leiden ??niversitesi</option>
                <option value="Leipzig ??niversitesi">Leipzig ??niversitesi</option>
                <option value="Leuphana Universitat L??neburg">Leuphana Universitat L??neburg</option>
                <option value="Liege ??niversitesi">Liege ??niversitesi</option>
                <option value="Ljubljana ??niversitesi">Ljubljana ??niversitesi</option>
                <option value="London Metropolitan University">London Metropolitan University</option>
                <option value="Maastricht University">Maastricht University</option>
                <option value="Malm?? ??niversitesi">Malm?? ??niversitesi</option>
                <option value="Mannheim ??niversitesi">Mannheim ??niversitesi</option>
                <option value="Masaryk ??niversitesi">Masaryk ??niversitesi</option>
                <option value="Minho ??niversitesi">Minho ??niversitesi</option>
                <option value="Neoma Business School">Neoma Business School</option>
                <option value="NHTV Breda University of Applied Sciences">NHTV Breda University of Applied Sciences</option>
                <option value="Otto-von-Guericke Universitat Magdeburg">Otto-von-Guericke Universitat Magdeburg</option>
                <option value="Pforzheim University">Pforzheim University</option>
                <option value="Politechnika Gdanska">Politechnika Gdanska</option>
                <option value="Politecnico di Milano">Politecnico di Milano</option>
                <option value="Polytechnic of Bari">Polytechnic of Bari</option>
                <option value="Prag Sahne Sanatlar Akademisi">Prag Sahne Sanatlar Akademisi</option>
                <option value="Prag'daki Charles ??niversitesi">Prag'daki Charles ??niversitesi</option>
                <option value="Radboud University Nijmegen">Radboud University Nijmegen</option>
                <option value="RISEBA">RISEBA</option>
                <option value="Roskilde Universitesi">Roskilde Universitesi</option>
                <option value="Ruhr-Universitat Bochum">Ruhr-Universitat Bochum</option>
                <option value="Ruprecht-Karls Universitat Heidelberg">Ruprecht-Karls Universitat Heidelberg</option>
                <option value="Saarland ??niversitesi">Saarland ??niversitesi</option>
                <option value="Sciences Po">Sciences Po</option>
                <option value="Sheffield ??niversitesi">Sheffield ??niversitesi</option>
                <option value="Strasbourg ??niversitesi">Strasbourg ??niversitesi</option>
                <option value="SZENT ISTVAN UNIVERSITY">SZENT ISTVAN UNIVERSITY</option>
                <option value="Tartu ??niversitesi">Tartu ??niversitesi</option>
                <option value="Technical University of Berlin">Technical University of Berlin</option>
                <option value="Technische Universiteti Eindhoven">Technische Universiteti Eindhoven</option>
                <option value="TELECOM SudParis">TELECOM SudParis</option>
                <option value="TU Universitaet Dortmund">TU Universitaet Dortmund</option>
                <option value="TU Vienna">TU Vienna</option>
                <option value="Turku ??niversitesi">Turku ??niversitesi</option>
                <option value="Universidad de Castilla-La Mancha">Universidad de Castilla-La Mancha</option>
                <option value="Universidad Pontificia Comillas de Madrid">Universidad Pontificia Comillas de Madrid</option>
                <option value="Universidade Catolica Portuguesa">Universidade Catolica Portuguesa</option>
                <option value="Universidade do Porto">Universidade do Porto</option>
                <option value="Universidade Nova de Lisboa">Universidade Nova de Lisboa</option>
                <option value="Universita degli Studi di Firenze">Universita degli Studi di Firenze</option>
                <option value="Universita degli Studi di L&#039;Aquila">Universita degli Studi di L&#039;Aquila</option>
                <option value="UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA">UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA</option>
                <option value="Universita degli Studi di Perugia">Universita degli Studi di Perugia</option>
                <option value="Universitaet Bayreuth">Universitaet Bayreuth</option>
                <option value="Universitat Autonoma de Barcelona">Universitat Autonoma de Barcelona</option>
                <option value="Universitat de Barcelona">Universitat de Barcelona</option>
                <option value="Universit??t Luzern">Universit??t Luzern</option>
                <option value="Universit?? Catholique de Lille (IESEG)">Universit?? Catholique de Lille (IESEG)</option>
                <option value="UNIVERSITE CATHOLIQUE DE LOUVAIN">UNIVERSITE CATHOLIQUE DE LOUVAIN</option>
                <option value="Universit?? de Bretagne Occidentale">Universit?? de Bretagne Occidentale</option>
                <option value="Universite Paris-Dauphine">Universite Paris-Dauphine</option>
                <option value="Universiteit Van Tilburg">Universiteit Van Tilburg</option>
                <option value="University of Applied Sciences Upper Austria">University of Applied Sciences Upper Austria</option>
                <option value="University of Bologna">University of Bologna</option>
                <option value="University of Deusto">University of Deusto</option>
                <option value="University of Dundee">University of Dundee</option>
                <option value="University of Edinburgh">University of Edinburgh</option>
                <option value="University of Limerick">University of Limerick</option>
                <option value="University of M??nster">University of M??nster</option>
                <option value="University of Southern Denmark">University of Southern Denmark</option>
                <option value="University of Twente">University of Twente</option>
                <option value="Univerversit?? Saint-Louis">Univerversit?? Saint-Louis</option>
                <option value="UNIWERSYTET SZCZECINSKI">UNIWERSYTET SZCZECINSKI</option>
                <option value="Utrecht ??niversitesi">Utrecht ??niversitesi</option>
                <option value="Var??ova ??niversitesi">Var??ova ??niversitesi</option>
                <option value="Vilnius ??niversitesi">Vilnius ??niversitesi</option>
                <option value="Vrije ??niversitesi">Vrije ??niversitesi</option>
                <option value="Warsaw School of Economics">Warsaw School of Economics</option>
                <option value="Waterford Institute of Technology">Waterford Institute of Technology</option>
                <option value="WHU - Otto Beisheim School of Management">WHU - Otto Beisheim School of Management</option>
              </Form.Select>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>3.</Form.Label>
              </Form.Group>
              <Form.Select aria-label="University Selection 3" onChange={(e) => setUni3(e.target.value)}>
                <option>Select</option>
                <option value="Aberystwyth University">Aberystwyth University</option>
                <option value="Adam Mickiewicz Universitesi">Adam Mickiewicz Universitesi</option>
                <option value="AGH University of Science and Technology">AGH University of Science and Technology</option>
                <option value="Akademia Sztuk Pi??knych w Gda??sku">Akademia Sztuk Pi??knych w Gda??sku</option>
                <option value="Amsterdam University College">Amsterdam University College</option>
                <option value="Architectural Institution in Prague">Architectural Institution in Prague</option>
                <option value="Aston University">Aston University</option>
                <option value="Athlone Institute of Technology">Athlone Institute of Technology</option>
                <option value="Bamberg ??niversitesi">Bamberg ??niversitesi</option>
                <option value="Bergen ??niversitesi">Bergen ??niversitesi</option>
                <option value="Bocconi University">Bocconi University</option>
                <option value="Bournemouth University">Bournemouth University</option>
                <option value="Ca Foscari University of Venice">Ca Foscari University of Venice</option>
                <option value="Cadiz ??niversitesi">Cadiz ??niversitesi</option>
                <option value="Corvinus University of Budapest">Corvinus University of Budapest</option>
                <option value="Cracow University of Economics">Cracow University of Economics</option>
                <option value="Eberhard Karls Universitat T??bingen">Eberhard Karls Universitat T??bingen</option>
                <option value="??cole Polytechnique F??d??rale (EPF)">??cole Polytechnique F??d??rale (EPF)</option>
                <option value="EDHEC Business School">EDHEC Business School</option>
                <option value="Erasmus Universiteit Rotterdam">Erasmus Universiteit Rotterdam</option>
                <option value="Erfurt ??niversitesi">Erfurt ??niversitesi</option>
                <option value="ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)">ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)</option>
                <option value="ESIEE Paris">ESIEE Paris</option>
                <option value="Eszterhazy Karoly Foiskola">Eszterhazy Karoly Foiskola</option>
                <option value="Free University of Bozen/Bolzano">Free University of Bozen/Bolzano</option>
                <option value="Friedrich-Alexander-Universitat Erlangen-N??rnberg">Friedrich-Alexander-Universitat Erlangen-N??rnberg</option>
                <option value="Ghent ??niversitesi">Ghent ??niversitesi</option>
                <option value="G??teborg ??niversitesi">G??teborg ??niversitesi</option>
                <option value="Groningen ??niversitesi">Groningen ??niversitesi</option>
                <option value="Hanzehogeschool Groningen">Hanzehogeschool Groningen</option>
                <option value="Helsinki Metropolia University of Applied Sciences">Helsinki Metropolia University of Applied Sciences</option>
                <option value="HOCHSCHULE F??R MUSIK UND THEATER HANNOVER">HOCHSCHULE F??R MUSIK UND THEATER HANNOVER</option>
                <option value="Hogeschool INHolland">Hogeschool INHolland</option>
                <option value="Huelva University">Huelva University</option>
                <option value="IBS - International Business School">IBS - International Business School</option>
                <option value="ICHEC Brussels Management School">ICHEC Brussels Management School</option>
                <option value="Institut Superieur de Traducteurs et Interpretes">Institut Superieur de Traducteurs et Interpretes</option>
                <option value="ISCTE IUL - Lisbon University Institute">ISCTE IUL - Lisbon University Institute</option>
                <option value="Johann Wolfgang Goethe University">Johann Wolfgang Goethe University</option>
                <option value="Katholieke Universiteit Leuven">Katholieke Universiteit Leuven</option>
                <option value="Kaunas Teknoloji ??niversitesi">Kaunas Teknoloji ??niversitesi</option>
                <option value="Kedge Business School">Kedge Business School</option>
                <option value="Kiel University">Kiel University</option>
                <option value="Kingston University">Kingston University</option>
                <option value="Konstanz University">Konstanz University</option>
                <option value="Leiden ??niversitesi">Leiden ??niversitesi</option>
                <option value="Leipzig ??niversitesi">Leipzig ??niversitesi</option>
                <option value="Leuphana Universitat L??neburg">Leuphana Universitat L??neburg</option>
                <option value="Liege ??niversitesi">Liege ??niversitesi</option>
                <option value="Ljubljana ??niversitesi">Ljubljana ??niversitesi</option>
                <option value="London Metropolitan University">London Metropolitan University</option>
                <option value="Maastricht University">Maastricht University</option>
                <option value="Malm?? ??niversitesi">Malm?? ??niversitesi</option>
                <option value="Mannheim ??niversitesi">Mannheim ??niversitesi</option>
                <option value="Masaryk ??niversitesi">Masaryk ??niversitesi</option>
                <option value="Minho ??niversitesi">Minho ??niversitesi</option>
                <option value="Neoma Business School">Neoma Business School</option>
                <option value="NHTV Breda University of Applied Sciences">NHTV Breda University of Applied Sciences</option>
                <option value="Otto-von-Guericke Universitat Magdeburg">Otto-von-Guericke Universitat Magdeburg</option>
                <option value="Pforzheim University">Pforzheim University</option>
                <option value="Politechnika Gdanska">Politechnika Gdanska</option>
                <option value="Politecnico di Milano">Politecnico di Milano</option>
                <option value="Polytechnic of Bari">Polytechnic of Bari</option>
                <option value="Prag Sahne Sanatlar Akademisi">Prag Sahne Sanatlar Akademisi</option>
                <option value="Prag'daki Charles ??niversitesi">Prag'daki Charles ??niversitesi</option>
                <option value="Radboud University Nijmegen">Radboud University Nijmegen</option>
                <option value="RISEBA">RISEBA</option>
                <option value="Roskilde Universitesi">Roskilde Universitesi</option>
                <option value="Ruhr-Universitat Bochum">Ruhr-Universitat Bochum</option>
                <option value="Ruprecht-Karls Universitat Heidelberg">Ruprecht-Karls Universitat Heidelberg</option>
                <option value="Saarland ??niversitesi">Saarland ??niversitesi</option>
                <option value="Sciences Po">Sciences Po</option>
                <option value="Sheffield ??niversitesi">Sheffield ??niversitesi</option>
                <option value="Strasbourg ??niversitesi">Strasbourg ??niversitesi</option>
                <option value="SZENT ISTVAN UNIVERSITY">SZENT ISTVAN UNIVERSITY</option>
                <option value="Tartu ??niversitesi">Tartu ??niversitesi</option>
                <option value="Technical University of Berlin">Technical University of Berlin</option>
                <option value="Technische Universiteti Eindhoven">Technische Universiteti Eindhoven</option>
                <option value="TELECOM SudParis">TELECOM SudParis</option>
                <option value="TU Universitaet Dortmund">TU Universitaet Dortmund</option>
                <option value="TU Vienna">TU Vienna</option>
                <option value="Turku ??niversitesi">Turku ??niversitesi</option>
                <option value="Universidad de Castilla-La Mancha">Universidad de Castilla-La Mancha</option>
                <option value="Universidad Pontificia Comillas de Madrid">Universidad Pontificia Comillas de Madrid</option>
                <option value="Universidade Catolica Portuguesa">Universidade Catolica Portuguesa</option>
                <option value="Universidade do Porto">Universidade do Porto</option>
                <option value="Universidade Nova de Lisboa">Universidade Nova de Lisboa</option>
                <option value="Universita degli Studi di Firenze">Universita degli Studi di Firenze</option>
                <option value="Universita degli Studi di L&#039;Aquila">Universita degli Studi di L&#039;Aquila</option>
                <option value="UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA">UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA</option>
                <option value="Universita degli Studi di Perugia">Universita degli Studi di Perugia</option>
                <option value="Universitaet Bayreuth">Universitaet Bayreuth</option>
                <option value="Universitat Autonoma de Barcelona">Universitat Autonoma de Barcelona</option>
                <option value="Universitat de Barcelona">Universitat de Barcelona</option>
                <option value="Universit??t Luzern">Universit??t Luzern</option>
                <option value="Universit?? Catholique de Lille (IESEG)">Universit?? Catholique de Lille (IESEG)</option>
                <option value="UNIVERSITE CATHOLIQUE DE LOUVAIN">UNIVERSITE CATHOLIQUE DE LOUVAIN</option>
                <option value="Universit?? de Bretagne Occidentale">Universit?? de Bretagne Occidentale</option>
                <option value="Universite Paris-Dauphine">Universite Paris-Dauphine</option>
                <option value="Universiteit Van Tilburg">Universiteit Van Tilburg</option>
                <option value="University of Applied Sciences Upper Austria">University of Applied Sciences Upper Austria</option>
                <option value="University of Bologna">University of Bologna</option>
                <option value="University of Deusto">University of Deusto</option>
                <option value="University of Dundee">University of Dundee</option>
                <option value="University of Edinburgh">University of Edinburgh</option>
                <option value="University of Limerick">University of Limerick</option>
                <option value="University of M??nster">University of M??nster</option>
                <option value="University of Southern Denmark">University of Southern Denmark</option>
                <option value="University of Twente">University of Twente</option>
                <option value="Univerversit?? Saint-Louis">Univerversit?? Saint-Louis</option>
                <option value="UNIWERSYTET SZCZECINSKI">UNIWERSYTET SZCZECINSKI</option>
                <option value="Utrecht ??niversitesi">Utrecht ??niversitesi</option>
                <option value="Var??ova ??niversitesi">Var??ova ??niversitesi</option>
                <option value="Vilnius ??niversitesi">Vilnius ??niversitesi</option>
                <option value="Vrije ??niversitesi">Vrije ??niversitesi</option>
                <option value="Warsaw School of Economics">Warsaw School of Economics</option>
                <option value="Waterford Institute of Technology">Waterford Institute of Technology</option>
                <option value="WHU - Otto Beisheim School of Management">WHU - Otto Beisheim School of Management</option>
              </Form.Select>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>4.</Form.Label>
              </Form.Group>
              <Form.Select aria-label="University Selection 4" onChange={(e) => setUni4(e.target.value)}>
                <option>Select</option>
                <option value="Aberystwyth University">Aberystwyth University</option>
                <option value="Adam Mickiewicz Universitesi">Adam Mickiewicz Universitesi</option>
                <option value="AGH University of Science and Technology">AGH University of Science and Technology</option>
                <option value="Akademia Sztuk Pi??knych w Gda??sku">Akademia Sztuk Pi??knych w Gda??sku</option>
                <option value="Amsterdam University College">Amsterdam University College</option>
                <option value="Architectural Institution in Prague">Architectural Institution in Prague</option>
                <option value="Aston University">Aston University</option>
                <option value="Athlone Institute of Technology">Athlone Institute of Technology</option>
                <option value="Bamberg ??niversitesi">Bamberg ??niversitesi</option>
                <option value="Bergen ??niversitesi">Bergen ??niversitesi</option>
                <option value="Bocconi University">Bocconi University</option>
                <option value="Bournemouth University">Bournemouth University</option>
                <option value="Ca Foscari University of Venice">Ca Foscari University of Venice</option>
                <option value="Cadiz ??niversitesi">Cadiz ??niversitesi</option>
                <option value="Corvinus University of Budapest">Corvinus University of Budapest</option>
                <option value="Cracow University of Economics">Cracow University of Economics</option>
                <option value="Eberhard Karls Universitat T??bingen">Eberhard Karls Universitat T??bingen</option>
                <option value="??cole Polytechnique F??d??rale (EPF)">??cole Polytechnique F??d??rale (EPF)</option>
                <option value="EDHEC Business School">EDHEC Business School</option>
                <option value="Erasmus Universiteit Rotterdam">Erasmus Universiteit Rotterdam</option>
                <option value="Erfurt ??niversitesi">Erfurt ??niversitesi</option>
                <option value="ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)">ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)</option>
                <option value="ESIEE Paris">ESIEE Paris</option>
                <option value="Eszterhazy Karoly Foiskola">Eszterhazy Karoly Foiskola</option>
                <option value="Free University of Bozen/Bolzano">Free University of Bozen/Bolzano</option>
                <option value="Friedrich-Alexander-Universitat Erlangen-N??rnberg">Friedrich-Alexander-Universitat Erlangen-N??rnberg</option>
                <option value="Ghent ??niversitesi">Ghent ??niversitesi</option>
                <option value="G??teborg ??niversitesi">G??teborg ??niversitesi</option>
                <option value="Groningen ??niversitesi">Groningen ??niversitesi</option>
                <option value="Hanzehogeschool Groningen">Hanzehogeschool Groningen</option>
                <option value="Helsinki Metropolia University of Applied Sciences">Helsinki Metropolia University of Applied Sciences</option>
                <option value="HOCHSCHULE F??R MUSIK UND THEATER HANNOVER">HOCHSCHULE F??R MUSIK UND THEATER HANNOVER</option>
                <option value="Hogeschool INHolland">Hogeschool INHolland</option>
                <option value="Huelva University">Huelva University</option>
                <option value="IBS - International Business School">IBS - International Business School</option>
                <option value="ICHEC Brussels Management School">ICHEC Brussels Management School</option>
                <option value="Institut Superieur de Traducteurs et Interpretes">Institut Superieur de Traducteurs et Interpretes</option>
                <option value="ISCTE IUL - Lisbon University Institute">ISCTE IUL - Lisbon University Institute</option>
                <option value="Johann Wolfgang Goethe University">Johann Wolfgang Goethe University</option>
                <option value="Katholieke Universiteit Leuven">Katholieke Universiteit Leuven</option>
                <option value="Kaunas Teknoloji ??niversitesi">Kaunas Teknoloji ??niversitesi</option>
                <option value="Kedge Business School">Kedge Business School</option>
                <option value="Kiel University">Kiel University</option>
                <option value="Kingston University">Kingston University</option>
                <option value="Konstanz University">Konstanz University</option>
                <option value="Leiden ??niversitesi">Leiden ??niversitesi</option>
                <option value="Leipzig ??niversitesi">Leipzig ??niversitesi</option>
                <option value="Leuphana Universitat L??neburg">Leuphana Universitat L??neburg</option>
                <option value="Liege ??niversitesi">Liege ??niversitesi</option>
                <option value="Ljubljana ??niversitesi">Ljubljana ??niversitesi</option>
                <option value="London Metropolitan University">London Metropolitan University</option>
                <option value="Maastricht University">Maastricht University</option>
                <option value="Malm?? ??niversitesi">Malm?? ??niversitesi</option>
                <option value="Mannheim ??niversitesi">Mannheim ??niversitesi</option>
                <option value="Masaryk ??niversitesi">Masaryk ??niversitesi</option>
                <option value="Minho ??niversitesi">Minho ??niversitesi</option>
                <option value="Neoma Business School">Neoma Business School</option>
                <option value="NHTV Breda University of Applied Sciences">NHTV Breda University of Applied Sciences</option>
                <option value="Otto-von-Guericke Universitat Magdeburg">Otto-von-Guericke Universitat Magdeburg</option>
                <option value="Pforzheim University">Pforzheim University</option>
                <option value="Politechnika Gdanska">Politechnika Gdanska</option>
                <option value="Politecnico di Milano">Politecnico di Milano</option>
                <option value="Polytechnic of Bari">Polytechnic of Bari</option>
                <option value="Prag Sahne Sanatlar Akademisi">Prag Sahne Sanatlar Akademisi</option>
                <option value="Prag'daki Charles ??niversitesi">Prag'daki Charles ??niversitesi</option>
                <option value="Radboud University Nijmegen">Radboud University Nijmegen</option>
                <option value="RISEBA">RISEBA</option>
                <option value="Roskilde Universitesi">Roskilde Universitesi</option>
                <option value="Ruhr-Universitat Bochum">Ruhr-Universitat Bochum</option>
                <option value="Ruprecht-Karls Universitat Heidelberg">Ruprecht-Karls Universitat Heidelberg</option>
                <option value="Saarland ??niversitesi">Saarland ??niversitesi</option>
                <option value="Sciences Po">Sciences Po</option>
                <option value="Sheffield ??niversitesi">Sheffield ??niversitesi</option>
                <option value="Strasbourg ??niversitesi">Strasbourg ??niversitesi</option>
                <option value="SZENT ISTVAN UNIVERSITY">SZENT ISTVAN UNIVERSITY</option>
                <option value="Tartu ??niversitesi">Tartu ??niversitesi</option>
                <option value="Technical University of Berlin">Technical University of Berlin</option>
                <option value="Technische Universiteti Eindhoven">Technische Universiteti Eindhoven</option>
                <option value="TELECOM SudParis">TELECOM SudParis</option>
                <option value="TU Universitaet Dortmund">TU Universitaet Dortmund</option>
                <option value="TU Vienna">TU Vienna</option>
                <option value="Turku ??niversitesi">Turku ??niversitesi</option>
                <option value="Universidad de Castilla-La Mancha">Universidad de Castilla-La Mancha</option>
                <option value="Universidad Pontificia Comillas de Madrid">Universidad Pontificia Comillas de Madrid</option>
                <option value="Universidade Catolica Portuguesa">Universidade Catolica Portuguesa</option>
                <option value="Universidade do Porto">Universidade do Porto</option>
                <option value="Universidade Nova de Lisboa">Universidade Nova de Lisboa</option>
                <option value="Universita degli Studi di Firenze">Universita degli Studi di Firenze</option>
                <option value="Universita degli Studi di L&#039;Aquila">Universita degli Studi di L&#039;Aquila</option>
                <option value="UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA">UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA</option>
                <option value="Universita degli Studi di Perugia">Universita degli Studi di Perugia</option>
                <option value="Universitaet Bayreuth">Universitaet Bayreuth</option>
                <option value="Universitat Autonoma de Barcelona">Universitat Autonoma de Barcelona</option>
                <option value="Universitat de Barcelona">Universitat de Barcelona</option>
                <option value="Universit??t Luzern">Universit??t Luzern</option>
                <option value="Universit?? Catholique de Lille (IESEG)">Universit?? Catholique de Lille (IESEG)</option>
                <option value="UNIVERSITE CATHOLIQUE DE LOUVAIN">UNIVERSITE CATHOLIQUE DE LOUVAIN</option>
                <option value="Universit?? de Bretagne Occidentale">Universit?? de Bretagne Occidentale</option>
                <option value="Universite Paris-Dauphine">Universite Paris-Dauphine</option>
                <option value="Universiteit Van Tilburg">Universiteit Van Tilburg</option>
                <option value="University of Applied Sciences Upper Austria">University of Applied Sciences Upper Austria</option>
                <option value="University of Bologna">University of Bologna</option>
                <option value="University of Deusto">University of Deusto</option>
                <option value="University of Dundee">University of Dundee</option>
                <option value="University of Edinburgh">University of Edinburgh</option>
                <option value="University of Limerick">University of Limerick</option>
                <option value="University of M??nster">University of M??nster</option>
                <option value="University of Southern Denmark">University of Southern Denmark</option>
                <option value="University of Twente">University of Twente</option>
                <option value="Univerversit?? Saint-Louis">Univerversit?? Saint-Louis</option>
                <option value="UNIWERSYTET SZCZECINSKI">UNIWERSYTET SZCZECINSKI</option>
                <option value="Utrecht ??niversitesi">Utrecht ??niversitesi</option>
                <option value="Var??ova ??niversitesi">Var??ova ??niversitesi</option>
                <option value="Vilnius ??niversitesi">Vilnius ??niversitesi</option>
                <option value="Vrije ??niversitesi">Vrije ??niversitesi</option>
                <option value="Warsaw School of Economics">Warsaw School of Economics</option>
                <option value="Waterford Institute of Technology">Waterford Institute of Technology</option>
                <option value="WHU - Otto Beisheim School of Management">WHU - Otto Beisheim School of Management</option>
              </Form.Select>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>5.</Form.Label>
              </Form.Group>
              <Form.Select aria-label="University Selection 5" onChange={(e) => setUni5(e.target.value)}>
                <option>Select</option>
                <option value="Aberystwyth University">Aberystwyth University</option>
                <option value="Adam Mickiewicz Universitesi">Adam Mickiewicz Universitesi</option>
                <option value="AGH University of Science and Technology">AGH University of Science and Technology</option>
                <option value="Akademia Sztuk Pi??knych w Gda??sku">Akademia Sztuk Pi??knych w Gda??sku</option>
                <option value="Amsterdam University College">Amsterdam University College</option>
                <option value="Architectural Institution in Prague">Architectural Institution in Prague</option>
                <option value="Aston University">Aston University</option>
                <option value="Athlone Institute of Technology">Athlone Institute of Technology</option>
                <option value="Bamberg ??niversitesi">Bamberg ??niversitesi</option>
                <option value="Bergen ??niversitesi">Bergen ??niversitesi</option>
                <option value="Bocconi University">Bocconi University</option>
                <option value="Bournemouth University">Bournemouth University</option>
                <option value="Ca Foscari University of Venice">Ca Foscari University of Venice</option>
                <option value="Cadiz ??niversitesi">Cadiz ??niversitesi</option>
                <option value="Corvinus University of Budapest">Corvinus University of Budapest</option>
                <option value="Cracow University of Economics">Cracow University of Economics</option>
                <option value="Eberhard Karls Universitat T??bingen">Eberhard Karls Universitat T??bingen</option>
                <option value="??cole Polytechnique F??d??rale (EPF)">??cole Polytechnique F??d??rale (EPF)</option>
                <option value="EDHEC Business School">EDHEC Business School</option>
                <option value="Erasmus Universiteit Rotterdam">Erasmus Universiteit Rotterdam</option>
                <option value="Erfurt ??niversitesi">Erfurt ??niversitesi</option>
                <option value="ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)">ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)</option>
                <option value="ESIEE Paris">ESIEE Paris</option>
                <option value="Eszterhazy Karoly Foiskola">Eszterhazy Karoly Foiskola</option>
                <option value="Free University of Bozen/Bolzano">Free University of Bozen/Bolzano</option>
                <option value="Friedrich-Alexander-Universitat Erlangen-N??rnberg">Friedrich-Alexander-Universitat Erlangen-N??rnberg</option>
                <option value="Ghent ??niversitesi">Ghent ??niversitesi</option>
                <option value="G??teborg ??niversitesi">G??teborg ??niversitesi</option>
                <option value="Groningen ??niversitesi">Groningen ??niversitesi</option>
                <option value="Hanzehogeschool Groningen">Hanzehogeschool Groningen</option>
                <option value="Helsinki Metropolia University of Applied Sciences">Helsinki Metropolia University of Applied Sciences</option>
                <option value="HOCHSCHULE F??R MUSIK UND THEATER HANNOVER">HOCHSCHULE F??R MUSIK UND THEATER HANNOVER</option>
                <option value="Hogeschool INHolland">Hogeschool INHolland</option>
                <option value="Huelva University">Huelva University</option>
                <option value="IBS - International Business School">IBS - International Business School</option>
                <option value="ICHEC Brussels Management School">ICHEC Brussels Management School</option>
                <option value="Institut Superieur de Traducteurs et Interpretes">Institut Superieur de Traducteurs et Interpretes</option>
                <option value="ISCTE IUL - Lisbon University Institute">ISCTE IUL - Lisbon University Institute</option>
                <option value="Johann Wolfgang Goethe University">Johann Wolfgang Goethe University</option>
                <option value="Katholieke Universiteit Leuven">Katholieke Universiteit Leuven</option>
                <option value="Kaunas Teknoloji ??niversitesi">Kaunas Teknoloji ??niversitesi</option>
                <option value="Kedge Business School">Kedge Business School</option>
                <option value="Kiel University">Kiel University</option>
                <option value="Kingston University">Kingston University</option>
                <option value="Konstanz University">Konstanz University</option>
                <option value="Leiden ??niversitesi">Leiden ??niversitesi</option>
                <option value="Leipzig ??niversitesi">Leipzig ??niversitesi</option>
                <option value="Leuphana Universitat L??neburg">Leuphana Universitat L??neburg</option>
                <option value="Liege ??niversitesi">Liege ??niversitesi</option>
                <option value="Ljubljana ??niversitesi">Ljubljana ??niversitesi</option>
                <option value="London Metropolitan University">London Metropolitan University</option>
                <option value="Maastricht University">Maastricht University</option>
                <option value="Malm?? ??niversitesi">Malm?? ??niversitesi</option>
                <option value="Mannheim ??niversitesi">Mannheim ??niversitesi</option>
                <option value="Masaryk ??niversitesi">Masaryk ??niversitesi</option>
                <option value="Minho ??niversitesi">Minho ??niversitesi</option>
                <option value="Neoma Business School">Neoma Business School</option>
                <option value="NHTV Breda University of Applied Sciences">NHTV Breda University of Applied Sciences</option>
                <option value="Otto-von-Guericke Universitat Magdeburg">Otto-von-Guericke Universitat Magdeburg</option>
                <option value="Pforzheim University">Pforzheim University</option>
                <option value="Politechnika Gdanska">Politechnika Gdanska</option>
                <option value="Politecnico di Milano">Politecnico di Milano</option>
                <option value="Polytechnic of Bari">Polytechnic of Bari</option>
                <option value="Prag Sahne Sanatlar Akademisi">Prag Sahne Sanatlar Akademisi</option>
                <option value="Prag'daki Charles ??niversitesi">Prag'daki Charles ??niversitesi</option>
                <option value="Radboud University Nijmegen">Radboud University Nijmegen</option>
                <option value="RISEBA">RISEBA</option>
                <option value="Roskilde Universitesi">Roskilde Universitesi</option>
                <option value="Ruhr-Universitat Bochum">Ruhr-Universitat Bochum</option>
                <option value="Ruprecht-Karls Universitat Heidelberg">Ruprecht-Karls Universitat Heidelberg</option>
                <option value="Saarland ??niversitesi">Saarland ??niversitesi</option>
                <option value="Sciences Po">Sciences Po</option>
                <option value="Sheffield ??niversitesi">Sheffield ??niversitesi</option>
                <option value="Strasbourg ??niversitesi">Strasbourg ??niversitesi</option>
                <option value="SZENT ISTVAN UNIVERSITY">SZENT ISTVAN UNIVERSITY</option>
                <option value="Tartu ??niversitesi">Tartu ??niversitesi</option>
                <option value="Technical University of Berlin">Technical University of Berlin</option>
                <option value="Technische Universiteti Eindhoven">Technische Universiteti Eindhoven</option>
                <option value="TELECOM SudParis">TELECOM SudParis</option>
                <option value="TU Universitaet Dortmund">TU Universitaet Dortmund</option>
                <option value="TU Vienna">TU Vienna</option>
                <option value="Turku ??niversitesi">Turku ??niversitesi</option>
                <option value="Universidad de Castilla-La Mancha">Universidad de Castilla-La Mancha</option>
                <option value="Universidad Pontificia Comillas de Madrid">Universidad Pontificia Comillas de Madrid</option>
                <option value="Universidade Catolica Portuguesa">Universidade Catolica Portuguesa</option>
                <option value="Universidade do Porto">Universidade do Porto</option>
                <option value="Universidade Nova de Lisboa">Universidade Nova de Lisboa</option>
                <option value="Universita degli Studi di Firenze">Universita degli Studi di Firenze</option>
                <option value="Universita degli Studi di L&#039;Aquila">Universita degli Studi di L&#039;Aquila</option>
                <option value="UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA">UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA</option>
                <option value="Universita degli Studi di Perugia">Universita degli Studi di Perugia</option>
                <option value="Universitaet Bayreuth">Universitaet Bayreuth</option>
                <option value="Universitat Autonoma de Barcelona">Universitat Autonoma de Barcelona</option>
                <option value="Universitat de Barcelona">Universitat de Barcelona</option>
                <option value="Universit??t Luzern">Universit??t Luzern</option>
                <option value="Universit?? Catholique de Lille (IESEG)">Universit?? Catholique de Lille (IESEG)</option>
                <option value="UNIVERSITE CATHOLIQUE DE LOUVAIN">UNIVERSITE CATHOLIQUE DE LOUVAIN</option>
                <option value="Universit?? de Bretagne Occidentale">Universit?? de Bretagne Occidentale</option>
                <option value="Universite Paris-Dauphine">Universite Paris-Dauphine</option>
                <option value="Universiteit Van Tilburg">Universiteit Van Tilburg</option>
                <option value="University of Applied Sciences Upper Austria">University of Applied Sciences Upper Austria</option>
                <option value="University of Bologna">University of Bologna</option>
                <option value="University of Deusto">University of Deusto</option>
                <option value="University of Dundee">University of Dundee</option>
                <option value="University of Edinburgh">University of Edinburgh</option>
                <option value="University of Limerick">University of Limerick</option>
                <option value="University of M??nster">University of M??nster</option>
                <option value="University of Southern Denmark">University of Southern Denmark</option>
                <option value="University of Twente">University of Twente</option>
                <option value="Univerversit?? Saint-Louis">Univerversit?? Saint-Louis</option>
                <option value="UNIWERSYTET SZCZECINSKI">UNIWERSYTET SZCZECINSKI</option>
                <option value="Utrecht ??niversitesi">Utrecht ??niversitesi</option>
                <option value="Var??ova ??niversitesi">Var??ova ??niversitesi</option>
                <option value="Vilnius ??niversitesi">Vilnius ??niversitesi</option>
                <option value="Vrije ??niversitesi">Vrije ??niversitesi</option>
                <option value="Warsaw School of Economics">Warsaw School of Economics</option>
                <option value="Waterford Institute of Technology">Waterford Institute of Technology</option>
                <option value="WHU - Otto Beisheim School of Management">WHU - Otto Beisheim School of Management</option>
              </Form.Select>
              <Form>
                <Form.Group className="pt-4 mb-1" controlId="applicationFormEditStudentIDForm">
                  <Form.Label>Preferred Semester:</Form.Label>
                  <Form.Check
                    inline
                    label="Fall"
                    name="group1"
                    value = "Fall"
                    onClick={(e)=> {setSelectedSemester(e.target.value); }}
                    type='radio'
                    id={`inline-radio-1`}
                    className="ms-1"
                  />
                  <Form.Check
                    inline
                    label="Spring"
                    name="group1"
                    value = "Spring"
                    onClick={(e)=>setSelectedSemester(e.target.value)}
                    type='radio'
                    id={`inline-radio-2`}
                  />
                </Form.Group>
              </Form>
            </Form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"> 
            <br /><br /><br /><br /><br /><br /><br />
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br /><br />
            <Button style={{ backgroundColor: "#3C7479" }} onClick={submitForm}>Submit</Button>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}