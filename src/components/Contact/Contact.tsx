import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Great things happen when we collaborate </p>
        <p>let’s connect and grow together!!</p>
      </header>
      <div className="contacts">
  <div>
    <a href="mailto:sujalpeswani@jklu.edu.in"><img src={emailIcon} alt="Email" /></a>
    <a href="mailto:sujalpeswani@jklu.edu.in">sujalpeswani@jklu.edu.in</a>
  </div>
  <div>
    <a href="tel:+918696336893"><img src={phoneIcon} alt="Phone No" /></a>
    <a href="tel:+918696336893">(+91) 8696336893</a>
  </div>  
</div>

      <Form></Form>
    </Container>
  )
}