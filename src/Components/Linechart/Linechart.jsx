import { LineChart as LC, Line,XAxis,YAxis } from 'recharts';


const Linechart = () => {
    const Englishdata = [
        { id: 1, name: "Alice", math: 82, physics: 75, english: 78 },
        { id: 2, name: "Bob", math: 90, physics: 85, english: 85 },
        { id: 3, name: "Charlie", math: 95, physics: 88, english: 92 },
        { id: 4, name: "Diana", math: 72, physics: 70, english: 74 },
        { id: 5, name: "Ethan", math: 89, physics: 84, english: 88 },
        { id: 6, name: "Fiona", math: 76, physics: 80, english: 81 },
        { id: 7, name: "George", math: 98, physics: 91, english: 95 },
        { id: 8, name: "Hannah", math: 65, physics: 67, english: 69 },
        { id: 9, name: "Isaac", math: 88, physics: 86, english: 87 },
        { id: 10, name: "Julia", math: 93, physics: 90, english: 90 },
      ];
      
    return (
        <div>
            <LC width={800} height={400} data={Englishdata}>
                <XAxis dataKey="name"/>
                <YAxis/>
            <Line dataKey='physics' stroke ='red'></Line>
            <Line dataKey='english' stroke ='yellow'></Line>
            
            </LC>
        </div>
    );
};

export default Linechart;