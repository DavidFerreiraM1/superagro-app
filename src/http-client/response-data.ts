export class HttpReponseData<T> {
  constructor(public success: boolean, public data: T, public errors: string) {
    this.success = success;
    this.data = data;
    this.errors = errors;
  }
}
