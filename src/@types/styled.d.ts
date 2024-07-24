import 'styled-components';
import { defaultTheme } from '../styles/themes/default';
import { lightTheme } from '../styles/themes/light';

declare module 'styled-components' {
  export interface DefaultTheme {
    "zinc-50": string;
    "zinc-200": string;
    "zinc-400": string;
    "zinc-900": string;
    "zinc-950": string;
  }
}
