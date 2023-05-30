import useData from "./useData";
import { Genre } from "./useGenres";
  export interface Platform{
    id: number;
    name: string;
    slug: string;

  }
 export interface Game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms: { platform: Platform }[];
    metacritic : number;
  }
const useGames = (selectedGerne: Genre | null) =>useData<Game>('/games', {params:{genres:selectedGerne?.id}},[selectedGerne?.id]);
export default useGames