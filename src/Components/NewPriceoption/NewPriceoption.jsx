import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const NewPriceoption = ({option}) => {
    const {name,price,features} = option
    return (
        <div className="bg-blue-500 rounded-xl p-4 flex flex-col text-white">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4>
                <span className="text-3xl text-center my-8">{name}</span>
            </h4>
           <div className="pl-6 flex-grow">
           {
                features.map((feature,index) =><Feature key={index} feature={feature}></Feature>)
            }
           </div>
           <button className="nt-12 bg-green-500 w-full py-2 font-bold rounded-lg hover:bg-green-800">Buy now</button>
        </div>
    );
};

NewPriceoption.propTypes ={
    option:PropTypes.object
}
export default NewPriceoption;