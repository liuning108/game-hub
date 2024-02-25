import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCarcContainer from './GameCarcContainer';
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";
import { GameOuery } from "../App";
/**
 * 这个函数渲染游戏列表，并在获取游戏数据时处理任何错误。
 *
 * @return {JSX.Element} 游戏列表或错误消息。
 * 
 */

interface Props {
  gameQuery: GameOuery

}
function GameGrid({gameQuery}:Props) {
  const { data:games, error,isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];


  return (
    <div style={{marginTop:'10px'}}>
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
    </div>
  );
}

export default GameGrid;
