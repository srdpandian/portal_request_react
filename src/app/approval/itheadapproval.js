import React,{useEffect, useState} from "react";
import { Table,ConfigProvider } from 'antd';
import {getITHodList} from '../services/service'


const ItHodApprovalView = () => {
  const[dataList,setDataListArr] = useState([])
  useEffect(() => {
    getHodRecords();
  }, []);

  const getHodRecords = async () => {
    const requestResp = await getITHodList();
    console.log(requestResp,"ithodlistdata")
    const dataArr = requestResp.dataList;
  };

  const dataSource = [
    {
      sino: '1',
      requirement: 'Mike',
      refno: 32,
      ptitle: '10 Downing Srteet',
    }
  ];
  
  const columns = [
    {
      title: 'SI.No',
      dataIndex: 'sino',
      key: 'sino',
    },
    {
      title: 'Project Ref No',
      dataIndex: 'refno',
      key: 'refno',
    },
    {
      title: 'Requirement',
      dataIndex: 'requirement',
      key: 'requirement',
    },
    {
      title: 'Project Title',
      dataIndex: 'ptitle',
      key: 'ptitle',
    },
    {
      title: 'Project Dept Name',
      dataIndex: 'pdeptname',
      key: 'pdeptname',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Requested By',
      dataIndex: 'reqby',
      key: 'reqby',
    },
    {
      title: 'Requested Dept Name',
      dataIndex: 'reqdeptname',
      key: 'reqdeptname',
    },
    {
      title: 'Status',
      dataIndex: 'sts',
      key: 'sts',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    }
  ];
  
  return (
    <div>
      <div className="row-flex">
        <div className="col-12 grid-margin">
          <div className="card" style={{ margin: "20px" }}>
            <div className="card-header" style={{ backgroundColor: "#ffefd5" }}>
              <h4>IT HOD Approval</h4>
            </div>

            <div className="card-body">
              <ConfigProvider
                theme={{
                  token: {
                    headerBg: "blue",
                  },
                  components: {
                    Table: {
                      headerBg:"blue",
                    },
                  },
                }}
              >
              <Table type={Table} columns={columns} dataSource={dataSource} />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItHodApprovalView;
