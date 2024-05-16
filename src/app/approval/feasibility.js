import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Empty, Table, Tag } from "antd";
import { getFeasiList } from "../services/service";

const FeasiblityView = () => {
  const [dataList, setDataListArr] = useState([]);
  useEffect(() => {
    getHodRecords();
  }, []);

  const getHodRecords = async () => {
    const requestResp = await getFeasiList();
    const dataArr = requestResp.list;
    if (dataArr.length !== 0) {
      setDataListArr(dataArr);
    } else {
      setDataListArr();
    }
  };
  
  const columns = [
    {
      title: "SI.No",
      dataIndex: "si_no",
      key: "si_no",
    },
    {
      title: "Project Ref No",
      dataIndex: "project_ref_no",
      key: "project_ref_no",
    },
    {
      title: "Requirement",
      dataIndex: "system",
      key: "system",
    },
    {
      title: "Project Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Project Dept Name",
      dataIndex: "dept_name",
      key: "dept_name",
    },
    {
      title: "Priority",
      dataIndex: "project_priority",
      key: "project_priority",
    },
    {
      title: "Requested By",
      dataIndex: "requested_by",
      key: "requested_by",
    },
    {
      title: "Requested Dept Name",
      dataIndex: "requested_by_dept",
      key: "requested_by_dept",
    },
    {
      title: "Status",
      dataIndex: "status_history",
      key: "status_history",
      width:'150',
      render:(text,record)=>{
        return(
          <Tag color={record.status === 'HODApproved' ? '#2db7f5' : record.status === 'Completed' ? '#87d068' : '#f50'}  key={text}>{text}</Tag>
        )
      }
      
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Link to={`/feasibilty_view_request/${record.id}`}>
          <button
            type="button"
            className="btn btn-gradient-danger btn-rounded"
            style={{ fontSize: "12px", padding: "10px" }}
          >
            View
          </button>
        </Link>
      ),
    },
  ];

  return (
    <div>
      {/* <CSVLink data={csvData}>
        <button style={{marginLeft:'20px',marginTop:'20px',marginBottom:'10px',backgroundColor:'grey',width:'70px',height:'30px',color:'white',fontWeight:'bold'}}>CSV</button>
      </CSVLink> */}
      <div className="row-flex">
        <div className="col-12 grid-margin">
          <div className="card" style={{ margin: "20px" }}>
            <div className="card-header" style={{ backgroundColor: "#ffefd5" }}>
              <h4>Feasibility Study</h4>
            </div>

            <div className="card-body">
              {dataList.length !== 0 ? (
                <Table
                  columns={columns}
                  dataSource={dataList}
                  scroll={{
                    x: 400,
                  }}
                />
              ) : (
                <Empty />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeasiblityView;
