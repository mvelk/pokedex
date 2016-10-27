export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const RECEIVE_DETAIL = "RECEIVE_DETAIL";
export const REQUEST_DETAIL = "REQUEST_DETAIL";
export const PUSH_POKEMON = "PUSH_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

export const receiveDetail = detail => ({
  type: RECEIVE_DETAIL,
  detail
});

export const requestDetail = id => ({
  type: REQUEST_DETAIL,
  id
});

export const pushPokemon = poke => ({
  type: PUSH_POKEMON,
  poke
});

export const receivePokemon = poke => ({
  type: RECEIVE_POKEMON,
  poke
});
