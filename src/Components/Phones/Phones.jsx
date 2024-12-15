import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar,XAxis, YAxis, Tooltip } from 'recharts';
import { Audio, DNA } from 'react-loader-spinner'
const Phones = () => {
    const [phones,setPhones] = useState([])
    const[loading,setLoading] = useState(true)
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res =>res.json())
        // .then(data => setPhones(data.data))
        // using axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data
            const phoneWithFakeData = phoneData.map(phone =>{
                const obj ={
                    name :phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            console.log(phoneWithFakeData)
            setPhones(phoneWithFakeData)
            setLoading(false)            
        })
    },[])
    return (
        <div>

{loading && <div>
    <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
<DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
</div>}
 


            <h2>phones:{phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phones;