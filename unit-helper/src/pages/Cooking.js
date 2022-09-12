import './Cooking.css'

import { GiCookingPot } from 'react-icons/gi'

const Cooking = (e) => {

    var convert = (givenUnits, desiredUnits, number) => {
        const conversionMap = {
            gallon: {
                gallon: num => (num),
                quart: num => (num) * 4,
                pint: num => (num) * 8,
                cup: num => (num) * 16,
                ounce: num => (num) * 128,
                tablespoon: num => (num) * 256,
                teaspoon: num => (num) * 768,
            },
            quart: {
                gallon: num => (num) / 4,
                quart: num => (num),
                pint: num => (num) * 2,
                cup: num => (num) * 4,
                ounce: num => (num) * 32,
                tablespoon: num => (num) * 64,
                teaspoon: num => (num) * 192,
            },
            pint: {
                gallon: num => (num) / 8,
                quart: num => (num) / 2,
                pint: num => (num),
                cup: num => (num) * 2,
                ounce: num => (num) * 16,
                tablespoon: num => (num) * 32,
                teaspoon: num => (num) * 96
            },
            cup: {
                gallon: num => (num) / 16,
                quart: num => (num) / 4,
                pint: num => (num) / 2,
                cup: num => (num),
                ounce: num => (num) * 8,
                tablespoon: num => (num) * 16,
                teaspoon: num => (num) * 48
            },
            ounce: {
                gallon: num => (num) / 128,
                quart: num => (num) / 32,
                pint: num => (num) / 16,
                cup: num => (num) / 8,
                ounce: num => (num),
                tablespoon: num => (num) * 2,
                teaspoon: num => (num) * 6
            },
            tablespoon: {
                gallon: num => (num) / 256,
                quart: num => (num) / 64,
                pint: num => (num) / 32,
                cup: num => (num) / 16,
                ounce: num => (num) / 2,
                tablespoon: num => (num),
                teaspoon: num => (num) * 3,
            },
            teaspoon: {
                gallon: num => (num) / 768,
                quart: num => (num) / 192,
                pint: num => (num) / 96,
                cup: num => (num) / 48,
                ounce: num => (num) / 6,
                tablespoon: num => (num) / 3,
                teaspoon: num => (num),
            }
          }

        
        return number === undefined ? "Please enter a value" : `${number} ${givenUnits}(s) is equivalent to ${conversionMap[givenUnits][desiredUnits](number)} ${desiredUnits}(s)`;  

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
        let from = e.target[1].value;
        let to = e.target[2].value;

        ans.innerHTML = `${convert(from, to, val).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
        
    }

    return ( 
        <div className="cooking">
            <h5>Cooking Friend</h5>
            <GiCookingPot className='icon' />
            <form onSubmit={handleSubmit}>
                <label htmlFor="from">
                    <h6>From</h6>
                    <input type="text" id="num" require="true"/>
                    <select>
                        <option value="gallon">gallon(s)</option>
                        <option value="quart">quart(s)</option>
                        <option value="pint">pint(s)</option>
                        <option value="cup">cup(s)</option>
                        <option value="ounce">ounce(s)</option>
                        <option value="tablespoon">tablespoon(s)</option>
                        <option value="teaspoon">teaspoon(s)</option>
                    </select>
                </label>
                <label htmlFor="to">
                    <h6>To</h6>
                    <select>
                        <option value="gallon">gallon(s)</option>
                        <option value="quart">quart(s)</option>
                        <option value="pint">pint(s)</option>
                        <option value="cup">cup(s)</option>
                        <option value="ounce">ounce(s)</option>
                        <option value="tablespoon">tablespoon(s)</option>
                        <option value="teaspoon">teaspoon(s)</option>
                    </select>
                </label>
                <br />
                <button>Submit</button>
            </form>
            <div className="answer"></div>
        </div> 
    );
}
 
export default Cooking;