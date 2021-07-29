import { Collegue } from "../models/collegue";

export class ColleguesMock {


    public unObjetCollegueFourni:Collegue = {
        matricule: '12355',
        nom: 'Germain',
        prenoms:'Christophe',
        dateDeNaissance: new Date("January 05, 1970"),
        email:'christophegermain@gmail.com',
        photoUrl: "../../assets/images/angular.png "

    };
}
