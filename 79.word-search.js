/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */
/*
Array/indexOf
Array/forEach
String/charAt
*/

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let rows = board.length;
  let cols = board[0].length;
  let visited = [];

  function isVisted(visited, row, col) {
    for (let i = 0; i < visited.length; i++) {
      if (visited[i].row === row && visited[i].col === col) {
        return true;
      }
    }
    return false;
  }

  function bfs(board, row, col, word, index, visited) {
    if (index >= word.length) {
      return true;
    }
    if (row < 0 || row >= board.length) {
      return false;
    }
    if (col < 0 || col >= board[0].length) {
      return false;
    }
    if (isVisted(visited, row, col)) {
      return false;
    }
    if (board[row][col] != word[index]) {
      return false;
    }
    visited.push({ row: row, col: col });
    let right = bfs(board, row + 1, col, word, index + 1, visited);
    let left = bfs(board, row - 1, col, word, index + 1, visited);
    let top = bfs(board, row, col + 1, word, index + 1, visited);
    let bottom = bfs(board, row, col - 1, word, index + 1, visited);
    visited.pop();

    return right | left | top | bottom;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      //console.log(`board:${board[r][c]}, word:${word[0]}`);
      if (board[r][c] === word[0]) {
        //console.log(`equal: ${rows}:${r}, ${cols}:${c}`);
        if (bfs(board, r, c, word, 0, visited)) {
          //console.log(`bfs: ${rows}:${r}, ${cols}:${c}`);
          return true;
        }
      }
    }
  }
  return false;
};
// @lc code=end
