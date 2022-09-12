import './Home.css'
import { FaTape } from 'react-icons/fa';

const Home = () => {

    var convert = (givenUnits, desiredUnits, number) => {
        const conversionMap = {
            kilometer: {
                kilometer: num => num,
                meter: num => num * 1000,
                centimeter: num => num * 100000,
                millimeter: num => num * 1000000,
                micrometer: num => num * 1000000000,
                mile: num => num / 1.609,
                yard: num => num * 1094,
                feet: num => num * 3281,
                inch: num => num * 39370
            },
            meter: {
                kilometer: num => num / 1000, 
                meter: num => num, 
                centimeter: num => num * 100, 
                millimeter: num => num * 1000, 
                micrometer: num => num * 1000000, 
                mile: num => num / 1609, 
                yard: num => num * 1.094, 
                feet: num => num * 3.281,
                inch: num => num * 39.37
            },
            centimeter: {
                kilometer: num => num / 100000,
                meter: num => num / 100,
                centimeter: num => num,
                millimeter: num => num * 10,
                micrometer: num => num * 10000,
                mile: num => num / 160900,
                yard: num => num / 91.44,
                feet: num => num / 30.48,
                inch: num => num / 2.54
            },
            millimeter: {
                kilometer: num => num / 0.000001,
                meter: num => num / 1000,
                centimeter: num => num / 10,
                millimeter: num => num,
                micrometer: num => num * 1000,
                mile: num => num / 1609000,
                yard: num => num / 914.4,
                feet: num => num / 304.8,
                inch: num => num / 25.4
            },
            micrometer: {
                kilometer: num => num / 1000000000,
                meter: num => num / 1000000,
                centimeter: num => num / 10000,
                millimeter: num => num / 1000,
                micrometer: num => num,
                mile: num => num / 1609000000,
                yard: num => num / 914400,
                feet: num => num / 304800,
                inch: num => num / 25400
            },
            mile: { //here
                kilometer: num => num * 1.609,
                meter: num => num * 1609,
                centimeter: num => num * 160900,
                millimeter: num => num * 1609000,
                micrometer: num => num * 1609000000,
                mile: num => num,
                yard: num => num * 1760,
                feet: num => num * 5280,
                inch: num => num * 63360
            },
            yard: {
                kilometer: num => num / 1094,
                meter: num => num / 1.094,
                centimeter: num => num * 91.44,
                millimeter: num => num * 914.4,
                micrometer: num => num * 914400,
                mile: num => num / 1760,
                yard: num => num,
                feet: num => num * 3,
                inch: num => num / 36
            },
            feet: {
                kilometer: num => num / 3281,
                meter: num => num / 3.281,
                centimeter: num => num * 30.48,
                millimeter: num => num * 304.8,
                micrometer: num => num * 304800,
                mile: num => num / 5280,
                yard: num => num / 3,
                feet: num => num,
                inch: num => num * 12
            },
            inch: {
                kilometer: num => num / 39370,
                meter: num => num / 39.37,
                centimeter: num => num * 2.54,
                millimeter: num => num * 25.4,
                micrometer: num => num * 25400,
                mile: num => num / 63360,
                yard: num => num / 36,
                feet: num => num / 12,
                inch: num => num
            }
          }
        
        if(number === undefined){
            return "Please enter a value";      
        }

        if(givenUnits === 'feet' && number === '1' && desiredUnits !== 'feet'){

            return `${number} foot is equivalent to ${conversionMap[givenUnits][desiredUnits](number)} ${desiredUnits}(s)`; 

        } else if(givenUnits === 'feet' && number === '1' && desiredUnits === 'feet'){

            return `${number} foot is equivalent to ${conversionMap[givenUnits][desiredUnits](number)} foot`;

        } else {

            return `${number} ${givenUnits}(s) is equivalent to ${conversionMap[givenUnits][desiredUnits](number)} ${desiredUnits}(s)`;  
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let ans = document.querySelector('.answer');
        let val = e.target[0].value;
        
        try {
            val = eval(val);
        } catch (e) {
            if(e instanceof ReferenceError) {
                ans.innerHTML = 'Please enter a value';
            } 
        }

        val = eval(val);
        let from = e.target[1].value;
        let to = e.target[2].value;
        console.log(val, from, to);
        
        ans.innerHTML = `${convert(from, to, val).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
        
        
    }
    
    return ( 
        <div className="home">
            <h5>Distance Friend</h5>
            <FaTape className='icon' />
            <form onSubmit={handleSubmit}>
                <label htmlFor="from">
                    <h6>From</h6>
                    <input type="text" id="num" require="true" />
                    <select>
                        <option value="kilometer">kilometer(s)</option>
                        <option value="meter">meter(s)</option>
                        <option value="centimeter">centimeter(s)</option>
                        <option value="millimeter">millimeter(s)</option>
                        <option value="micrometer">micrometer(s)</option>
                        <option value="mile">mile(s)</option>
                        <option value="yard">yard(s)</option>
                        <option value="feet">feet</option>
                        <option value="inch">inch(s)</option>
                    </select>
                </label>
                <label htmlFor="to">
                    <h6>To</h6>
                    <select>
                        <option value="kilometer">kilometer(s)</option>
                        <option value="meter">meter(s)</option>
                        <option value="centimeter">centimeter(s)</option>
                        <option value="millimeter">millimeter(s)</option>
                        <option value="micrometer">micrometer(s)</option>
                        <option value="mile">mile(s)</option>
                        <option value="yard">yard(s)</option>
                        <option value="feet">feet</option>
                        <option value="inch">inch(s)</option>
                    </select>
                </label>
                <br />
                <button>Submit</button>
            </form>
            <div className="answer"></div>
        </div> 
    );
}
 
export default Home;