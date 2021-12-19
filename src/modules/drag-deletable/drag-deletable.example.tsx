import { useState } from "react";
import { DragDeletable } from "./drag-deletable-with-loading";

export function DragDeletableExample(){
    const [deleted, setDeleted] = useState(false);
    const Inner = () => (
        <div style={{
                width: '100vw',
                height: '20vh',
                backgroundColor: 'blue',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
        }}>
            <span>
                {deleted ? 'Deleted' : 'Drag to delete me!'}
            </span>
        </div>
    );
    return (
        <>
            {!deleted && (
                <DragDeletable onDelete={() => {setDeleted(true)}}>
                    <Inner/>
                </DragDeletable>
            )}
            {!!deleted && <Inner/>}
        </>
    );
}