import { Container, Row,Col } from "react-bootstrap";


export default function Back() {
  return (
    <Container fluid className=" position-relative w-100 m-0 p-0" style={{height:'600px'}}>
        <Row className="position-relative w-100 h-100 m-0">
            <Col className="position-relative top-0 w-50 h-100 p-0" >
                <Row className="textabs w-100 z-1 text-white text-start">
                    <p>Travel</p>
                    <p>Reservation</p>
                    <p>Form</p>
                </Row>
                
                <img className="object-fit-cover position-relative w-100 h-100" src="https://cdn.pixabay.com/photo/2016/11/29/04/18/hot-air-balloons-1867279_960_720.jpg"></img>
            </Col>
            <Col className="position-relative top-0 w-50 h-100 p-0 ">
            <div className="buble1"><p>Demotes Mandatory</p></div>
            <div className="buble2"></div>
            <div className="buble3"></div>
            <div className="glass">
                <form style={{position:'relative',borderRadius:'10px',height:'100%',display:'flex',flexDirection:'column',flexWrap:'wrap',textAlign:'start',margin:'15px'}}>
                    <label for='name'>Full Name</label>
                    <input type="text" name="name" ></input>
                    <label>Email Address</label>
                    <input type="email" name="email"></input>
                    <label>Select Tour Package</label>
                    <select >
                        <option value="option1">Goa</option>
                    </select>
                    <label>Arrival Date</label>
                    <input type="date" name="date"></input>
                    <label>Number of Person</label>
                    <input type="number" name="number"></input>
                    <label>What do you want to avail?</label>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{alignItems:'center',display:'flex'}}>
                        <label for='bo'>Boarding</label>
                    <input type="checkbox" name="bo"></input>
                    </div>
                    <div style={{alignItems:'center',display:'flex'}}>
                        <label for='bo'>Boarding</label>
                    <input type="checkbox" name="bo"></input>
                    </div>
                    <div style={{alignItems:'center',display:'flex'}}>
                        <label for='bo'>Boarding</label>
                    <input type="checkbox" name="bo"></input>
                    </div>
                    </div>
                    <label>Discound Coupon Code</label>
                    <input type="number"></input>
                    <label for="ac">Terms and Conditions</label>
                    <div>
                        <label>I Agree</label>
                        <input type="radio" name="ac"></input>
                        <label>I Disagre</label>
                        <input type="radio" name="ac"></input>
                    </div>
                    <input type="submit" style={{backgroundColor:'#439fab',color:'white',borderRadius:'2px'}} value="Complete Reservation"></input>
                    
                    
                </form>
            </div>
            </Col>

        </Row>
    </Container>
  );
}