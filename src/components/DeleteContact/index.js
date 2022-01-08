import "../MoreInfo/MoreInfo.css";
import "./DeleteContact.css";
const DeleteContact = ({ contact, onDelete }) => {
  return (
    <div>
      <main className="contents">
        <p>Is this what you want to delete?</p>
      </main>
      <footer className="footer">
        <button
          className="button-remove"
          onClick={() => onDelete(contact.id.value)}
        >
          Yes
        </button>
      </footer>
    </div>
  );
};
export default DeleteContact;
