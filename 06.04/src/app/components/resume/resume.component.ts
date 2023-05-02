import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent
{
  #_photo: string;
  #_name: string;
  #_secname: string;
  #_age: number;
  #_city: string;
  #_experience: string;
  #_diplomas: string[];

  constructor()
  {
    this.SetPhoto = '../../../assets/Images/doctor.png';
    this.SetName = 'Elena';
    this.SetSecname = 'Janovsky';
    this.SetAge = 27;
    this.SetCity = "Washington";
    this.SetExperience = "I have extensive experience as a doctor, having worked in both private and public hospitals for over 10 years.During my time as a doctor, I have had the opportunity to work with a diverse patient population, ranging from pediatrics to geriatrics.As a doctor, I have developed strong clinical skills, including the ability to diagnose and treat a wide variety of medical conditions.In my role as a doctor, I have also worked closely with other healthcare professionals, including nurses, pharmacists, and physical therapists.One of the most rewarding aspects of my job as a doctor has been the opportunity to help patients improve their health and well-being.Throughout my career as a doctor, I have remained committed to staying up-to-date with the latest medical research and advancements.As a doctor, I have also had the privilege of mentoring and training medical students and residents, helping to shape the next generation of healthcare professionals.In my previous position as a doctor, I was responsible for managing a busy outpatient clinic, where I oversaw a team of nurses and medical assistants.";
    this.#_diplomas = ["Neurosurgery", "Therapist", "Psychology"];
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
  public get GetDiploms() { return this.#_diplomas;}
}
