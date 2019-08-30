import React,{Component} from 'react';
import * as d3 from 'd3';

class BarChart extends Component{
    componentDidMount(){
    this.drawChart();
  }
  drawChart(){
    const svg=d3.select("body").append("svg").attr("width",this.props.width).attr("height",this.props.height);
    svg.selectAll("rect")
    .data(this.props.data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i*70)
    .attr("y",(d,i)=>this.props.height-(10*d))
    .attr("width",65)
    .attr("height",(d,i)=>d*300)
    .attr("fill","green")

    svg.selectAll("text")
    .data(this.props.data)
    .enter()
    .append("text")
    .text((d)=>d)
    .attr("x",(d,i)=>i*70)
    .attr("y",(d,i)=>this.props.height-(10*d)-3)
  }
 render(){
   return(
     <div>{this.drawChart}</div>
   );
 }
}
export default BarChart;
