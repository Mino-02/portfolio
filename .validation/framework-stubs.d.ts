declare const process: { env: Record<string, string | undefined> };

declare namespace JSX {
  interface IntrinsicAttributes {
    key?: string | number;
  }

  interface IntrinsicElements {
    [elementName: string]: any;
  }
}

declare module "react" {
  export type ReactNode = any;
  export type MouseEvent<T = any> = {
    preventDefault(): void;
    currentTarget: T;
  };
  export type SVGProps<T> = Record<string, unknown> & { ref?: unknown };
}

declare module "react/jsx-runtime" {
  export const Fragment: any;
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
}

declare module "next" {
  export type Metadata = any;
  export type Viewport = any;
  export namespace MetadataRoute {
    type Sitemap = any[];
    type Robots = any;
    type Manifest = any;
  }
}

declare module "next/link" {
  const Link: any;
  export default Link;
}

declare module "next/image" {
  const Image: any;
  export default Image;
}

declare module "next/navigation" {
  export function notFound(): never;
  export function redirect(path: string): never;
  export function usePathname(): string;
  export function useParams<T extends Record<string, unknown> = Record<string, string>>(): T;
}

declare module "next/server" {
  export type NextRequest = {
    cookies: { get(name: string): { value: string } | undefined };
    headers: { get(name: string): string | null };
    nextUrl: {
      pathname: string;
      clone(): { pathname: string };
    };
  };

  export class NextResponse {
    cookies: {
      set(name: string, value: string, options?: Record<string, unknown>): void;
    };
    static next(): NextResponse;
    static redirect(url: unknown): NextResponse;
  }
}

declare module "next/og" {
  export const ImageResponse: any;
}
