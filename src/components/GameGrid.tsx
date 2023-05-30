import useGames, { Platform } from "./hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "./hooks/useGenres";

interface Props {
  selectedGerne: Genre | null;
  selectedPlatform: Platform | null;
}
function GameGrid({ selectedGerne, selectedPlatform }: Props) {
  const { data, error, isLoading } = useGames(selectedGerne, selectedPlatform);

  const skeleton = [1, 2, 3, 4, 5];
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={3}
      padding="10px"
    >
      {isLoading &&
        skeleton.map((skeleton) => (
          <GameCardContainer
            key={skeleton}
            childern={<GameCardSkeleton />}
          ></GameCardContainer>
        ))}
      {data.map((data) => (
        <GameCardContainer
          key={data.id}
          childern={<GameCard game={data} />}
        ></GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
