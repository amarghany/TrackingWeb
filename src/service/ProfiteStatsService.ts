import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProfiteStats } from "../model/ProfiteStats";

@Injectable({ providedIn: 'root' })
export class ProfiteReportService {
  private apiUrl = 'https://localhost:7177';

  constructor(private http: HttpClient) {}

  getProfiteReport(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ProfiteReport?ReportName=GETASSETSPROFITE&&UpdateCalcFieldsFlg=Y`);
  }
}