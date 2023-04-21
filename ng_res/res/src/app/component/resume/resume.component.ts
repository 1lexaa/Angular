import { Component } from "@angular/core";

@Component({
    selector:'app-resume',
    templateUrl:'./resume.component.html',
    styleUrls:['./resume.component.css']
})

export class ResumeComponent
{
 #_photo: string = "";
 #_name: string = " ";
 #_secname : string = "";
 #_age : number = 22;
 #_city : string = "";
 #_experience : string = "";

 constructor()
 {
    this.SetPhoto = 'assets/img/ghost.jpg';
    this.SetName = 'Alexey';
    this.SetSecname = 'Chermalykh';
    this.SetAge = 22;
    this.SetCity = "Odessa";
    this.SetExperience = "C# , JS , HTML , CSS , PY";
 }

 public set SetPhoto(photo: string) { this.#_photo = photo;}
 public set SetName(name: string) { this.#_name = name;}
 public set SetSecname(secname: string) { this.#_secname = secname;}
 public set SetAge(age: number) { this.#_age = age;}
 public set SetCity(city: string) { this.#_city = city;}
 public set SetExperience(experience: string) { this.#_experience = experience;}

 public get GetPhoto() { return this.#_photo;}
 public get GetName() { return this.#_name;}
 public get GetSecname() { return this.#_secname;}
 public get GetAge() { return this.#_age;}
 public get GetCity() { return this.#_city;}
 public get GetExperience() { return this.#_experience;}
}