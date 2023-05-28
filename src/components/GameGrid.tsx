import React, { useEffect, useState } from "react";
import useGames from "./hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={10}
      padding="10px"
    >
      {games.map((game) => (
        <GameCard game={game}></GameCard>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
