import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeTypes = typeof theme;
  /*nao esqueça o theme provider em volta do componente de maior hierarquia nesse caso
  era o APp */
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeTypes {}
}
