import { useLoaderData } from "react-router-dom";
import jobServices from "../services/jobServices";

export const loader = async () => {
    const jobs = await jobServices.getJobs();
    return { jobs };
}

const Jobs = () => {

    const { jobs } = useLoaderData();

  return (
      <div>
          <ul>
                {jobs.data.jobs.map((job) => (
                    <li key={job._id}>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                    </li>
                ))} 
          </ul>
    </div>
  )
}

export default Jobs;