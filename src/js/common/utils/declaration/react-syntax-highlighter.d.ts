// src/types/react-syntax-highlighter.d.ts
declare module 'react-syntax-highlighter' {
    import * as React from 'react';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export const Prism: React.ComponentType<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export const Light: React.ComponentType<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export const Dark: React.ComponentType<any>;
  }
  
  declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export const solarizedLight: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export const solarizedDark: any;
  }
  
  declare module 'react-syntax-highlighter/styles/hljs' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export const docco: any;
  }
  