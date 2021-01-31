export interface User {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
}
export const isNullOrEmpty = (value: any) => !value || value.toString() === 'undefined' || value.toString() === 'null';
