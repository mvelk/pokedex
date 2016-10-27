export const fetchAllPokemon = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/pokemon',
    success,
    error
  });
};

export const fetchDetail = (id, success, error) => {
  console.log(id);
  console.log(`/api/pokemon/${id}`);
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`,
    success,
    error
  });
};
