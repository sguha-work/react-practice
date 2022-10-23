const ReportListHeader = (props) => {
    const sampleData = props['sampleData'];
    console.log('sample data', sampleData);
    return (
        <tr>
            {
                Object.keys(sampleData).map((key) => {
                    return (
                        <th>{key}</th>
                    );
                })
            }
        </tr>
    )
}
export default ReportListHeader;