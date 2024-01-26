import './Dashboard.css'
import DashboardComponent from './DashboardComponent';


const Dashboard = () => {
    return (
        <>
            <h1 className="w-1/4 my-5 mx-auto p-10 text-4xl text-center font-bold  md:w-80 ">Add Event</h1>
            <div className=" w-1/4 my-5 mx-auto md:w-3/4 xl:w-1/2 sm:w-full ">
                <DashboardComponent />
            </div>
        </>
    )
};

export default Dashboard;