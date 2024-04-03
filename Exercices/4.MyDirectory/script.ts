// Définition du type de données pour un contact
type Contact = {
    firstName: string; // Prénom du contact
    lastName: string; // Nom de famille du contact
    phoneNumber: string; // Numéro de téléphone du contact
  };
  
  // Classe représentant un répertoire de contacts
  class Directory {
    private contacts: Contact[]; // Tableau contenant les contacts
  
    // Constructeur de la classe
    constructor() {
        this.contacts = []; // Initialise le tableau de contacts
        console.log("Welcome to your directory!"); // Affiche un message de bienvenue
    }

  // Méthode pour afficher l'aide pour les commandes disponibles
  help(): void {
    console.log("Command Help:");
    console.log("Add: Add a new contact to the directory.");
    console.log("List: List all contacts in the directory.");
    console.log("Delete: Delete a contact from the directory.");
    console.log("Stop: Close the directory.");
}

// Méthode pour ajouter un contact au répertoire
add(firstName: string, lastName: string, phoneNumber: string): void {
    if (!phoneNumber.startsWith("06")) { // Vérifie si le numéro de téléphone commence par "06"
        console.log("Phone number must start with '06'.");
        return; // Arrête l'exécution de la méthode
    }

    const contact: Contact = { // Crée un nouvel objet contact
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
    };

    this.contacts.push(contact); // Ajoute le contact au tableau
    console.log("Contact added successfully.");
}

  // Méthode pour lister tous les contacts du répertoire
  list(): void {
      console.log("Contacts in the directory:");
      this.contacts.forEach((contact, index) => { // Parcourt tous les contacts
          console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.phoneNumber}`);
      });
  }

  // Méthode pour supprimer un contact du répertoire
  delete(index: number): void {
      if (index < 0 || index >= this.contacts.length) { // Vérifie si l'index est valide
          console.log("Invalid contact index.");
          return; // Arrête l'exécution de la méthode
      }

      this.contacts.splice(index, 1); // Supprime le contact du tableau
      console.log("Contact deleted successfully.");
  }

  // Méthode pour arrêter le répertoire
  stop(): void {
      console.log("Closing the directory. Goodbye!");
  }
}

// Utilisation du répertoire
const directory = new Directory(); // Crée une instance de la classe Directory
directory.help(); // Affiche l'aide
directory.add("Francis", "Munabeno", "0652586576"); // Ajoute un contact
directory.list(); // Affiche la liste des contacts
directory.delete(0); // Supprime le premier contact
directory.stop(); // Arrête le répertoire
