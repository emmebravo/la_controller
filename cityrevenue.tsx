//import d3 from 'd3';
import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useEffect, useRef } from 'react';

//import { Plot } from '../tooltipsPlot/tooltips';
import { addTooltips } from '@/components/tooltipsPlot/newtooltipsattempt';
import { processEachValueIntoTextMore } from '@/components/utils';

import { insertDarkModed3 } from '../darkmodethesvg';

function responsivefy(svg: any) {
  // container will be the DOM element
  // that the svg is appended to
  // we then measure the container
  // and find its aspect ratio
  const container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style('width'), 10),
    height = parseInt(svg.style('height'), 10),
    aspect = width / height;

  // set viewBox attribute to the initial size
  // control scaling with preserveAspectRatio
  // resize svg on inital page load
  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMinYMid')
    .call(resize);

  // add a listener so the chart will be resized
  // when the window resizes
  // multiple listeners for the same event type
  // requires a namespace, i.e., 'click.foo'
  // api docs: https://goo.gl/F3ZCFr
  d3.select(window).on('resize.' + container.attr('id'), resize);

  // this is the code that resizes the chart
  // it will be called on load
  // and in response to window resizes
  // gets the width of the container
  // and resizes the svg to fill it
  // while maintaining a consistent aspect ratio
  function resize() {
    const w = parseInt(container.style('width'));
    svg.attr('width', w);
    svg.attr('height', Math.round(w / aspect));
  }
}

