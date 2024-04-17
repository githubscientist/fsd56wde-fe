import { instance, protectedInstance } from './instance';

const jobServices = {
    getJobs: async () => {
        return protectedInstance.get('/jobs');
    }
}

export default jobServices;