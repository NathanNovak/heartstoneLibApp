import { Injectable } from "@angular/core";
import { of as ObservableOf, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CardDeck } from "./card.model";

@Injectable()
export class CardService {
  private readonly cardDecks: string[] = [
    "Druid",
    "Mage",
    "Warrior",
    "Rogue",
    "Shaman",
    "Priest",
    "Warlock",
    "Hunter",
    "Paladin"
  ];

constructor(private http: HttpClient) {}

  private readonly baseUrl =
    "https://omgvamp-hearthstone-v1.p.mashape.com";
  private readonly API_KEY =
    "KVWrs5eDajmsh0fvUHeR419Utd7lp1lVXVbjsnPkeNL03C71Mg";

  public getAllCardDecks(): Observable<CardDeck[]> {
    const headers = new HttpHeaders({ "X-Mashape-Key": this.API_KEY });

    return this.http.get<CardDeck[]>(`${this.baseUrl}/info`, {headers});
  }
}
