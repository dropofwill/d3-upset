import { combLength } from '../src/combinations';
import { cardinality, listOfSets } from '../src/cardinality';

import { map, chain, range, values, prop } from 'ramda';
import sample from 'lodash/fp/sample'
import d3 from 'd3';

const exampleData = map((set) => ({ sets: set, size: sample(range(0, 30)) }),
                        combLength(['A', 'B', 'C']))

const margins = { left: 50, right: 50, top: 50, bottom: 50 };
const width = 300 - margins.left - margins.right;
const height = 500 - margins.top - margins.bottom;

const barHeight = 20;
const max = d3.max(map(prop('size'), cardinality(exampleData)))
const setKeys = listOfSets(exampleData);

const x = d3.scale.linear()
  .domain([0, max])
  .range([0, width]);

const y = d3.scale.ordinal()
  .domain(setKeys)
  .rangeRoundBands([0, height], 10);

const chart = d3.select('#upset')
  .attr('width', width)
  .attr('height', barHeight * exampleData.length)
  ;

const bar = chart.selectAll('g')
  .data(cardinality(exampleData))
.enter().append('g')
  .attr('transform', (d, i) => `translate(0,${i * barHeight})`)
  ;

bar.append("rect")
.attr('x', (d) => width - x(d.size))
.attr('width', (d) => x(d.size))
.attr('height', barHeight - 1)
;

bar.append("text")
.attr("x", 0)
.attr("y", barHeight / 2)
.attr("dy", ".35em")
.text((d) => d.size)
;
