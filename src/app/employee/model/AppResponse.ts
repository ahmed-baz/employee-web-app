export class AppResponse<T> {
  data?: T;
  responseDate?: Date;
  statusCode?: number;
  message?: string;
  errorCode?: string;
}
