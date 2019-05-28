export class BaseService {

    private _url: string;
    private _contentType: string;
    private _httpClient: string;

    BaseService(url: string, contentType: string, httpClient: string){
        this._url = url;
        this._contentType = contentType;
        this._httpClient = httpClient;
    }

    withURL(url: string):BaseService{
        this._url = url;
        return this;
    }

    withContentType(contentType: string):BaseService{
        this._contentType = contentType;
        return this;
    }

    withHttpClient(httpClient: any): BaseService {
        this._httpClient = httpClient;
        return this;
    }

    get url(): string {
        return this._url;
    }

    get contentType(): string {
        return this._contentType;
    }
    
    get httpClient(): any {
        return this._httpClient;
    }

    build<S>(service: new (builder: BaseService) => S): S {
        if (!this.httpClient) {
          throw new Error('Http Client missing');
        }
        return new service(this);
      }
}