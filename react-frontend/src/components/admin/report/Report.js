import React from 'react'
import PieChart from './PieChart'
import CombineBarChart from './CombineBarChart'
import '../../../assets/css/custom.css';
import LineChart from './LineChart';

export default function Report() {
  return (
    <div>
        <div className="row">
			<div className="col-12 col-md-6 col-lg-6 col-xl-6">
				<LineChart />
			</div>
			<div className="col-12 col-md-6 col-lg-6 col-xl-6">
				<PieChart />
			</div>
		</div>
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12 col-xl-12">
				<CombineBarChart  />
			</div>
			
		</div>
    </div>
  )
}
