import {useState} from "react";

type DragContext = {
    isDragging: boolean;
    start: number | undefined;
    current: number | undefined;
    translate: number;
}

type Listeners = {
    onMouseDown: (e: any) => void,
    onMouseMove: (e: any) => void,
    onMouseUp: (e: any) => void
};

const initialContext: DragContext = {
    isDragging: false,
    start: undefined,
    current: undefined,
    translate: 0,
};

export function useDragHook(): [Listeners, DragContext] {
    const [dragContext, setDragContext] = useState<DragContext>(initialContext)
    const onMouseDown = (e: any) => {
        setDragContext(context => ({
            ...context,
            isDragging: true,
            start: e.clientX
        }))
    };
    const onMouseMove = (e: any) => {
        setDragContext(context => ({
            ...context,
            current: context.isDragging ? e.clientX : undefined,
            translate: context.start && context.current ? context.current - context.start : 0
        }))
    };
    const onMouseUp = (e: any) => {
        setDragContext(initialContext)
    }
    const listeners: Listeners = {onMouseDown, onMouseMove, onMouseUp};
    return [listeners, dragContext];
}