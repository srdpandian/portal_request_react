import React,{useEffect, useState} from "react";
import { CSVLink } from "react-csv";
import { Table,ConfigProvider } from 'antd';
import {getHodList} from '../services/service'


const HodApprovalView = () => {
  const[dataList,setDataListArr] = useState([])
  useEffect(() => {
    getHodRecords();
  }, []);

  const getHodRecords = async () => {
    const requestResp = await getHodList();
    console.log(requestResp,"hodlistdata")
    const dataArr = requestResp.dataList;
    
    // if (dataArr.length > 0) {
    //   setDataListArr(dataArr);
    // } else {
    //   setDataListArr();
    // }
  };

  const dataSource = [
    {
      sino: '1',
      requirement: 'Mike',
      refno: 32,
      ptitle: '10 Downing Street',
    }
  ];
  
  const columns = [
    {
      title: 'SI.No',
      dataIndex: 'sino',
      key: 'sino',
      width:'10%'
    },
    {
      title: 'Project Ref No',
      dataIndex: 'refno',
      key: 'refno',
      width:'15%'
    },
    {
      title: 'Requirement',
      dataIndex: 'requirement',
      key: 'requirement',
      width:'10%'
    },
    {
      title: 'Project Title',
      dataIndex: 'ptitle',
      key: 'ptitle',
      width:'10%'
    },
    {
      title: 'Project Dept Name',
      dataIndex: 'pdeptname',
      key: 'pdeptname',
      width:'10%'
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      width:'10%'
    },
    {
      title: 'Requested By',
      dataIndex: 'reqby',
      key: 'reqby',
      width:'10%'
    },
    {
      title: 'Requested Dept Name',
      dataIndex: 'reqdeptname',
      key: 'reqdeptname',
      width:'10%'
    },
    {
      title: 'Status',
      dataIndex: 'sts',
      key: 'sts',
      width:'10%'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width:'10%'
    }
  ];
  
  return (
    <div>
      
      <div className="row-flex">
        <div className="col-12 grid-margin">
          <div className="card" style={{ margin: "20px" }}>
            <div className="card-header" style={{ backgroundColor: "#ffefd5" }}>
              <h4>History</h4>
            </div>

            <div className="card-body">
              <Table type={Table} columns={columns} dataSource={dataSource} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HodApprovalView;
