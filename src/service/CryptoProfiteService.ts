import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CryptoProfite } from "../model/CryptoProfite";

@Injectable({ providedIn: 'root' })
export class CryptoProfiteService {
  private apiUrl = 'https://localhost:7177';

  constructor(private http: HttpClient) {}

  CryptoProfitList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/CryptoProfite?UpdateCalcFieldsFlg=N`);
  }
  SaveCryptoProfite(cryptoProfite:CryptoProfite): Observable<any> {
      return this.http.post(`${this.apiUrl}/CryptoProfite`, cryptoProfite);
    }
    DeleteProfit(message:CryptoProfite): Observable<any> {
      return this.http.delete(`${this.apiUrl}/CryptoProfite/${message.CRY_PROFIT_ID}`);
    }
    GetSingleProfit(message:CryptoProfite): Observable<any> {
      return this.http.get(`${this.apiUrl}/CryptoProfite/${message.CRY_PROFIT_ID}`);
    }
    UpdateProfit(message:CryptoProfite): Observable<any> {
      return this.http.put(`${this.apiUrl}/CryptoProfite/${message.CRY_PROFIT_ID}?OperationCd=001`, message);
    }
    SetZakahDate(message:CryptoProfite): Observable<any> {
      return this.http.put(`${this.apiUrl}/CryptoProfite/${message.CRY_PROFIT_ID}?OperationCd=002`, message);
    }
}