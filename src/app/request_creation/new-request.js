import React, { useState, useEffect } from 'react'
import { Button,Form,Input,Radio,Select,Upload,Row,Col} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'
import {getFullSys,insertRequest} from '../services/service'


const { Option } = Select;
const { TextArea } = Input;
const RequestCreation = () => {
    const [form] = Form.useForm();
    const [radval,setRadVal] = useState(0)
    const [stsdesc,setStsdesc] = useState([])

    const onFinish = (values) => {
        values.editId = ''
        if(values.proj === undefined ){
            values.proj_title = ""
        }else{
            values.proj_title = values.proj
        }
        let formData = new FormData()
        formData.append('req_type', values.req_type);   //append the values with key, value pair
        formData.append('proj_title', values.proj_title);
        formData.append('existing_name', values.existing_name);
        formData.append('cur_process', values.cur_process);
        formData.append('pros_process', values.pros_process);
        formData.append('sel_4fp', values.sel_4fp);
        formData.append('outcome', values.outcome);
        formData.append('editId', values.editId);

        createRequest(formData);
        
    };

    useEffect(()=>{
        getSystem() 
    },[]);

    const getSystem = async ()=>{
        const url = "getSystemOld"
        const systemResp = await getFullSys(url)
        if(systemResp.data !== undefined  ){
            setStsdesc(systemResp.data.debtdata)
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const createRequest = async(data)=>{
        const reqResp = await insertRequest(data)
        console.log("reqResp")
        
    }

    const onReset =()=>{
        form.resetFields()
    }

    const radioChange = (e)=>{
        console.log('radio checked', e.target.value);
        setRadVal(e.target.value);
    }

    return (
        <div>
            {/* <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                        <i className="mdi mdi-home"></i>
                    </span>New Request</h3>

            </div> */}
            <div className="row" style={{ justifyContent: 'center' }}>
                <div className="col-md-7">
                    <div className="card">
                        <div className='card-header' style={{ marginBottom: '0px', backgroundColor: '#03a9f4', borderColor: '#03a9f4' }}>
                            <h4>Request Form - New Request</h4>
                        </div>
                        <div className="card-body">

                            <Form  
                                form={form}
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                >
                                <Row>
                                    <Form.Item 
                                        label="Requirement Type" 
                                        name="req_type"
                                        style={{fontWeight:'bold'}}
                                        rules={[
                                            {
                                              required: true,
                                              message: 'Please input your Requirement Type!',
                                            },
                                        ]}
                                    >

                                        <Radio.Group onChange={radioChange} value={radval} style={{ marginLeft: '40px' }}>
                                            <Radio value={1}> New </Radio>
                                            <Radio style={{ marginLeft: '40px' }} value={2}> Exiting </Radio>
                                        </Radio.Group>


                                    </Form.Item>
                                </Row>

                                <Form.Item 
                                    label="Project Title"  
                                    name="proj"
                                    style={{fontWeight:'bold',
                                    display: radval === 1 ? 'block' : 'none'}}
                                    
                                    
                                >
                                    <Input style={{ width: '55%',marginLeft: '86px'  }} />
                                </Form.Item>
                                <Form.Item
                                    label="System Name"
                                    name="existing_name"
                                    style={{fontWeight:'bold',display: radval === 2 ? 'block' : 'none'}}
                                >
                                    <Select
                                        style={{ width: '52%',marginLeft: '86px' }}
                                        placeholder="Select System"

                                    >
                                        {stsdesc.length > 0 ?
                                            stsdesc.map((val) => {
                                                return <Option value={val.id}>{val.system_desc}</Option>;
                                            })
                                            : ""
                                        }
                                        
                                    </Select>
                                </Form.Item>

                                <Form.Item 
                                    label="Proposed Process"
                                    name="pros_process"
                                    style={{fontWeight:'bold'}}
                                    rules={[
                                        {
                                          required: true,
                                          message: 'Please input your Proposed Process!',
                                        },
                                    ]}
                                >
                                    <TextArea style={{ width: '60%', marginLeft: '40px' }} rows={4} />
                                </Form.Item>
                                <Form.Item 
                                    label="Current Process" 
                                    style={{fontWeight:'bold'}}
                                    name="cur_process"
                                    rules={[
                                        {
                                          required: true,
                                          message: 'Please input your Current Process!',
                                        },
                                    ]}
                                >
                                    <TextArea style={{ width: '60%',marginLeft: '50px' }} rows={4} />
                                </Form.Item>
                                <Form.Item
                                   name="sel_4fp"
                                    label="Select 4FP"
                                    style={{fontWeight:'bold'}}
                                    rules={[
                                        {
                                          required: true,
                                          message: 'Please input your 4Fb!',
                                        },
                                    ]}
                                >
                                    <Select
                                        style={{ width: '57%',marginLeft: '80px' }}
                                        placeholder="Select 4FP"
                                    >
                                        <Option></Option> 
                                
                                        <Option value="Speed"  >Speed</Option>
                                        <Option value="Quality"  >Quality</Option>
                                        <Option value="Process"  >Process</Option>
                                        <Option value="Performance"  >Performance</Option>
                                        
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="outcome"
                                    label="Outcome"
                                    rules={[
                                        {
                                          required: true,
                                          message: 'Please input your outcome!',
                                        },
                                    ]}
                                    style={{fontWeight:'bold'}}
                                >
                                    <Select
                                        style={{ width: '57%',marginLeft: '85px' }}
                                        placeholder="Outcome"
                                        
                                    >
                                        <Option></Option>
                                        <Option value="Time Reduction"  >Time Reduction</Option>
                                        <Option value="Headcount Reduction" >Headcount Reduction</Option>
                                        <Option value="Process Improvement" >Process Improvement</Option>
                                        <Option value="Cost Improvement" >Cost Improvement</Option>
                                        <Option value="Others"  >Others</Option> 
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="docu"
                                    label="Project Document"
                                    style={{fontWeight:'bold'}}
                                >
                                    {/* <Upload name="logo">
                                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                                    </Upload> */}
                                    <Input style={{ width: '65%',marginLeft: '30px' }} type="file"/>
                                </Form.Item>
                                <Form.Item
                                    wrapperCol={{
                                        span: 12,
                                        offset: 6,
                                    }}
                                >

                                    <Form.Item wrapperCol={{ offset: 4, span: 16 }} style={{ marginTop: '40px', textAlign: 'center' }}>
                                        <Button type="primary" style={{fontWeight:'bold'}}  htmlType="submit">
                                            Submit
                                        </Button>
                                        <Button style={{marginLeft:'10px',fontWeight:'bold'}} type="primary" danger htmlType="button" onClick={onReset}>
                                            Cancel
                                        </Button>
                                    </Form.Item>

                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default RequestCreation