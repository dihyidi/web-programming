const BASE_URL = "https://localhost:4001";
const RESOURCE_URL = `${BASE_URL}/film`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};


export const getAllFilms = async () => {
  const rawResponse = await baseRequest({ method: "GET" });
  
  return await rawResponse.json();
};

export const postFilm = (body) => baseRequest({ method: "POST", body });

export const updateFilm = (id, body) => baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteFilm = (id) => baseRequest({ urlPath: `/${id}`, method: "DELETE" });