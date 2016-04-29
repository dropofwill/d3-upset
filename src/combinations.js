import { head, tail, chain, range } from 'ramda';

/**
 * N combinations for list
 */
export function comb(n, lst) {
  if (!n) return [[]];
  if (!lst.length) return [];

  const x = head(lst);
  const xs = tail(lst);

  return comb(n - 1, xs).map(function (t) {
    return [x].concat(t);
  }).concat(comb(n, xs));
}

/**
 * Combinations from i..k inclusive
 */
export function combRange(i, k, lst) {
  return chain((n) => comb(n, lst), range(i, k + 1));
}

/**
 * Combinations for entire list
 */
export function combLength(lst) {
  return chain((n) => comb(n, lst), range(1, lst.length+1))
}
