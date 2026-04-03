import { useEffect, useState } from 'react';
import jobs from '../jobs.json';
import JobListing from './JobListing';
import Spinners from './Spinners';



const JobListings = ({ isHome = false }) => {
	// console.log( jobs.length - 2, "jobs");


	const [jobs, SetJobs] = useState([])
	const [loading, setLoading] = useState(true);

	// const recentJobs = isHome ? jobs.slice(0, 3) : jobs;

	// console.log(recentJobs, "recentJobs");

	useEffect(() => {
		const fetchJobs = async () => {
			const apUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
			try {
				const res = await fetch(apUrl);
				const data = await res.json();
				SetJobs(data);
				// console.log(data, "data");
				// console.log(SetJobs, "data");

			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
		fetchJobs();
	}, [])

	const JobListings = isHome ? jobs.slice(0, 3) : jobs;

	return (
		<section className="bg-blue-50 px-4 py-10">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
					{isHome ? 'Recent Jobs' : 'Browse Jobs'}
				</h2>

				{
					loading ? (<Spinners />) : (
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{jobs?.map((job) => (
								<JobListing key={job.id} job={job} />
							))}
						</div>
					)
				}


			</div>
		</section>
	)
}

export default JobListings