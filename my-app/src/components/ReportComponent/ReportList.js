import data from './../../data/data';
import ReportListHeader from './ReportListHeader';
const ReportList = ()=>{
    console.log('data',data);

    return (
        <div>
        <h1>This is list of reports</h1>
        <table>
            <thead>
                
                    <ReportListHeader sampleData={data[0]}></ReportListHeader>
                
            </thead>
            <tbody>
                
            </tbody>
        </table>
        </div>
    );
}
export default ReportList;