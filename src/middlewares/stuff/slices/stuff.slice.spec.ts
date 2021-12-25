import { AnyAction } from '@reduxjs/toolkit';
import { initialStuffState } from './initial-state';
import { putStuff, upsertStuff, stuffReducer as reducer } from './stuff.slice';
import { Stuff } from '../entities';

describe('stuff slice', () => {
  it('should initialize', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialStuffState);
  });

  describe('put stuff', () => {
    it('can put stuff', () => {
      const id = 'id';
      const data = 'data';
      const stuff: Stuff = { id, data };

      const nextState = reducer(initialStuffState, putStuff(stuff));
      expect(nextState.lookup[id]).toEqual(stuff);
    });

    test('idempotency', () => {
      const id = 'id';
      const data = 'data';
      const stuff: Stuff = { id, data };

      let state = reducer(initialStuffState, putStuff(stuff));
      state = reducer(state, putStuff(stuff));
      expect(state.lookup[id]).toEqual(stuff);
    });
  });

  describe('upsert stuff', () => {
    it('can upsert non-existent stuff', () => {
      const stuff: Stuff = { id: 'id', data: 'data', tag: 'tag' };

      const state = reducer(initialStuffState, upsertStuff(stuff));
      expect(state.lookup.id).toEqual(expect.objectContaining({ ...stuff }));
    });

    it('can upsert onto existent stuff', () => {
      const stuff: Stuff = { id: 'id', data: 'data', tag: 'tag' };
      const update: Partial<Stuff> = { id: 'id', tag: 'another tag' };

      let state = reducer(initialStuffState, putStuff(stuff));
      state = reducer(state, upsertStuff(update));
      expect(state.lookup.id).toEqual(expect.objectContaining({ id: 'id', data: 'data', tag: 'another tag' }));
    });

    it('would not destroy exisitng stuff', () => {
      const stuff: Stuff = { id: 'foo', data: 'bar' };
      const anotherStuff: Stuff = { id: 'id', data: 'data' };

      let state = reducer(initialStuffState, putStuff(stuff));
      state = reducer(state, upsertStuff(anotherStuff));
      expect(state.lookup.foo).toEqual(expect.objectContaining({ ...stuff }));
    });

    it('idempotency', () => {
      const stuff: Stuff = { id: 'id', data: 'data', tag: 'tag' };
      const update: Partial<Stuff> = { id: 'id', tag: 'another tag' };

      let state = reducer(initialStuffState, putStuff(stuff));
      state = reducer(state, upsertStuff(update));
      state = reducer(state, upsertStuff(update));
      expect(state.lookup.id).toEqual(expect.objectContaining({ id: 'id', data: 'data', tag: 'another tag' }));
    });
  });
});
