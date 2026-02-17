/// <reference types="astro/client" />

// Ensure TypeScript resolves astro/jsx-runtime for .astro template type-checking
declare module 'astro/jsx-runtime' {
  export const Fragment: unknown;
  export function jsx(type: unknown, props: unknown, key?: string | number): unknown;
  export function jsxs(type: unknown, props: unknown, key?: string | number): unknown;
}
