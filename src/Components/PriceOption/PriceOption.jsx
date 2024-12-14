import NewPriceoption from "../NewPriceoption/NewPriceoption";


const PriceOption = () => {

    [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 20,
          "billingCycle": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 fitness class per month",
            "Basic app access for workout tracking",
            "Free water refill station access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 40,
          "billingCycle": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited fitness classes",
            "Access to sauna and steam room",
            "Access to yoga and pilates sessions",
            "1 free nutritional consultation per month",
            "Priority booking for classes",
            "Gym app with workout suggestions and analytics"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 60,
          "billingCycle": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited fitness classes",
            "Access to sauna and steam room",
            "1 personal training session per month",
            "Free guest pass (2 per month)",
            "Access to exclusive workout zones",
            "Free gym merchandise (once per year)",
            "Customized meal plans",
            "Early access to new gym services and classes"
          ]
        },
        {
          "id": 4,
          "name": "Annual Plan",
          "price": 400,
          "billingCycle": "yearly",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited fitness classes",
            "Access to sauna and steam room",
            "2 personal training sessions per month",
            "Free guest pass (5 per month)",
            "Discount on additional personal training sessions",
            "Priority parking",
            "Free access to special workshops and events",
            "Gym app with premium features (custom routines, progress tracking, etc.)",
            "Free towel service"
          ]
        }
      ]
      

    return (
        <div>
            <h2 className="text-5xl">best price in the town:</h2>
            {
                PriceOption.map(option => <NewPriceoption key={option.id} option ={option}></NewPriceoption>) 
            }
        </div>
    );
};

export default PriceOption;