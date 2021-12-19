import { useState } from "react";
import { arrayToObj, getTruthfulIndexes } from "../../utils";
import { DragDeletable } from "./drag-deletable-with-loading";

const keys = ['item1', 'item2'];
const initialItems = arrayToObj(keys, true);
const initialLoading = arrayToObj(keys, false);

export function DragDeletableExample(){
    const [items, setItems] = useState(initialItems);
    const [loadingLookup, setLoadingLookup] = useState<Record<string, boolean>>(initialLoading);

    const onDelete = (id: string) => {
        setLoadingLookup(prev => ({...prev, [id]: true}))
        setTimeout(() => setItems(prev => ({...prev, [id]: false})), 1000);
    }

    return (
        <>
            {getTruthfulIndexes(items).map(id => (
                <DragDeletable
                    key={id}
                    loading={loadingLookup[id]}
                    onDelete={() => onDelete(id)}
                >
                    <Inner id={id}/>
                </DragDeletable>
            ))}
        </>
    );
}

type Props = {
    id: string;
}

function Inner(props: Props) {
    const {id} = props;

    return (
        <div style={{
                width: '100vw',
                height: '20vh',
                background: 'white',
                border: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
        }}>
            <span>
                {`Drag to delete ${id}!`}
            </span>
        </div>
    );
}