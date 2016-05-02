import { uniq, chain, prop, map, filter, reduce, add, contains } from 'ramda';

/**
 * Given a set of intersections
 *  [
 *    {sets: ['A'], size: 1, ids : [0]},
 *    {sets: ['B'], size: 1, ids : [1]},
 *    {sets: ['A','B'], size: 2, ids : [2, 3]}
 *  ]
 *  -> ['A', 'B']
 * @return {Array[String]} a set of set keys
 */
export function listOfSets(setData, setKey = 'sets') {
  return uniq(chain(prop('sets'), setData))
}

export function listOfIntersects(setData, setKey = 'sets') {
  return map(prop('sets'), setData)
}

/**
 * Given an array of set intersections:
 *  [
 *    {sets: ['A'], size: 1, ids : [0]},
 *    {sets: ['B'], size: 1, ids : [1]},
 *    {sets: ['A','B'], size: 2, ids : [2, 3]}
 *  ]
 *  Return the cardinality of each set:
 *  { 'A' : 3 , 'B': 3 }
 */
export function cardinality(setData, setKey = 'sets', sizeKey = 'size') {
  const intersects = listOfIntersects(setData);
  const sets = listOfSets(setData);

  return map((set) => ({
    set,
    // reduce [{size: Int}, ...] -> int
    size: reduce((acc, cur) => add(acc, prop(sizeKey, cur)), 0,
                  // filter [{}, .. ] down to just those with the current set
                  filter((x) => contains(set, prop(setKey, x)), setData))
  }), sets)
}
