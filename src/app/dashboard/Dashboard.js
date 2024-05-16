import React, { useEffect,useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Empty } from 'antd';

import {
  getDebtChatOl,
  getDebt,
  getDebtchartData,
  getUserchartDataService
} from '../services/service' 


const Dashboard = () => {
 
  
  const [debartmt,SetDepartment] = useState([])
  const [allDebt,setAllDebt]   = useState([])
  const [debtid,setDebtid]  = useState(0)
  const [deptWisTkt,setAllDebtChart] = useState([])
  const [userChart,setuserChart] = useState([])
  const [userChartlength, setArraylength] = useState([])
  
  let userval =  localStorage.getItem("deptid")
  let username =  localStorage.getItem("empuname")
 
  useEffect(()=>{
    getDebartmentData()
    getAllDebt()
    getUserchartData()
  },[])

  useEffect(()=>{
    getDebptwiseChart()
  },[debtid])

 

  const getUserchartData = async()=>{
    const url = "dashboard_user"
    const chartRespomse = await getUserchartDataService(url)
    if(chartRespomse.data !== undefined  ){
      setuserChart(chartRespomse.data)
      const allZeros = chartRespomse.data.userdata
      const valcheck = allZeros.every(zeroTest)

      setArraylength(valcheck)
    }
  }

  function zeroTest(element) {
    return element === 0;
  }
  

  const getDebartmentData = async()=>{
    const url = "dashboard_all_dept"
    const chartRespomse = await getDebtChatOl(url)
    if(chartRespomse.data !== undefined  ){
      SetDepartment(chartRespomse.data)
    }
  }

  const getAllDebt = async()=>{
    const url = "get_all_dept"
    const chartRespomse = await getDebt(url)
    if(chartRespomse.data !== undefined  ){
      setAllDebt(chartRespomse.data)
    }
  }

  const getDebptwiseChart = async()=>{
    const url = "dashboard_dept"
    const data = {
      "dept_id" : debtid
    }
    const chartRespomse = await getDebtchartData(url,data)

    if(chartRespomse.data !== undefined  ){
      setAllDebtChart(chartRespomse.data)
      
    }
  }


  // console.log(userChartlength,'testtetstets')  

  const visitSaleOptions={
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0
        },
        scaleLabel: {
          display: true,
          labelString: 'No of Count',
          font: '20px'
        }
      }],
      
    }, 
  }

  const SaleOptions={
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0
        },
        scaleLabel: {
          display: true,
          labelString: 'No of Count',
          font: '20px'
        }
      }],
      
    }, 
  }

  const newVisitSaleData = {
    labels: debartmt.deptname,
    datasets: [
      {
        label: "Open Points",
        borderColor:'#D4AF37',
        backgroundColor: '#D4AF37',
        hoverBackgroundColor: '#D4AF37',
        legendColor:'#D4AF37',
        pointRadius: 0,
        fill: false,
        borderWidth: 1,
        data: debartmt.Oplan
      },
      {
        label: "Closed Points",
        borderColor: '#F08080',
        backgroundColor: '#F08080',
        hoverBackgroundColor: '#F08080',
        legendColor: '#F08080',
        pointRadius: 0,
        fill: false,
        borderWidth: 1,
        data: debartmt.Cplan,
      },
      {
        label: "Overall  Count",
        borderColor: '#008080',
        backgroundColor: '#008080',
        hoverBackgroundColor: '#008080',
        legendColor: '#008080',
        pointRadius: 0,
        fill: false,
        borderWidth: 1,
        data:debartmt.totalval,
      }
    ]
  }

 
  const dbtountData = {
    labels: deptWisTkt.stss,
    datasets: [
      {
        label: "Points",
        borderColor:['#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#cc80ff','#D4AF37'],
        backgroundColor: ['#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#cc80ff','#D4AF37'],
        hoverBackgroundColor: ['#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#cc80ff','#D4AF37'],
        legendColor:['#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#cc80ff','#D4AF37'],
        
        pointRadius: 0,
        fill: false,
        borderWidth: 1,
        data: deptWisTkt.depdata
      }
    ]
  }

  const userData = {
    labels: userChart.stss,
    datasets: [
      {
        label: "Points",
        borderColor:['#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#cc80ff','#D4AF37'],
        backgroundColor: ['#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#cc80ff','#D4AF37'],
        hoverBackgroundColor: ['#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#cc80ff','#D4AF37'],
        legendColor:['#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#ff5c33','#ffb3ff','#f7a35c','#90ee7e','#80ffbf','#669999','#cc80ff','#D4AF37'],
        
        pointRadius: 0,
        fill: false,
        borderWidth: 1,
        data: userChart.userdata
      }
    ]
  }
  
  const handleChangeDebt = (e)=>{
    setDebtid(e.target.value)
  }






  return (
    <div>

      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className="mdi mdi-home"></i>
          </span> Dashboard </h3>

      </div>
      {userval === "14" ? 
        <div>
          <div className="row" style={{ justifyContent: 'center', marginBottom: "20px" }}>
            <div className="col-md-11">
              <div className="card">
                <div className="card-header" style={{ backgroundColor: '#e5ccc9' }}>
                  <h4 className="card-title tilt" style={{ textAlign: 'center', marginBottom: '0px' }}>IT Ticketing Overall Status</h4>
                </div>
                <div className="card-body">
                  <div className="clearfix mb-4">
                    {/* <h4 className="card-title" style={{textAlign:'center'}}>IT Ticketing Overall Status</h4> */}
                  </div>
                  <Bar className="chartLegendContainer" data={newVisitSaleData} options={visitSaleOptions} id="visitSaleChart" />
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ justifyContent: 'center', marginBottom: "20px" }}>
            <div className="col-md-11">
              <div className="card">
                <div className="card-header" style={{ backgroundColor: '#e5ccc9' }}>
                  <h4 className="card-title tilt" style={{ textAlign: 'center', marginBottom: '0px' }}>IT Ticketing - Department Wise Status</h4>
                </div>
                <div className="card-body">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Department</label>
                      <select className="form-control" onChange={e => handleChangeDebt(e)} id="exampleFormControlSelect1">
                        <option value="0">Please Select</option>
                        {allDebt.length > 0 ?
                          allDebt.map((val) => {
                            return <option value={val.dept_id}>{val.dept_name}</option>;
                          })
                          : ""
                        }
                      </select>
                    </div>
                  </div>
                  <Bar height={30} width={80} className="chartLegendContainer" data={dbtountData} options={SaleOptions} id="visitSaleChart" />
                </div>
              </div>
            </div>

          </div>
        </div>
      : 
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col-md-11">
            <div className="card">
              <div className="card-header" style={{ backgroundColor: '#e5ccc9' }}>
                <h4 className="card-title tilt" style={{ textAlign: 'center', marginBottom: '0px' }}>IT Ticketing - User Status</h4>
              </div>
              <div className="card-body">

                {userChartlength === false ?
                  <Bar height={40} width={80} className="chartLegendContainer" data={userData} options={SaleOptions} id="visitSaleChart" />
                  :
                  <Empty />
                }

              </div>
            </div>
          </div>

        </div>
      }
      
      


    </div>
  );

}

export default Dashboard;