import * as readline from 'readline';

// Crée une interface de lecture/écriture pour la saisie utilisateur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pose une question à l'utilisateur
rl.question("Votre prénom ? ", (answer) => {
  console.log(answer); // Affiche la réponse de l'utilisateur
});

// Définit le type de données pour un contact
type Contact = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

// Classe représentant un répertoire de contacts
class Directory {
  private contacts: Contact[]; // Tableau contenant les contacts

  // Constructeur de la classe
  constructor() {
    this.contacts = []; // Initialise le tableau de contacts
    console.log("Bienvenue dans votre répertoire !"); // Affiche un message de bienvenue
  }

  // Méthode affichant l'aide pour les commandes disponibles
  help(): void {
    console.log("Commande Aide :");
    console.log("Ajouter : Ajouter un nouveau contact au répertoire.");
    console.log("Liste : Lister tous les contacts du répertoire.");
    console.log("Supprimer : Supprimer un contact du répertoire.");
    console.log("Arrêter : Fermer le répertoire.");
  }

  // Méthode pour ajouter un contact au répertoire
  add(firstName: string, lastName: string, phoneNumber: string): void {
    if (!phoneNumber.startsWith("06")) { // Vérifie si le numéro de téléphone commence par "06"
      console.log("Le numéro de téléphone doit commencer par '06'.");
      return; // Arrête l'exécution de la méthode
    }
    
    const contact: Contact = { // Crée un nouvel objet contact
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber
    };

    this.contacts.push(contact); // Ajoute le contact au tableau
    console.log("Contact ajouté avec succès.");
  }

  // Méthode pour lister tous les contacts du répertoire
  list(): void {
    console.log("Contacts dans le répertoire :");
    this.contacts.forEach((contact, index) => { // Parcourt tous les contacts
      console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.phoneNumber}`);
    });
  }
}
