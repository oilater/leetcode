/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */
function cloneGraph(node: _Node | null): _Node | null {
	if (!node) return null;

  const cloned = new Map<_Node, _Node>();

  function copy(origin: _Node): _Node {
    const existing = cloned.get(origin);
    if (existing) return existing;

    const dup = new _Node(origin.val);
    cloned.set(origin, dup);

    for (const neighbor of origin.neighbors) {
      dup.neighbors.push(copy(neighbor));
    }
    return dup;
  }
  return copy(node);
};