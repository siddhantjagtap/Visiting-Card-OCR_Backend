const contactService = require("./contacts.service");

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching contacts" });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await contactService.getContactById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact" });
  }
};

exports.createContact = async (req, res) => {
  try {
    const newContact = await contactService.createContact(req.body);
    res.status(201).json({ message: "Contact added successfully", newContact });
  } catch (error) {
    res.status(500).json({ error: "Error adding contact" });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const updatecontact = await contactService.updateContact(
      req.params.id,
      req.body
    );
    res.json({ message: "Contact updated successfully", updatecontact });
  } catch (error) {
    res.status(500).json({ error: "Error update contact" });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await contactService.deleteContact(req.params.id);
    res.json({ message: "contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting contact" });
  }
};
