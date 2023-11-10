const getCatalogAlbums = async (ids) => {
  const res = await fetch("https://parseapi.back4app.com/classes/catalog", {
    headers: {
      "X-Parse-Application-Id": process.env.APP_ID,
      "X-Parse-REST-API-Key": process.env.REST_API_KEY,
      "content-type": "application/json",
    },
  });
  const { results } = await res.json();
  const albums = results.filter((album) => ids.includes(album.objectId));
  return albums;
};

export default getCatalogAlbums;
