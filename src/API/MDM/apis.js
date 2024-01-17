import axios from "axios";

axios.defaults.baseURL="http://192.168.100.181:8888"

const PostApi =  async (PostData,handleClick,setData,ref,handleErrOpen) => {

    try {
         await axios.post(`/fields`, PostData)
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

export default PostApi