const appURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fslJ1XBwtm9CMUjXQpQ2/books';

const retrieveBookFromApi = async () => {
  const response = await fetch(appURL);
  const data = await response.json();
  return data;
};

const addBookToAPI = async (book) => {
  const response = await fetch(appURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return response;
};

const deleteBookFromAPI = (id) => {
  fetch(`${appURL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

export { retrieveBookFromApi, addBookToAPI, deleteBookFromAPI };
