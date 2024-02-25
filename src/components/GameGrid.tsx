import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCarcContainer from './GameCarcContainer';
/**
 * 这个函数渲染游戏列表，并在获取游戏数据时处理任何错误。
 *
 * @return {JSX.Element} 游戏列表或错误消息。
 * 
 */
function GameGrid() {
  const { data:games, error,isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];


  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={3}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCarcContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCarcContainer>
        ))}
        {games.map((g) => (
          <GameCarcContainer key={g.id}>
           <GameCard game={g} ></GameCard>
           </GameCarcContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
