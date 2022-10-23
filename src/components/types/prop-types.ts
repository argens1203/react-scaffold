import { CSSProperties, JSXElementConstructor, PropsWithChildren } from 'react';

export type PropsWithStyle<P> = P & { style?: CSSProperties };

export type ContainerProps<P> = PropsWithStyle<PropsWithChildren<P>>;

export type DefaultContainerProps = ContainerProps<object>;

export type AnyComponent = JSXElementConstructor<Record<string, never>>;
