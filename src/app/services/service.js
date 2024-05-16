
import { axiosBaseApi } from './axios'
import axios from 'axios'


export const login = async (url, data) => {
    const result = {}
    // const headers = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    // }
    try {
        
        const userRes = await axiosBaseApi.post(url,data);
        const userRespdata = userRes.data
        
        if(userRespdata.userData !== undefined && userRespdata.userData.length > 0){
            result.data = userRespdata.userData
            result.msg  = true
            result.custom = userRespdata.message
            
        }else{
            result.data = "No Record Found"
            result.msg  = false
            result.custom = userRespdata.message
        }
        
    } catch (error) {
        result.data = "No Record Found"
        result.msg  =  false
    }
    return result;

}
export const getDebtChatOl = async(url)=>{
    const result = {}
    try {
        
        const userRes = await axiosBaseApi.get(url);
        const userRespdata = userRes.data
        if(userRespdata !== undefined){
            result.data = userRespdata
            result.msg  = true
        }else{
            result.data = "No Record Found"
            result.msg  = false
        }
        
    } catch (error) {
        result.data = "No Record Found"
        result.msg  =  false
    }
    return result;
}

export const getDebt = async(url)=>{
    const result = {}
    try {
        
        const userRes = await axiosBaseApi.get(url);
        const userRespdata = userRes.data
        console.log(userRespdata,"testting")
        if(userRespdata !== undefined){
            result.data = userRespdata.debtdata
            result.msg  = true
        }else{
            result.data = "No Record Found"
            result.msg  = false
        }
        
    } catch (error) {
        result.data = "No Record Found"
        result.msg  =  false
    }
    return result;
}

export const getDebtchartData = async(url, data)=>{
    const result = {}
    try {
        
        const userRes = await axiosBaseApi.post(url, data);
        const userRespdata = userRes.data
       
        if(userRespdata !== undefined){
            result.data = userRespdata
            result.msg  = true
        }else{
            result.data = "No Record Found"
            result.msg  = false
        }
        
    } catch (error) {
        result.data = "No Record Found"
        result.msg  =  false
    }
    return result;
}

export const getUserchartDataService = async(url)=>{
    const result = {}
    try {
        const userRes = await axiosBaseApi.get(url);
        const userRespdata = userRes.data
    //    console.log(userRespdata,"service")
        if(userRespdata !== undefined){
            result.data = userRespdata
            result.msg  = true
        }else{
            result.data = "No Record Found"
            result.msg  = false
        }
        
    } catch (error) {
        result.data = "No Record Found"
        result.msg  =  false
    }
    return result;
}
export const getFullSys = async(url)=>{
    const result = {}
    try {
        
        const sysRes = await axiosBaseApi.get(url);
        const sysResData = sysRes.data
        if(sysResData !== undefined){
            result.data = sysResData
            result.msg  = true
        }else{
            result.data = "No Record Found"
            result.msg  = false
        }
        
    } catch (error) {
        result.data = "No Record Found"
        result.msg  =  false
    }
    return result;
}
export const insertRequest = async(data)=>{
    // let formData = new FormData();    //formdata object

    // formData.append('name', 'ABC');   //append the values with key, value pair
    // formData.append('age', 20);

    const config = {
        headers: { 
            'content-type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        }
    }
    const url = "http://localhost/portal_req_backend/public/api/new_request"
    axios.post(url, data, config)
    .then(response => {
        console.log(response);
        return response;
    })
    .catch(error => {
        console.log(error);
        return error;
    });
  
}
export const geRequest = async (radiotype,priority,user) => {
    let data = {}
    data.user = user
    if(radiotype === "" && priority === ""){
        data.radiotype = ""
        data.priority=""
        
    }else{
        data.radiotype = radiotype
        data.priority= priority
    }
    
    // const resul = {}
    const respon = axios.post('http://localhost/portal_req_backend/public/api/getMyrequest',data).then((response)=>{
        return response.data
    }).catch((onError)=>{
        return onError
    });
    return respon
}

export const getViewDetailService = async(viewid)=>{
    const proxyurl = "http://localhost/portal_req_backend/public/api/"
    
    const dataList = axios.get(proxyurl+`viewcreation/${viewid}`,{
    }).then((response)=>{
        return response.data
    }).catch((error)=>{
        return error
    })
    
    return dataList
}
export const getStsDetailValue = async(viewid)=>{
    const proxyurl = "http://localhost/portal_req_backend/public/api/"
    let data = {}
    data.user = viewid
    const dataList = axios.post(proxyurl+`getStatus`,data).then((response)=>{
        return response.data
    }).catch((error)=>{
        return error
    })
    
    return dataList
}
export const getHodList = async()=>{
    const proxyurl = "http://localhost/portal_req_backend/public/api/"
    const dataList = axios.get(proxyurl+`hodList`).then((response)=>{
        return response.data
    }).catch((error)=>{
        return error
    })
    
    return dataList
}
export const getITHodList = async()=>{
    const proxyurl = "http://localhost/portal_req_backend/public/api/"
    const dataList = axios.get(proxyurl+`IThodList`).then((response)=>{
        return response.data
    }).catch((error)=>{
        return error
    })
    
    return dataList
}
export const getFeasiList = async()=>{
    const proxyurl = "http://localhost/portal_req_backend/public/api/"
    const dataList = axios.get(proxyurl+`feasirecords`).then((response)=>{
        return response.data
    }).catch((error)=>{
        return error
    })
    
    return dataList
}
export const getFeasibleViewDetailService = async(viewid)=>{
    const proxyurl = "http://localhost/portal_req_backend/public/api/"
    
    const dataList = axios.get(proxyurl+`feasible_view/${viewid}`,{
    }).then((response)=>{
        return response.data
    }).catch((error)=>{
        return error
    })
    
    return dataList
}



