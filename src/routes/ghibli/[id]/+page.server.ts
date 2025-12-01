import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const response = await fetch(`https://ghibliapi.vercel.app/films/${params.id}`);
  const film = await response.json();

  return {
    film: {
      id: film.id,
      title: film.title,
      description: film.description,
      director: film.director,
      producer: film.producer,
      release_date: film.release_date,
      running_time: film.running_time,
      image: film.image
    }
  };
};
