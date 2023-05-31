import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import chakraTheme from "@chakra-ui/theme";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenres";
import PlatformSelecter from "./components/PlatformSelecter";
import { Platform } from "./components/hooks/useGames";
import SortSelecter from "./components/SortSelecter";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectgenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} paddingBottom={5}>
          <Box paddingRight={5}>
            <PlatformSelecter
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            ></PlatformSelecter>
          </Box>
          <SortSelecter
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            selectedSortOrder={gameQuery.sortOrder}
          ></SortSelecter>
        </Flex>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
