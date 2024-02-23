import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
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
      <ul>
        {games.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
