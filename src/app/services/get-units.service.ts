import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnitsResponse } from '../types/units-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  readonly apiURl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private httpClient: HttpClient) {}

  getAllUnits(): Observable<UnitsResponse> {
    return this.httpClient.get<UnitsResponse>(this.apiURl);
  }
}
