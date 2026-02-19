import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SilvarProfite } from "../model/SilvarProfite";

@Injectable({ providedIn: 'root' })
export class SilvarProfiteService {
  private apiUrl = 'https://localhost:7177';

  constructor(private http: HttpClient) { }

  SilvarProfiteList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SilvarProfite?UpdateCalcFieldsFlg=N`);
  }
  SaveSilvarProfite(silvarProfite: SilvarProfite): Observable<any> {
    return this.http.post(`${this.apiUrl}/SilvarProfite`, silvarProfite);
  }
  DeleteProfit(message: SilvarProfite): Observable<any> {
    return this.http.delete(`${this.apiUrl}/SilvarProfite/${message.SIL_PROFIT_ID}`);
  }
  GetSingleProfit(message: SilvarProfite): Observable<any> {
    return this.http.get(`${this.apiUrl}/SilvarProfite/${message.SIL_PROFIT_ID}`);
  }
  UpdateProfit(message: SilvarProfite): Observable<any> {
    return this.http.put(`${this.apiUrl}/SilvarProfite/${message.SIL_PROFIT_ID}?OperationCd=001`, message);
  }
  SetZakahDate(message: SilvarProfite): Observable<any> {
    return this.http.put(`${this.apiUrl}/SilvarProfite/${message.SIL_PROFIT_ID}?OperationCd=002`, message);
  }
}