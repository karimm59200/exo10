let choix;

choix = Number(prompt( `Veuillez choisir votre boisson en validant un numbre :
                                                                        1- Eau \n 
                                                                        2- Jus d'Oranges \n
                                                                        3- Limonade \n
                                                                        4- Café \n
                                                                        5- Thé
                                                                        Faites votre choix`));

switch (choix) {
  case 1:  console.log("Super très bon choix, 'j'adore l'eau dans 20-30 ans il y en aura plus'JCVD") 
    
    break;
  case 2:  console.log("Super très bon choix, le jus d'orange donne du jus") 
    
    break;
  case 3: console.log("Super très bon choix, la limonade 'Quand la vie vous donne des citrons, faites de la citronnade' ") 
    
    break;
  case 4: console.log("Super très bon choix le café, n'oublie pas de le transformer en code  ") 
    
    break;
  case 5: console.log("Super très bon choix, 'J'aime le thé ; c'est une communion intemporelle entre le corps et l'esprit.'") 
    
    break;

  default: 
          boisson = "Inconnu"
    break;
}  