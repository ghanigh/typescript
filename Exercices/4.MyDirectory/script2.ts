import readline from 'readline'; // Importation du module readline

// Création d'une interface pour définir la structure des contacts
interface Person {
  firstname: string; // Prénom
  lastname: string; // Nom de famille
  phone: string; // Numéro de téléphone
}

// Déclaration d'une liste pour stocker les contacts
let list: Person[] = [];

// Fonction de bienvenue
const welcome = (): void => {
  console.log("Hello, I'm your directory!"); // Message de bienvenue
  console.log("Enter /help to display a list of commands."); // Instructions pour afficher les commandes disponibles
  console.log("Otherwise just enter any existing commands."); // Instructions pour utiliser les commandes
  console.log(' ');
  command(); // Appel de la fonction pour saisir une commande
}

// Fonction pour traiter les commandes de l'utilisateur
const command = (): void => {
  // Pose une question à l'utilisateur pour obtenir une commande
  readline.question('Command : ', (command) => {
    switch (command) {
      case '/help':
        help(); // Affiche l'aide pour les commandes
        break;
      case '/stop':
        stop(); // Arrête l'application
        break;
      case '/add':
        add(); // Ajoute un nouveau contact
        break;
      case '/list':
        getList(); // Affiche la liste des contacts
        break;
      case '/delete':
        deletePerson(); // Supprime un contact
        break;
      default:
        console.log(`Unknown command ${command}.`); // Affiche un message d'erreur pour les commandes inconnues
    }
  });
}

// Fonction pour afficher l'aide et les détails des différentes commandes
const help = (): void => {
  console.log("Here are the details of different available commands:");
  console.log("/help : Display all the available commands");
  console.log('/stop : Quit your beloved application');
  console.log('/add : Add a new contact in your directory');
  console.log('/list : List all the contacts you have in your beloved directory');
  console.log('/delete : Delete one contact by specifying his ID');
  console.log(' ');
  command(); // Redemande une commande après avoir affiché l'aide
}

// Fonction pour ajouter un nouveau contact
const add = async (): Promise<void> => {
  const firstname = await addFirstname(); // Demande le prénom
  const lastname = await addLastname(); // Demande le nom de famille
  const phone = await addPhone(firstname, lastname); // Demande le numéro de téléphone

  const person: Person = { // Crée un nouvel objet Person avec les informations du contact
    firstname,
    lastname,
    phone,
  };

  list.push(person); // Ajoute le contact à la liste
  console.log('Contact added!'); // Affiche un message de confirmation
  command(); // Redemande une commande après avoir ajouté le contact
};

// Fonction pour demander et valider le prénom du contact
const addFirstname = (): Promise<string> => {
  return new Promise((resolve) => {
    readline.question('What is the first name of your contact : ', (firstname: string) => {
      const firstnameValue = firstname.charAt(0).toUpperCase() + firstname.slice(1); // Met en majuscule la première lettre du prénom
      resolve(firstnameValue); // Renvoie le prénom validé
    });
  });
}

// Fonction pour demander et valider le nom de famille du contact
const addLastname = (): Promise<string> => {
  return new Promise((resolve) => {
    readline.question('What is the last name of your contact : ', (lastname: string) => {
      const lastnameValue = lastname.charAt(0).toUpperCase() + lastname.slice(1); // Met en majuscule la première lettre du nom de famille
      resolve(lastnameValue); // Renvoie le nom de famille validé
    });
  });
}

// Fonction pour demander et valider le numéro de téléphone du contact
const addPhone = async (firstname: string, lastname: string): Promise<string> => {
  let numero = '';
  while (!/^(06)\d{8}$/.test(numero)) { // Vérifie que le numéro de téléphone commence par "06" et comporte 10 chiffres
    numero = await new  Promise((resolve) => {
      readline.question(`What is the phone number of ${firstname} ${lastname} : `, (numero: string) => {
        resolve(numero); // Renvoie le numéro de téléphone
      });
    });
    if (!/^(06)\d{8}$/.test(numero)) {
      console.log('the phone number must start with “06” and contain 10 digits') // Affiche un message d'erreur si le numéro est invalide
    }
  }
  return numero; // Renvoie le numéro de téléphone validé
}

// Fonction pour afficher la liste des contacts
const getList = (): void => {
  if (list.length > 0) {
    console.log('Here is the list of all your contacts:');
    list.map((person: Person, index: number) => {
      console.log(` ID : ${index} ==> ${person.firstname} ${person.lastname}`); // Affiche l'ID et le nom complet de chaque contact
      console.log(` Phone number : ${person.phone}`); // Affiche le numéro de téléphone de chaque contact
    });
    command(); // Redemande une commande après avoir affiché la liste des contacts
  } else {
    console.log('You have no contact in your directory'); // Affiche un message si la liste des contacts est vide
    command(); // Redemande une commande
  };
}

// Fonction pour supprimer un contact
const deletePerson = (): void => {
  if (list.length > 0) {
    getList(); // Affiche la liste des contacts
    readline.question('Which contact do you want to delete? ', (id: string) => {
      const idNum = parseInt(id);
      if (idNum >= 0 && idNum < list.length) {
        list.splice(idNum, 1); // Supprime le contact de la liste
        console.log('Contact deleted!'); // Affiche un message de confirmation
        command(); // Redemande une commande après la suppression du contact
      } else {
        console.log('Please enter a valid ID'); // Affiche un message d'erreur si l'ID est invalide
      }
    });
  } else {
    console.log('You have no contact in your directory'); // Affiche un message si la liste des contacts est vide
    command(); // Redemande une commande
  };
}

// Fonction pour arrêter l'application
const stop = (): void => {
  console.log('Thank you for using our application!'); // Affiche un message de remerciement
  readline.close(); // Ferme l'interface readline
}

// Appel de la fonction de bienvenue pour démarrer l'application
welcome();
