import React, { useEffect, useState } from "react";
import useGames from "./hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5];
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={10}
      padding="10px"
    >
      {isLoading &&
        skeleton.map((skeleton) => (
          <GameCardContainer
            childern={<GameCardSkeleton key={skeleton} />}
          ></GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer
          childern={<GameCard game={game} />}
        ></GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
