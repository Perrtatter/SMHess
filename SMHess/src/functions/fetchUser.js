import { green, red } from 'colorette';

const TOKEN = // The token is not here ;)

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