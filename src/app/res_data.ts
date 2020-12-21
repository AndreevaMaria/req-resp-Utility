export interface ResData {
  status: string;
  id: number;
  action: string;
  duration: number;
  params: string;
  payload: string;
  url: string;
  headers_response: {[x: string]: string};
  headers: {[x: string]: string};
}
