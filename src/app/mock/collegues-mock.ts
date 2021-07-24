import { Collegue } from "../models/collegue";

export class ColleguesMock {


    public unObjetCollegueFourni:Collegue = {
        matricule: '12355',
        nom: 'Germain',
        prenoms:'Christophe',
        dateDeNaissance: new Date("1970,04,25"),
        email:'christophegermain@gmail.com',
        photoUrl: "../../assets/images/angular.png "

    };
}
