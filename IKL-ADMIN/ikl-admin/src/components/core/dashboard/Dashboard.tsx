import './Dashboard.css'
import DashboardComponent from './DashboardComponent';
import { ModeToggle } from '@/components/mode-toggle';

const Dashboard = () => {
    return (
        <>
            <div className=" my-5 mx-auto w-2/5 text-end ">
                <ModeToggle />
            </div>
            <h1 className="w-1/4 my-5 mx-auto p-10 text-4xl text-center font-bold ">Add Event</h1>
            <div className=" w-1/4 my-5 mx-auto ">
                <DashboardComponent />
            </div>
        </>
    )
};

export default Dashboard;