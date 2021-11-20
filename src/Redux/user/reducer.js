import { User } from './types';

const defaultState = {
  id: '123',
  first_name: 'Alex',
  last_name: 'Morgan'
};

export const userReducer = (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case User.getUser: {
      return  state
    }
    default: return state }
}