export default function CityRevenue(props: any) {
  //import the csv table from /csvsforpafr22/1totalcityrevenue.csv

  const rev2 = useRef<any>();
  const rev1 = useRef<any>();

  useEffect(() => {
    // Emme's updates: I would change the color from being green to something like blue. Red/green is the most common color combo users with colorblindness have a hard time distingushing between. As an added precaution, I would add a pattern for colorblind users:

    // const defs = d3.select(rev2.current).append('svg:defs');

    // defs
    //   .append('pattern')
    //   .attr('id', 'lines')
    //   .attr('patternUnits', 'userSpaceOnUse')
    //   .attr('width', 4)
    //   .attr('height', 4)
    //   .append('line')
    //   .attr('x1', 0)
    //   .attr('y1', 2)
    //   .attr('x2', 4)
    //   .attr('y2', 2)
    //   .attr('stroke', 'currentColor')
    //   .attr('stroke-width', 1);

    // defs
    //   .append('pattern')
    //   .attr('id', 'dots')
    //   .attr('patternUnits', 'userSpaceOnUse')
    //   .attr('width', 4)
    //   .attr('height', 4)
    //   .append('circle')
    //   .attr('cx', 2)
    //   .attr('cy', 2)
    //   .attr('r', 1)
    //   .attr('fill', 'currentColor');

    d3.csv('/csvsforpafr22/1totalcityrevenue.csv').then((data: any) => {
      console.log(data);

      const totalcityrevenue1 = data.map((d: any) => {
        return {
          ...d,
          Revenue: parseInt(d['Revenue']),
        };
      });

      const plotthen = Plot.plot({
        color: {
          legend: true,
        },
        height: 600,
        y: {
          tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
          label: 'Revenue',
          grid: true,
        },
        x: {
          label: 'Fiscal Year',
        },
        facet: {
          data: totalcityrevenue1,
          y: 'Activity Type',
        },
        marks: [
          Plot.barY(totalcityrevenue1, {
            x: 'Year',
            y: 'Revenue',
            fill: 'Activity',
            title: (elem: any) =>
              `${elem.Activity} ${processEachValueIntoTextMore({
                value: elem.Revenue,
                digits: 2,
              })}`,
          }),
          Plot.ruleY([0]),
        ],
      });

      const revenuesplitbyactivity = addTooltips(plotthen, {
        fill: '#ffffff',
        opacity: 0.5,
        'stroke-width': '4px',
        stroke: '#41ffca',
      });

      if (rev1.current) {
        rev1.current.append(revenuesplitbyactivity);
      }
    });

    d3.csv('/csvsforpafr22/city-revenue-summed-by-activity-type.csv').then(
      (data: any) => {
        const asdf = data.map((d: any) => {
          return {
            ...d,
            'Sum of Revenue': parseInt(d['Sum of Revenue']),
          };
        });

        const facetedRev = addTooltips(
          Plot.plot({
            color: {
              legend: true,
              background: '#212121',
              color: 'white',
              // where I would link the pattern to the activity
              // range: ['url(#lines)', 'url(#dots)'],
              // domain: ['Activity1', 'Activity2'], //placeholder for activities
            },
            height: 500,
            y: {
              tickFormat: (tick: any) =>
                d3.format('~s')(tick).replace('G', 'B'),
              label: 'Revenue',
            },
            x: { label: 'Fiscal Year' },
            marks: [
              Plot.barY(asdf, {
                x: 'Year',
                y: 'Sum of Revenue',
                title: (elems: any) =>
                  `${elems['Activity Type']} ${(
                    parseInt(elems['Sum of Revenue']) / 10e8
                  ).toFixed(2)}B`,
                fill: 'Activity Type',
              }),
              Plot.ruleY([0]),
            ],
          }),
          {
            fill: '#ffffff',
            opacity: 0.5,
            'stroke-width': '4px',
            stroke: '#41ffca',
          }
        );

        if (rev2.current) {
          rev2.current.append(facetedRev);
          //darkModeTheSvg(rev2.current);
          rev2.current.append(insertDarkModed3());

          // Emme's updates: this first update would happen after the chart is created so when the year is updated, the aria-label also updates. This would need a function added to d3's tip, which is under addToolTip
          // d3.select(rev2.current)
          // 	.append("div")
          // 	.attr("aria-live", "polite")
          // 	.attr("class", "sr-only");

          // Emme's update: I would also need to add a legend as the chart doesn't current have one. This would need refinement as well.
          /*
              const legend = d3.select(rev2.current)
                               .append("div")
                               .style("display", "flex")
                               .style("gap", "1rem")
                               .style("margin-top", "1rem");

              ["Activity1", "Activity2"].forEach((label, i) => { // Replace with activity names
                legend.append("div")
                      .style("display", "flex")
                       .style("align-items", "center")
                       .style("gap", "0.5rem")
                       .html(`
                          <svg width="16" height="16">
                            <rect width="16" height="16" fill="url(#${i === 0 ? "lines" : "dots"})"/>
                          </svg>
                        ${label}
                `);
              });
          */

          // Emme's updates: this is added to the svg interactivity so screen readers know what the chart is role is and is able to navigate with keyboard
          /* d3.select(rev2.current), this would be added to all charts
               .select('svg')
               .attr('role', 'img')
               .attr(
                'aria-label',
                'Bar chart showing City revenue by activity type (2016-2022)'
               )
              .attr('tabindex', '0');
          */

          // Emme's update: I had never done accessibility on a d3 chart, so reading through a tutorial this hidden table is a recommendation when a chart has several data points. It definitely needs refinement, but I wanted to include it as an example.
          /* d3.select(rev2.current).append('table').attr('class', 'sr-only')
               .html(`
             		<caption>Revenue by Activity Type</caption>
             		<thead>
            			<tr>
            				<th scope="col">Year</th>
            				<th scope="col">Activity</th>
            				<th scope="col">Revenue</th>
            			</tr>
            		</thead>
            		<tbody>
            			${asdf
                    .map(
                       (d) => `
            				<tr>
              				<td>${d.Year}</td>
              				<td>${d.Activity}</td>
              				<td>$${d3.format(',')(d.Revenue)}</td>
            				</tr>
            			`
                    )
                     .join('')}
            		</tbody>
            	`);
          */ 
        }
      }
    );
  }, []);

  return (
    <div className='city-revenue'>
      {/* this must be an H3 as the heading in the parent component before this child component is an H2 */}
      <h3>Revenues Stacked</h3>
      <div id='rev-2' ref={rev2}></div>
      {/* <h4>Each Revenue Source Breakdown</h4>
      <div id='rev-1' ref={rev1}></div> */}
    </div>
  );
}
