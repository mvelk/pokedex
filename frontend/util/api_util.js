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
  console.log(poke);
  $.ajax({
    method: 'POST',
    url: '/api/pokemon',
    data: poke,
    success,
    error
  });
};
