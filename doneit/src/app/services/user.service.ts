import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constant';
import { PersonalCard } from '../models/personal-card/personal-card';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  personalCard = new PersonalCard()
  personalCardSubject: BehaviorSubject<PersonalCard>

  constructor(private httpClient: HttpClient, private _sanitizer: DomSanitizer) {
    this.personalCardSubject = new BehaviorSubject(this.personalCard)

  }

  getMyPersonalCard() {
    return this.httpClient.get<PersonalCard>(`${API_URL}/my-personal-card`).pipe(
      map(
        data => {
          data.imageUrl = this._sanitizer.bypassSecurityTrustResourceUrl(data.base64StringImage);
          this.updatePersonalCard(data)
          return data;
        }
      )
    )
  }

  updatePersonalCard(result: PersonalCard) {
    this.personalCardSubject.next(result)
  }


}
