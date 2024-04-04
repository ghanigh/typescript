import * as readline from 'readline';

// Définition de l'interface IPerson pour représenter un contact
interface IPerson {
  firstname: string; // Prénom du contact
  lastname: string; // Nom de famille du contact
  phone: string; // Numéro de téléphone du contact
}

// Classe Directory pour gérer le répertoire de contacts
class Directory {
  private rl: readline.Interface; // Interface readline pour lire depuis l'entrée standard
  private list: IPerson[] = []; // Tableau pour stocker les contacts

  // Constructeur de la classe 
  constructor() {
    // Initialisation de l'interface readline
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  // Méthode de bienvenue
  welcome(): void {
    console.log('Welcome to your beloved contact directory!'); // Message de bienvenue
    this.command(); // Appel de la méthode command pour gérer les commandes
  }

  // Méthode pour gérer les commandes utilisateur
  command(): void {
    // Demande à l'utilisateur d'entrer une commande
    this.rl.question('Please enter a command (/help for list of commands) : ', (command: string) => {
      // Switch case pour traiter les différentes commandes
      switch (command) {
        case '/help':
          this.help(); // Affiche les détails des différentes commandes disponibles
          break;
        case '/stop':
          this.stop(); // Arrête l'application
          break;
        case '/add':
          this.add(); // Ajoute un nouveau contact
          break;
        case '/list':
          this.getList(); // Affiche la liste des contacts
          break;
        case '/delete':
          this.deletePerson(); // Supprime un contact
          break;
        default:
          console.log(`Unknown command ${command}.`); // Affiche un message d'erreur pour les commandes inconnues
      }
    });
  }

  // Méthode pour afficher l'aide et les détails des différentes commandes
  help = (): void => {
    console.log("Here are the details of different commands:");
    console.log("/help : Display all the available commands");
    console.log('/stop : Quit your beloved application');
    console.log('/add : Add a new contact in your directory');
    console.log('/list : List all the contacts you have in your beloved directory');
    console.log('/delete : Delete one contact by specifying his ID');
    console.log(' ');
    this.command(); // Redemande une commande après affichage de l'aide
  }

  // Méthode pour ajouter un nouveau contact
  add = async (): Promise<void> => {
    const firstname = await this.addFirstname(); // Demande le prénom
    const lastname = await this.addLastname(); // Demande le nom de famille
    const phone = await this.addPhone(firstname, lastname); // Demande le numéro de téléphone

    // Crée un nouvel objet IPerson avec les informations du contact
    const person: IPerson = {
      firstname,
      lastname,
      phone,
    };

    this.list.push(person); // Ajoute le contact à la liste
    console.log('Contact added!'); // Affiche un message de confirmation
    this.command(); // Redemande une commande après l'ajout du contact
  };

  // Méthode pour demander et valider le prénom du contact
  addFirstname = (): Promise<string> => {
    return new Promise((resolve) => {
      this.rl.question('What is the first name of your contact : ', (firstname: string) => {
        // Met en majuscule la première lettre du prénom
        const firstnameValue = firstname.charAt(0).toUpperCase() + firstname.slice(1);
        resolve(firstnameValue); // Renvoie le prénom validé
      });
    });
  }

  // Méthode pour demander et valider le nom de famille du contact
  addLastname = (): Promise<string> => {
    return new Promise((resolve) => {
      this.rl.question('What is the last name of your contact : ', (lastname: string) => {
        // Met en majuscule la première lettre du nom de famille
        const lastnameValue = lastname.charAt(0).toUpperCase() + lastname.slice(1);
        resolve(lastnameValue); // Renvoie le nom de famille validé
      });
    });
  }

  // Méthode pour demander et valider le numéro de téléphone du contact
  addPhone = async (firstname: string, lastname: string): Promise<string> => {
    let numero = '';
    while (!/^(06)\d{8}$/.test(numero)) {
      numero = await new Promise((resolve) => {
        // Demande le numéro de téléphone et attend la réponse
        this.rl.question(`What is the phone number of ${firstname} ${lastname} : `, (numero: string) => {
          resolve(numero); // Renvoie le numéro de téléphone
        });
      });
      if (!/^(06)\d{8}$/.test(numero)) {
        console.log('The phone number must start with “06” and contain 10 digits') // Affiche un message d'erreur si le numéro est invalide
      }
    }
    return numero; // Renvoie le numéro de téléphone validé
  }

  // Méthode pour afficher la liste des contacts
  getList = (): void => {
    if (this.list.length > 0) {
      console.log('Here is the list of all your contacts:');
      this.list.map((person: IPerson, index: number) => {
        // Affiche l'ID, le prénom, le nom de famille et le numéro de téléphone de chaque contact
        console.log(` ID : ${index} ==> ${person.firstname} ${person.lastname}`);
        console.log(` Phone number : ${person.phone}`);
      });
      this.command(); // Redemande une commande après affichage de la liste des contacts
    } else {
      console.log('You have no contact in your directory'); // Affiche un message si la liste des contacts est vide
      this.command(); // Redemande une commande
    };
  }

  // Méthode pour supprimer un contact
  deletePerson = (): void => {
    if (this.list.length > 0) {
      this.getList(); // Affiche la liste des contacts
      this.rl.question('Which contact do you want to delete? ', (id: string) => {
        const idNum = parseInt(id);
        if (idNum >= 0 && idNum < this.list.length) {
          this.list.splice(idNum, 1); // Supprime le contact de la liste
          console.log('Contact deleted!'); // Affiche un message de confirmation
          this.command(); // Redemande une commande après la suppression du contact
        } else {
          console.log('Please enter a valid ID'); // Affiche un message d'erreur si l'ID est invalide
        }
      });
    } else {
      console.log('You have no contact in your directory'); // Affiche un message si la liste des contacts est vide
      this.command(); // Redemande une commande
    };
  }

  // Méthode pour arrêter l'application
  stop = (): void => {
    console.log('Thank you for using our application!'); // Affiche un message de remerciement
    this.rl.close(); // Ferme l'interface readline
  }
}

// Crée une instance de la classe Directory et lance l'application
const directory = new Directory();
directory.welcome(); // Appel de la méthode welcome pour commencer l'application
