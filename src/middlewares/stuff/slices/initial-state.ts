import { Stuff } from '../entities';

const initialStuffLookup: {
    [id: string]: Stuff;
} = {};

export const initialStuffState = {
  lookup: initialStuffLookup,
};
export type StuffState = typeof initialStuffState;
