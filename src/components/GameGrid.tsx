import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
/**
 * 这个函数渲染游戏列表，并在获取游戏数据时处理任何错误。
 *
 * @return {JSX.Element} 游戏列表或错误消息。
 * 
 */
function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={10}>
        {games.map((g) => (
           <GameCard game={g} key={g.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
