import React, { useState } from 'react';
import {IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const JobListing = ({job}) => {
	const [showFullDescription, setShowFullDescription] = useState(false);
	console.log(job.description);

	let description = job.description;

	if(!showFullDescription){
		description = description.substring(0, 90) + '...';
		console.log(description)	
	}
	
	return (
		<div className="bg-white rounded-xl shadow-md relative">
			<div className="p-4">
				<div className="mb-6">
					<div className="text-gray-600 my-2">{job.type}</div>
					<h3 className="text-xl font-bold">{job.title}</h3>
				</div>

				<div className="mb-3">
					{description}
				</div>

				<button onClick={()=>setShowFullDescription(prevState => !prevState)} className='mb-5 text-indigo-500 hover:text-indigo-700 transition-all font-semibold'>{!showFullDescription ? 'More' : 'Less'}</button>

				<h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

				<div className="border border-gray-100 mb-5"></div>

				<div className="flex flex-col lg:flex-row justify-between mb-4">

					<div className="text-orange-700 mb-3 flex items-center">
						{/* <i className="fa-solid fa-location-dot text-lg"></i> */}
						<IoLocationSharp className='inline mr-1 text-xl' />
						{job.location}
					</div>
					<Link
						to={ `/jobs/${job.id}` }
						className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	)
}

export default JobListing