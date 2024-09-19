const hitRequest = async (url, method, data) => {
    const urlPrefix = 'http://localhost:8000/api/v1';
    try {
        const response = await fetch(`${urlPrefix}${url}`, {
            method: method,
            credentials: 'include',
            body: data
        });
        const responseData = await response.json();
        if(responseData.statusCode >= 200 && responseData.statusCode < 300){
            console.log("Request successful");
            return responseData;
        }
        else{
            console.log("Request failed");
            return null;
        }
    } catch (error) {
        console.log("Error : ", error);
    }
}

export default hitRequest;