import React from "react";
import "./Contact.css";
import { Card } from "../../components/Card";
import { SiHandshake } from "react-icons/si";

function Contact() {
  return (
    <>
      <div id="contact" className="container contact__container">
        <div className="section__header">
          <h2>Contact Me</h2>
        </div>
        <div className="contact__body">
          <Card className="contact__card">
            <i className="fa-solid fa-envelope contact__icon" />
            <h4>Email</h4>
            <h5>zachtl13@yahoo.com</h5>
            <a
              href="mailto:zachtl13@yahoo.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </Card>
          <Card className="contact__card">
            <i className="fa-brands fa-linkedin contact__icon" />
            <h4>LinkedIn</h4>
            <h5>Zachary Long</h5>
            <a
              href="https://www.linkedin.com/in/zachlong-42/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </Card>
          <Card className="contact__card">
            <SiHandshake className="contact__icon" />
            <h4>Handshake</h4>
            <h5>Zachary Long</h5>
            <a
              href="https://app.joinhandshake.com/stu/users/10966478"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Contact;
