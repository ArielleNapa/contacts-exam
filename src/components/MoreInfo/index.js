import dayjs from "dayjs";
import "./MoreInfo.css";

const InfoLine = ({ label, children }) => (
  <div className="info-line">
    <label>{label}: </label>
    <p>{children}</p>
  </div>
);
const MoreInfo = ({ contact }) => {
  return (
    <>
      <header className="header">
        <img alt="image" src={contact.picture.medium} />
        <h2 className="header-title">
          {contact.name.title} {contact.name.first} {contact.name.last}
        </h2>
      </header>
      <main className="contents">
        <InfoLine label="Address">
          {contact.location.street.number} {contact.location.street.name},
          {contact.location.city}, {contact.location.country},
          {contact.location.postcode}, {contact.location.state}
        </InfoLine>
        <InfoLine label="Phone-number">{contact.cell}</InfoLine>
        <InfoLine label="Email">
          <a href={`mailto:${contact.email}`} target="_blank">
            {contact.email}
          </a>
        </InfoLine>
        <InfoLine label="Birthday">
          {dayjs(contact.dob.date).format("DD/MM")}
        </InfoLine>
        <InfoLine label="Age">{contact.dob.age}</InfoLine>
      </main>
    </>
  );
};
export default MoreInfo;
