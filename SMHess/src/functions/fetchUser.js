import { green, red } from 'colorette';

const TOKEN = `5a15b0a78cd6e0d2e97cac096fdfcfe1e48d459a5c93ccd91a5779d8212f50e0b399800b7b17
bc07b26f77648fad6ec91159c4def5c1f1999ae5af982f4aec0db4a9fb382203caa3bd4f352b2c1656d5aee0f7f
017b5c96df861938f1e542dccc9c12f7843d84acee04c43c4831920bf1bd8b6e1a8bba922c616acab77d1aa63`.replace(/\s+/g, ''); // Just for delete ligne return BTW

if (TOKEN) {
  console.log(green(`Il y a un TOKEN : ${TOKEN}`));
} else {
  console.log(red(`Il n'y a pas de TOKEN !`));
}

const BASE_URL = "http://localhost:1337"
const API_URL = "/api/user-tables?populate=*"
export async function fetchUser() {
  const url = BASE_URL+API_URL;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    const MapJson = result.data.map((user) => ({
    name: user.name,
    user_id: user.id,
    created_date: user.created_date,
    profil_photo: JSON.stringify(user.profil_photo.map((photo) => ({
        name: photo.name,
        url: BASE_URL+photo.url
    })))
    }));

    console.log(MapJson);

    return MapJson;
  } catch (error) {
    console.error(red(error.message));
  }
}

fetchUser();



// pour le lancer : (PWD = \SMHess\SMHess\src\functions>) node .\fetchUser.js...