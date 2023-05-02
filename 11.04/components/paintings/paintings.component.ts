import { Component } from '@angular/core';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})

export class PaintingsComponent {
  gallery: Paintings[] = [new Paintings(), new Paintings(), new Paintings()];
  selectedPainting: any;
  showZoom: boolean = false;

  ngOnInit() {
    this.gallery[0].SetPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
    this.gallery[0].SetName = "Portrait of Mrs. Lisa del Giocondo";
    this.gallery[0].SetAuthor = "Leonardo da Vinci";
    this.gallery[0].SetYear = "1503—1519";
    this.gallery[0].SetDimensionsy = "76.8x53 cm";
    this.gallery[0].SetLocation = "Louvre, Paris";

    this.gallery[1].SetPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Femme_%C3%A0_l%27ombrelle_tourn%C3%A9e_vers_la_gauche_%282982901139%29.jpg/375px-Femme_%C3%A0_l%27ombrelle_tourn%C3%A9e_vers_la_gauche_%282982901139%29.jpg"
    this.gallery[1].SetName = "Lady with umbrella facing left";
    this.gallery[1].SetAuthor = "Claude Monet";
    this.gallery[1].SetYear = "1886";
    this.gallery[1].SetDimensionsy = "131 × 81 cm";
    this.gallery[1].SetLocation = "Musee d'Orsay, Paris";

    this.gallery[2].SetPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Fra_Angelico_060.jpg/480px-Fra_Angelico_060.jpg";
    this.gallery[2].SetName = "Altar of San Marco";
    this.gallery[2].SetAuthor = "Fra Beato Angelico";
    this.gallery[2].SetYear = " 1438—1443";
    this.gallery[2].SetDimensionsy = "220 × 227  cm";
    this.gallery[2].SetLocation = "National Museum of San Marco, Florence";
  }

  toggleZoom(painting: any = null) 
  {
    if (painting) 
    {
      this.selectedPainting = painting;
      this.showZoom = true;
    } 
    else { this.showZoom = false;}
  }
}

class Paintings
{
  #_photo: string;
  #_name: string;
  #_year: string;
  #_author: string;
  #_dimensions: string;
  #_location: string;

  constructor() 
  {
    this.#_photo = '';
    this.#_name = '';
    this.#_year = '';
    this.#_author = '';
    this.#_dimensions = '';
    this.#_location = '';
  }

  public set SetPhoto(photo: string) { this.#_photo = photo;}
  public set SetName(name: string) { this.#_name = name;}
  public set SetYear(year: string) { this.#_year = year;}
  public set SetAuthor(author: string) { this.#_author = author;}
  public set SetDimensionsy(dimensions: string) { this.#_dimensions = dimensions;}
  public set SetLocation(location: string) { this.#_location = location;}

  public get GetPhoto() { return this.#_photo;}
  public get GetName() { return this.#_name;}
  public get GetYear() { return this.#_year;}
  public get GetAuthor() { return this.#_author;}
  public get GetDimensionsy() { return this.#_dimensions;}
  public get GetLocation() { return this.#_location;}
}