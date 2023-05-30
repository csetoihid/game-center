import useGames from "./hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { data, error, isLoading } = useGames();

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
            childern={<GameCardSkeleton key={skeleton} />}
          ></GameCardContainer>
        ))}
      {data.map((data) => (
        <GameCardContainer
          childern={<GameCard game={data} />}
        ></GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
