import { useEffect, useState } from "react";
import dayjs from "dayjs";
import ContactCard from "./components/ContactCard";
import Title from "./components/Title";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const newContacts = JSON.parse(localStorage.getItem("contacts"));
    setContacts(newContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const calculateDaysToBD = (date) => {
    return dayjs(date).year(dayjs().year()).diff(dayjs(), "days");
  };

  const sortHandler = (a, b) => {
    switch (selectedOption) {
      case "Z-A":
        return a.name.first < b.name.first
          ? 1
          : b.name.first < a.name.first
          ? -1
          : 0;
      case "birthday":
        return calculateDaysToBD(a.dob.date) - calculateDaysToBD(b.dob.date);
      case "A-Z":
      default:
        return a.name.first > b.name.first
          ? 1
          : b.name.first > a.name.first
          ? -1
          : 0;
    }
  };

  const DeleteHandler = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id.value != contactId));
  };

  return (
    <div>
      <Title
        contacts={contacts}
        setContacts={setContacts}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div>
        {contacts.length == 0 && <h2>The list is empty</h2>}
        {contacts.sort(sortHandler).map((contact, i) => {
          return (
            <ContactCard
              key={`${contact.id.value}${i}`}
              contact={contact}
              onDelete={DeleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
