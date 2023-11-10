const getCatalogSections = async () => {
  const res = await fetch("https://parseapi.back4app.com/classes/catalogSection", {
    method: "GET",
    headers: {
      "X-Parse-Application-Id": process.env.APP_ID,
      "X-Parse-REST-API-Key": process.env.REST_API_KEY,
      "content-type": "application/json",
    },
  });
  const { results } = await res.json();
  return results;
};

export default getCatalogSections;
