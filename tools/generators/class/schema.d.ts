export interface Schema {
  name: string;
  path?: string;
  project?: string;
  skipFormat?: boolean;
  skipTests?: boolean;
  snippet?: boolean;
  type?: string;
}
