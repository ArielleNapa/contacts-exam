import { useEffect, useState } from "react";
import { fetchContacts } from "../../API/Api";
import "./Title.css";

const Title = ({
  contacts,
  setContacts,
  selectedOption,
  setSelectedOption,
}) => {
  const [uniqCountries, setUniqCountries] = useState([]);

  useEffect(() => {
    const tempUniqCountries = [];
    contacts.forEach((contact) => {
      if (!tempUniqCountries.includes(contact.location.country)) {
        tempUniqCountries.push(contact.location.country);
      }
    });
    setUniqCountries(tempUniqCountries);
  }, [contacts]);

  const AddContactHandler = async () => {
    const newContact = await fetchContacts(1);
    if (newContact == "Failed") {
      alert("Oops, looks like something went wrong:(");
    } else {
      const isExists = contacts.find(
        (contact) => contact.id.value == newContact.results[0].id.value
      );
      if (isExists) {
        AddContactHandler();
      } else {
        setContacts([...contacts, ...newContact.results]);
      }
    }
  };

  const changeOptionHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="title">
      <div className="logo">
        <img src="/namogoo-logo.png" alt="logo" />
      </div>
      <h1>WELCOME TO NAMOGOO CONTACT LIST!</h1>
      <p>Number of people in the list: {contacts.length}</p>
      <p>Number of different countries: {uniqCountries.length} </p>
      <section>
        <button className="button" onClick={AddContactHandler}>
          Add Contact
        </button>
        <section className="sort-by">
          <p>Sort By:</p>
          <select
            className="sort-selction"
            value={selectedOption}
            onChange={changeOptionHandler}
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="birthday">Closest birthday date</option>
          </select>
        </section>
      </section>
    </div>
  );
};
export default Title;
