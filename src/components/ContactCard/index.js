import { useState } from "react";
import MoreInfo from "../MoreInfo";
import Modal from "../Modal";
import DeleteContact from "../DeleteContact";
import "./ContactCard.css";

const ContactCard = ({ contact, onDelete }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [removeContact, setRemoveContact] = useState(false);

  const ShowMoreInfoHandler = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const DeleteContactHandler = () => {
    setRemoveContact(!removeContact);
  };

  const isMale = contact.gender == "male";
  return (
    <div className="home-page">
      <div className="expense-item">
        <div
          className={`expense-item__description ${isMale ? "male" : "female"}`}
        >
          <img alt="image" src={contact.picture.medium} />
          <div className="expense-item__description">
            <h2>
              {contact.name.title} {contact.name.first} {contact.name.last}
            </h2>

            <a href={`mailto:${contact.email}`} target="_blank">
              <p>{contact.email}</p>
            </a>
          </div>
        </div>

        <button
          className="button-remove"
          onClick={() => DeleteContactHandler()}
        >
          Remove
        </button>
        <Modal toggle={DeleteContactHandler} show={removeContact}>
          <DeleteContact contact={contact} onDelete={onDelete} />
        </Modal>
        <button className="button" onClick={() => ShowMoreInfoHandler()}>
          More Information
        </button>
        <Modal toggle={ShowMoreInfoHandler} show={showMoreInfo}>
          <MoreInfo contact={contact} />
        </Modal>
      </div>
    </div>
  );
};

export default ContactCard;
