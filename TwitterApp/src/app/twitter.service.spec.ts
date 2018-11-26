import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'

import { TwitterService } from './twitter.service';
import { Tweet } from './tweet';
import { environment } from '../environments/environment';

describe('TwitterService', () => {
  let injector: TestBed;
  let service: TwitterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TwitterService]
    });

    injector = getTestBed();
    service = injector.get(TwitterService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test user API Endpoint', () => {
    let id = Math.floor((Math.random() * 100 + 1));

    service.user()
    .subscribe(response => {
      expect(response.data.id).toEqual(id);
      // Checks that the correct user id was sent by the backend
    });

    const req = httpMock.expectOne(`${environment.api}/user`);

    req.flush({
      data: {
        id: id,
        name: "Twitter User"}
    });
  });

  it('Test home API Endpoint', () => {
    let since = "0";
    service.home(since).subscribe(response => {
      expect(response.data.length).toBe(5);
      // Tests that the endpoint returns the 5 timeline tweets
    });

    const req = httpMock.expectOne(`${environment.api}/home?since=${since}`);

    req.flush({
      data: [{}, {}, {}, {}, {}]
    });
  });

  it('Test favorite API Endpoint', () => {
    let id = String(Math.floor(Math.random() * 10**9));
    let state = Math.round(Math.random()) == 1;

    service.action('favorite', id, state).subscribe(result => {
      expect(result.data).toBeTruthy();
    });

    const req = httpMock.expectOne(`${environment.api}/favorite/${id}`);

    req.flush({
      data: {}
    });
  });

  it('Test retweet API Endpoint', () => {
    let id = String(Math.floor(Math.random() * 10**9));
    let state = Math.round(Math.random()) == 1;

    service.action('retweet', id, state).subscribe(result => {
      expect(result.data).toBeTruthy();
      // Tests that an object was returned by the API endpoint
    });

    const req = httpMock.expectOne(`${environment.api}/retweet/${id}`);

    req.flush({
      data: {}
    });
  });

  it("Test update status", () => {
    let status = "Happy Thanksgiving";

    service.updateStatus(status).subscribe(result => {
      expect(result.data).toBeTruthy();\
      // Tests that an object was returned by the API endpoint
    });

    const req = httpMock.expectOne(`${environment.api}/statuses/update?status=${status}`);

    req.flush({
      data: {}
    });
  });

  it("Test search API Endpoint", () => {
    service.search("banana").subscribe(result => {
      expect(result.data.statuses.length).toBe(100);
      // Tests that the endpoint returns the 100 search results
    });

    let q = "banana";

    const req = httpMock.expectOne(`${environment.api}/search?q=${q}`);

    req.flush({
      data: {
        statuses: Array(100).fill(0)
      }
    });
  });
});
