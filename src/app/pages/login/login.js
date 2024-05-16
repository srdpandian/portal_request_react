import React from 'react'
import { useHistory } from "react-router-dom";
// import { useDispatch,connect } from "react-redux";
// import { userLogin } from "../../redux/actions/userAction";
// import  secureLocalStorage  from  "react-secure-storage";
import { Button, Form, Input } from 'antd';
import {login} from '../../services/service' 
import Swal from 'sweetalert2'

const Login = () => {
  let history = useHistory();
  // let dispatch = useDispatch();
  
  const [form] = Form.useForm();
  const onFinish = (values) => {
    OnLoginSubmit(values)
  };

  
  
  const OnLoginSubmit = async(data)=>{
    const url = "loginCheck"
    const response = await login(url, data);
    console.log(response,"logincheckcheck")
    if (response.msg === true) {
      // dispatch(userLogin(response.data))
      localStorage.setItem('deptid',response.data[0].cs_emp_dept_id)
      localStorage.setItem('empuname',response.data[0].cs_emp_username)
      localStorage.setItem('emphod',response.data[0].cs_emp_hod)

      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `!Welcome user`,
        showConfirmButton: false,
        timer: 1500
      })
      form.resetFields();
      history.push('/dashboard');
    } else {
      if(response.custom !== ""){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: response.custom,
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: "somthing went wrong",
          showConfirmButton: false,
          timer: 1500
        })
      }
      
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-3 mx-auto">
            <div className="auth-form-light py-4 px-4 px-sm-4">
              <div className="brand-logo" style={{ textAlign: 'center',marginBottom:'10px' }}>
                <img src={require("../../../assets/images/logopng.png")} alt="logo" />
              </div>
              <div style={{textAlign:'center',color:'#009698 ',fontWeight:'bold',fontSize:'15px',marginBottom:'10px'}}>
                Login to Sona  Comstar IT Application
              </div>
              <div style={{textAlign:'center',color:'#009698 ',fontWeight:'bold',fontSize:'15px',marginBottom:'10px'}}>
                Request
              </div>
              <Form
                form={form}
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                style={{ maxWidth: 350,textAlign:'center'}}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="wname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>


                <Form.Item
                  label="Password"
                  name="wpwd"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6, span: 14 }} style={{marginTop:'40px',textAlign:'center'}}>
                  <Button type="primary" htmlType="submit">
                    Log In
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Login