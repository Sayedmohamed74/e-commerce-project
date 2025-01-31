const basedUrlApi ='https://dummyjson.com/';

const urlApi={
    product:basedUrlApi+'products',
    user:{
        login:basedUrlApi+'auth/login',
        getUser:basedUrlApi+'auth/me'
    },
    cart:{
        addCart:basedUrlApi+'carts/add',
        getCart:(id)=>basedUrlApi+`carts/user/${id}`,
        editAndDeleteCart:(id)=>basedUrlApi+`carts/${id}`
    }

}

function handleTryCatch(codeTry,codeCatch){
    try{
      
        return codeTry()
       
    }
    catch(e){
       
           return codeCatch(e)
       
    }
}
export {urlApi,handleTryCatch}