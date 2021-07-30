import { Collegue } from "../models/collegue";

export class ColleguesMock {


    public collegue:Collegue = {
        matricule: '12355',
        nom: 'Germain',
        prenoms:'Christophe',
        dateDeNaissance: new Date("January 05, 1970"),
        email:'christophegermain@gmail.com',
        photoUrl: "../../assets/images/angular.png "

    };

    public collegues:Collegue[] = [
        {
            matricule: '12355',
            nom: 'Germain',
            prenoms:'Christophe',
            dateDeNaissance: new Date("September 05, 1970"),
            email:'christophegermain@gmail.com',
            photoUrl: "../../assets/images/angular.png "
    
        },
        {
            matricule: '12455',
            nom: 'Haidara',
            prenoms:'Moulaye',
            dateDeNaissance: new Date("January 05, 1981"),
            email:'moulayehaidara@gmail.com',
            photoUrl: "../../assets/images/angular.png " 
        },
        {
            matricule: '12255',
            nom: 'Hrarti',
            prenoms:'Miryem',
            dateDeNaissance: new Date("March 09, 1980"),
            email:'hmiryem@gmail.com',
            photoUrl: "../../assets/images/angular.png " 
        },
        {
            matricule: '12155',
            nom: 'Miss',
            prenoms:'Jonathan',
            dateDeNaissance: new Date("October 19, 1985"),
            email:'jmiss@gmail.com',
            photoUrl: "../../assets/images/angular.png " 
        },
        {
            matricule: '12655',
            nom: 'Sava',
            prenoms:'Gabriel',
            dateDeNaissance: new Date("April 05, 1978"),
            email:'gabrielsava@gmail.com',
            photoUrl: "../../assets/images/angular.png " 
        },
        {
            matricule: '12855',
            nom: 'Macron',
            prenoms:'Emmanuel',
            dateDeNaissance: new Date("August 15, 1977"),
            email:'elyseesmacron@gmail.com',
            photoUrl: "../../assets/images/angular.png " 
        }

    ];
}
