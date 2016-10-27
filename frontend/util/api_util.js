export const fetchAllPokemon = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/pokemon',
    success,
    error
  });
};

export const fetchDetail = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`,
    success,
    error
  });
};

export const pushPokemon = (poke, success, error) => {
  $.ajax({
    method: 'PUSH',
    url: '/api/pokemon',
    success,
    error
  });
};
