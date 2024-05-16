import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from 'moment'
import {
  Card,
  Col,
  Table,
  Row,
  Tag,
  Radio,
  Form,
  Select,
  InputNumber,
  DatePicker,
  Button,
  Input,
} from "antd";
import { getFeasibleViewDetailService } from "../services/service";
import { Option } from "antd/es/mentions";

const { TextArea } = Input;
const RequestView = () => {
  const params = useParams();
  const [value, setValue] = useState("horizontal")
  const [viewPageResp, setViewResp] = useState([])
  const [radvalue, setRadioValue] = useState("")
  const [approveList, setApproveList] = useState([])
  useEffect(() => {
    getFeasibViewDetail(params.id);
  }, [params.id]);
  const getFeasibViewDetail = async (viewid) => {
    const viewResp = await getFeasibleViewDetailService(viewid);
    if (viewResp) {
        console.log(viewResp,'viewResp')
      const totalResp = viewResp.data[0];
      const stsList = viewResp.data.sts_list;
      totalResp["cs_emp_name"] = viewResp.data.cs_emp_name;
      totalResp["dept_name"] = viewResp.data.dept_name;
      totalResp["system_desc"] = viewResp.data.system_desc;
      totalResp["sts_list"] = viewResp.data.sts_list;
        
      setViewResp(totalResp);
      setApproveList(stsList);
    }

  };
 
  const origonalDataArr = []
  if(approveList.length > 0){
    approveList.map((data,index) =>{
      return origonalDataArr.push({
        slno:index+1,
        cmt: data.comment,
        sts: data.sts,
        upby: data.approved_byname,
        upddate: data.approved_by,
        clr_code: data.color_code
      })
    })
  }
  console.log(origonalDataArr,'origonalDataArr')
  

  const columns = [
    {
      title: "SL.No",
      dataIndex: "slno",
      key: "slno",
    },
    {
      title: "Comments",
      dataIndex: "cmt",
      key: "cmt",
    },
    {
      title: "Status",
      dataIndex: "sts",
      key: "sts",
      render: (text, row) => {
        let color = row.clr_code;
        if(row.sts === "Submitted"){
          color="#999"
        }else if(row.sts === "HODApproved"){
          color="#2196f3"
        }else if(row.sts === "Feasibility Checked"){
          color="#5bc012"
        }else if(row.sts === "ITHead Approved"){
          color="#5bc0de"
        }else if(row.sts === "Inprocess"){
          color="#f0ad4e"
        }else if(row.sts === "Awaiting for UAT"){
          color="#ffefd5"
        }
        
        console.log(color,'color')
        return (
          <Tag color={color} key={row.sts}>
            {row.sts.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Updated By",
      dataIndex: "upby",
      key: "upby",
    },
    {
      title: "Updated Date",
      dataIndex: "upddate",
      key: "upddate",
      render:(text,row)=>{
        return(
          <div>
          {moment(row.upddate).format('DD-MMM-YYYY')}
        </div> 
        )
      }
    },
  ];
  const cardStylecss = {
    margin: "50px",
    color: "black",
    fontWeight: "bold",
  };
  const dataStylecss = {
    fontFamily: "sans-serif",
  };
  const divStyles = {
    backgroundColor: "#f1d0d0",
  };
  const headerStyles = {
    backgroundColor: "#c2b280",
    color: "black",
    fontWeight: "bold",
  };
  const handleStartDate = (date, dateString) => {
    console.log(dateString, "startval");
  };
  const handleEndDate = (date, dateString) => {
    console.log(dateString, "startval");
  };
  const handleRadio = (val) => {
    setRadioValue(val);
  };
  console.log(radvalue, "testtesttest");
  return (
    <div>
      <Card style={cardStylecss} title="Approval" headStyle={headerStyles}>
        <table className="table table-bordered">
          <tr style={{ backgroundColor: "#8FD0F7" }}>
            <td className="bg-blue" align="left" colspan="4" border="1">
              &nbsp;<b>View</b>
            </td>
          </tr>
          <tr>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Reference Number</b>
            </td>
            <td style={{ color: "red", fontWeight: "bold" }}>
              <b>{viewPageResp !== null ? viewPageResp.project_ref_no : "-"}</b>
            </td>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Feasibility Study</b>
            </td>
            <td style={dataStylecss} colspan="3">
              {viewPageResp !== null ? viewPageResp.feasible_status : "-"}
            </td>
          </tr>
          <tr>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Requirement Type</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.system : "-"}
            </td>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Project Developer</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.project_developer : "-"}
            </td>
          </tr>
          <tr>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Project Title</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.system_desc : "-"}
            </td>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Development Days</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.dev_days : "-"}
            </td>
          </tr>

          <tr>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Project Department Name</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.dept_name : "-"}
            </td>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Tentative Start Date</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.tentative_start_date : "-"}
            </td>
          </tr>

          <tr>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Current Process</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.current_process : "-"}
            </td>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Tentative End Date</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.tentative_target_date : "-"}
            </td>
          </tr>

          <tr>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Proposed Process</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.proposed_process : "-"}
            </td>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Priority</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.project_priority : "-"}
            </td>
          </tr>

          <tr>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Select 4FP</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.four_fp : "-"}
            </td>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Actual Start Date</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.project_start_date : "-"}
            </td>
          </tr>

          <tr>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Outcome</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.outcome : "-"}
            </td>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Actual End Date</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.dev_completed_date : "-"}
            </td>
          </tr>

          <tr>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Document</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.project_document : "-"}
            </td>
            <td className="danger" style={divStyles} align="right">
              &nbsp;<b>Raised By</b>
            </td>
            <td style={dataStylecss}>
              {viewPageResp !== null ? viewPageResp.project_document : "-"}
            </td>
          </tr>
        </table>
        <br />
        <div style={{ marginTop: "10px" }}>
          <div
            classNameName="history"
            style={{
              backgroundColor: "#778899",
              padding: "10px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            height="20px"
          >
            History
          </div>
          <Table dataSource={origonalDataArr} columns={columns} />
        </div>
      </Card>
    </div>
  );
};
export default RequestView;
