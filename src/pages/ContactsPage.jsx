// import { useState, useEffect } from 'react';
import Header from "components/Header";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";

export default function ContactsPage() {

  return (
    <>
      <Header text='Phonebook contacts'/>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
