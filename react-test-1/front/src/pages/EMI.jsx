import React, { useState } from 'react'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { PieChart } from 'react-minimal-pie-chart';
import './EMI.css'

const EMI = () => {
    let [loan, setLoan] = useState(2500000)
    let [time, setTime] = useState(30)
    let [rate, setRate] = useState(7.75)
    let [emi, setEmi] = useState(0)
    let [int, setInt] = useState(0)
    let [total, setTotal] = useState(0)

    

    let getLoan = (e)=>{
        let x = Math.floor(e[1]);
        setLoan(x*100000);
    }
    let getTime = (e)=>{
        let x = e[1];
        setTime(x)
    }
    let getRate = (e)=>{
        console.log(e)
        let x = e[1]/4;
        setRate(x);
    }


    let calculate = ()=>{
        let p = loan;
        let r = rate/1200;
        let m = time*12;
        

        let x = (1 + r)**m;
        
        let y = (p * r * x);
        let z = x-1;
        let emi = Math.floor(y/z);
        let total = emi*m;
        let int = total-loan;
        setInt(int)
        setTotal(total)
        setEmi(emi)


    }


    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <h3 className='text-center'>Home Load EMI Calculator</h3>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card m-2 p-4" style={{ minHeight: 500, backgroundColor: "#ccc" }}>
                                <div className="my-4">
                                    <div className='d-flex justify-content-between'>
                                        <label>Loan Amount</label>
                                        <input type='text' style={{ width: 150 }} className='form-control' value={loan} onChange={(e)=>setLoan(e.target.value)}/>
                                    </div>
                                    <RangeSlider
                                        min={1}
                                        step={.1}
                                        onThumbDragEnd={calculate}
                                        onInput={e=>getLoan(e)}
                                        className="single-thumb"
                                        defaultValue={[1, loan/100000]}
                                        thumbsDisabled={[true, false]}
                                        rangeSlideDisabled={true}
                                    />
                                    <div className='d-flex justify-content-between mt-1'>
                                        <small>1 Lac</small>
                                        <small>10 Cr</small>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <div className='d-flex justify-content-between'>
                                        <label>Tenure (Years)</label>
                                        <input type='text' style={{ width: 50 }} className='form-control' value={time} onChange={(e)=>setTime(e.target.value)} />
                                    </div>
                                    <RangeSlider
                                        min={1}
                                        max={30}
                                        onThumbDragEnd={calculate}
                                        onInput={e=>getTime(e)}
                                        className="single-thumb"
                                        defaultValue={[0, time*2]}
                                        thumbsDisabled={[true, false]}
                                        rangeSlideDisabled={true}
                                    />
                                    <div className='d-flex justify-content-between mt-1'>
                                        <small>1 Year</small>
                                        <small>30 Year</small>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <div className='d-flex justify-content-between'>
                                        <label>Interest Rate (%PA)</label>
                                        <input type='text' style={{ width: 100 }} className='form-control' value={rate} onChange={(e)=>setRate(e.target.value)} />
                                    </div>
                                    <RangeSlider
                                        min={1}
                                        max={60}
                                        onInput={e=>getRate(e)}
                                        onThumbDragEnd={calculate}
                                        className="single-thumb"
                                        defaultValue={[0, 10]}
                                        thumbsDisabled={[true, false]}
                                        rangeSlideDisabled={true}
                                    />
                                    <div className='d-flex justify-content-between mt-1'>
                                        <small>0.25</small>
                                        <small>15</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card m-2 p-4" style={{ minHeight: 500, backgroundColor: "#414141" }}>
                                <div className="row">
                                    <div className="col-md-4 text-light">
                                        <div className='my-4'>
                                            <h6>Monthly EMI</h6>
                                            <h2>{emi}</h2>
                                        </div>
                                        <div className='my-4'>
                                            <h6>Principal Amount</h6>
                                            <h2>{loan}</h2>
                                        </div>
                                        <div className='my-4'>
                                            <h6>Intrest Amount</h6>
                                            <h2>{int}</h2>
                                        </div>
                                        <div className='my-4'>
                                            <h6>Total Amount</h6>
                                            <h2>{total}</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <PieChart
                                            data={[
                                                { title: 'One', value: 10, color: '#35c9f2' },
                                                { title: 'Two', value: 15, color: '#1f61b8' },

                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EMI