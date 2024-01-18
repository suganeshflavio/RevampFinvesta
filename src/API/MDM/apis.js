import axios from "axios";

axios.defaults.baseURL="http://192.168.100.181:8888"

const PostApi =  async (PostData,handleClick,setData,ref,handleErrOpen) => {

    try {
         await axios.post(`/fields/`, PostData)
         .then(res =>{
            if(res.status===200){

                handleClick()
                ref.current.value = null
                setData({
                    name: '',
                    display_name: '',
                    type: '',
                    details: {
    
                    },
                })
                
                // setTimeout(()=>{
                //     window.location.reload()
                // },2000)
            }

            else{
                handleErrOpen()
            }
         })
        
        console.log(PostData);

      
    }
    catch (err) {
        console.log(err);
        handleErrOpen()
    }

}

export const getApi= async(setGetData,setError)=>{
    try{
        await axios.get('/fields')
        .then(res=>setGetData([res.data]))

    }
    catch (err) {
        console.log(err);
        setError(true)
    }
}


export const getById=async(setData,id,setError) => {
    try{
        await axios.get(`/fields/${id}`)
        .then(res=>setData([res.data]))

    }
    catch (err) {
        console.log(err);
        setError(true)
    }
}

export const putAPI=async(id,data,handleClose)=>{
    try{
       delete data[0]._id;
        await axios.put(`/fields/${id}`,data[0])
      .then(res=>console.log(res))
      handleClose()
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteAPI=async(id,getApi,setData,setError)=>{
    try{
        await axios.delete(`/fields/${id}`)
      .then(res=>console.log(res))
      getApi(setData,setError)
    }
    catch (err) {
        console.log(err);
    }
}


export default PostApi