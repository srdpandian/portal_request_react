import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import { Button,Form,Input,Radio,Select,Upload,Row,Col, Table} from 'antd';
import {geRequest} from '../services/service'

const { Option } = Select;

const MyRequest = ()=>{
    const [form] = Form.useForm();
    const [radiotype,setRadiotype] = useState("")
    const [priority,setpriority] = useState("")
    const [dataListArr,setDataListArr] = useState([])

    const onFinish = (values) => {
        values.user = localStorage.getItem('empuname')

        getMyrequest(values.radiotype,values.priority,localStorage.getItem('empuname'))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onReset = () => {
        form.resetFields();
    };

    useEffect(()=>{
        getMyrequest(radiotype,priority,localStorage.getItem('empuname'))
    },[])

    const getMyrequest = async(radiotype,priority,user)=>{

        const requestResp = await geRequest(radiotype,priority,user)
        const dataArr = requestResp.dataList
        if(dataArr.length > 0){
            setDataListArr(dataArr)
        }else{
            setDataListArr()
        }
        
    }
    console.log(dataListArr,"dataListArr")

    const columns = [{
        title: 'SI.No',
        dataIndex: 'si_no',
        key: 'si_no',
      }, 
      {
        title: 'Project Ref No',
        dataIndex: 'project_ref_no',
        key: 'project_ref_no',
      }, 
      {
        title: 'Reqirement Type',
        dataIndex: 'system',
        key: 'system',
      }, 
      {
        title: 'Project Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Project Dept Name',
        dataIndex: 'dept_name',
        key: 'dept_name',
      },
      {
        title: 'Priority',
        dataIndex: 'project_priority',
        key: 'project_priority',
      },
      {
        title: 'Requested By',
        dataIndex: 'requested_by',
        key: 'requested_by',
      },
      {
        title: 'Requested Dept Name',
        dataIndex: 'requested_by_dept',
        key: 'requested_by_dept',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Link to={`/view_request/${record.id}`}>
            <button type="button" className="btn btn-gradient-info btn-rounded" style={{fontSize:'12px',padding:'10px'}}>View</button>
          </Link>
        ),
    }];

    const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }];


    return(
        <div>
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                        <i className="mdi mdi-home"></i>
                    </span>My  Request</h3>

            </div> 
            <div className='row-flex' style={{ justifyContent:'center' }}>
                <div className='col-md-12'>
                    <div className="card" style={{ borderColor: '#e57373'}}>
                        <div className='card-header' style={{ marginBottom: '0px', backgroundColor: '#e57373', borderColor: '#e57373' }}>
                            <h4>My Request</h4>
                        </div>
                        <div className='card-body' style={{padding:'10px'}}>
                        <Form  
                            form={form}
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Row justify="space-between">
                                <Col span={12}><Form.Item 
                                    label="Requirement Type" 
                                    name="radiotype"
                                    style={{fontWeight:'bold'}}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Requirement Type!',
                                        },
                                    ]}
                                >

                                    <Radio.Group style={{ marginLeft: '40px' }}>
                                        <Radio value={1}> All </Radio>
                                        <Radio style={{ marginLeft: '40px',borderColor:'red'}} value={2}> New </Radio>
                                        <Radio style={{ marginLeft: '40px' }} value={3}> Exiting </Radio>
                                    </Radio.Group>


                                </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="priority"
                                        label="Priority"
                                        style={{fontWeight:'bold'}}
                                        rules={[
                                            {
                                            required: true,
                                            message: 'Please input your priority!',
                                            },
                                        ]}
                                    >
                                        <Select
                                            style={{ width: '50%',marginLeft: '80px' }}
                                        >
                                            <Option>Select</Option> 
                                            <Option value="High">High</Option>
                                            <Option value="Medium">Medium</Option>
                                            <Option value="Low">Low</Option>
                                            
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row justify="space-between">
                                <Col span={24}>
                                <Form.Item style={{ textAlign: 'center' }}>
                                    <Button style={{ fontWeight:'bold' }} type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                    <Button style={{ marginLeft:'10px',fontWeight:'bold' }} type="primary" danger onClick={onReset}>
                                        Cancel
                                    </Button>
                                </Form.Item>
                               
                                </Col>
                               
                            </Row>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-flex" style={{marginTop:'10px'}}>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header"  style={{ marginBottom: '0px', backgroundColor: '#e57373', borderColor: '#e57373' }}>
                            <h4>My Request List</h4>              
                        </div>
                        <div className="card-body">
                            {/* <div className="table-responsive">
                                <table className="table request_table">
                                    <thead>
                                        <tr>
                                            <th> Assignee </th>
                                            <th> Subject </th>
                                            <th> Status </th>
                                            <th> Last Update </th>
                                            <th> Tracking ID </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={require("../../assets/images/faces/face1.jpg")} className="mr-2" alt="face" /> David Grey </td>
                                            <td> Fund is not recieved </td>
                                            <td>
                                                <label className="badge badge-gradient-success">DONE</label>
                                            </td>
                                            <td> Dec 5, 2017 </td>
                                            <td> WD-12345 </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div> */}
                            <Table columns={columns} dataSource={dataListArr} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}
export default MyRequest