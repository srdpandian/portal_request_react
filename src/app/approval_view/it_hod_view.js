import React,{useState} from 'react'
import { Card } from 'antd';
import { Col, Table, Row,Tag,  Flex, Radio } from 'antd';
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};


const Feasiblity_view = () => {
    const [value, setValue] = useState('horizontal');
    const dataSource = [
        {
            slno: '1',
            cmt: 'portal request',
            sts: 'HODAPPROVED',
            upby: 'Intranet',
            upddate:'28-09-2023'
        }
    ];

    const columns = [
        {
            title: 'SL.No',
            dataIndex: 'slno',
            key: 'slno',
        },
        {
            title: 'Comments',
            dataIndex: 'cmt',
            key: 'cmt',
        },
        {
            title: 'Status',
            dataIndex: 'sts',
            key: 'sts',
            render:(text,row)=>{
                const color='green'
                return (
                    <Tag color={color} key={row.sts}>
                      {row.sts.toUpperCase()}
                    </Tag>
                );
            }
        },
        {
            title: 'Updated By',
            dataIndex: 'upby',
            key: 'upby',
        },
        {
            title: 'Updated Date',
            dataIndex: 'upddate',
            key: 'upddate',
        }
    ];
    const cardStylecss = {
        margin: '50px',
        color: 'black',
        fontWeight:'bold',
    }
    const dataStylecss = {
        fontFamily:'sans-serif'
    }
    const divStyles = {
        backgroundColor:'#f1d0d0',
    }
    const headerStyles = {
        backgroundColor:'#c2b280',
        color:'black',
        fontWeight:'bold'
    }

    return (
        <div>
            <Card style={cardStylecss} title="Approval" headStyle={headerStyles}>
                <table className="table table-bordered">
                    <tr style={{backgroundColor:'#8FD0F7'}}>
                        <td className="bg-blue" align="left" colspan="4" border="1">&nbsp;<b>View</b></td>
                    </tr>
                    <tr>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Reference Number</b></td>
                        <td style={{color:"red",fontWeight:'bold'}}><b>COM-ITAppRequest-0696	</b></td>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Feasibility Study</b></td>
                        <td style={dataStylecss} colspan="3">-</td>
                    </tr>
                    <tr>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Requirement Type</b></td>
                        <td style={dataStylecss}> New One	</td>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Project Developer</b></td>
                        <td style={dataStylecss}></td>
                    </tr>
                    <tr>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Project Title</b></td>
                        <td style={dataStylecss}>Online supplier portal-Supplier contact updation</td>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Development Days</b></td>
                        <td style={dataStylecss}>145</td>
                    </tr>

                    <tr>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Project Department Name</b></td>
                        <td style={dataStylecss}>QUALITY</td>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Tentative Start Date</b></td>
                        <td style={dataStylecss}></td>

                    </tr>

                    <tr>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Current Process</b></td>
                        <td style={dataStylecss}>Currently supplier contact details updated by Sona Comstar in Online supplier portal	</td>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Tentative End Date</b></td>
                        <td style={dataStylecss}>30-Nov-2024</td>
                    </tr>

                    <tr>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Proposed Process</b></td>
                        <td style={dataStylecss}>Access required to update the contact details by supplier itself in online supplier portal	</td>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Priority</b></td>
                        <td style={dataStylecss}>-</td>

                    </tr>

                    <tr>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Select 4FP</b></td>
                        <td style={dataStylecss}>Quality</td>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Actual Start Date</b></td>
                        <td style={dataStylecss}>-</td>

                    </tr>

                    <tr>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Outcome</b></td>
                        <td style={dataStylecss}>Time Reduction	</td>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Actual End Date</b></td>
                        <td style={dataStylecss}>-</td>

                    </tr>

                    <tr>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Document</b></td>
                        <td style={dataStylecss}>-</td>
                        <td className="danger" style={divStyles} align="right">&nbsp;<b>Raised By</b></td>
                        <td style={dataStylecss}>K S JEGAN</td>
                    </tr>

                </table>
                <br />
                <div style={{ marginTop: '10px' }}>
                    <div classNameName='history' style={{ backgroundColor: '#778899', padding: '10px', fontSize: '16px', fontWeight: 'bold' }} height='20px'>
                        History
                    </div>
                    <Table dataSource={dataSource} columns={columns} />
                </div>
                <br />
                <Row>
                    <Col span={6}>  
                        <label className='sts' style={{fontSize:'15px'}}>
                            Status
                        </label>  
                    </Col>
                    <Col span={6}>
                        <Radio.Group value={value} buttonBg='solid' onChange={(e) => setValue(e.target.value)}>
                            <Radio style={{outline : 'green'}} value="Y">Yes</Radio>
                            <Radio value="N">No</Radio>
                            <Radio value="RR">Re-Route</Radio>
                        </Radio.Group>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
export default Feasiblity_view


