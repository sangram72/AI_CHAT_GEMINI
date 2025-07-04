

import { GoogleGenerativeAI } from '@google/generative-ai';



  const genAI = new GoogleGenerativeAI(
    "AIzaSyCaKHufBBYcscMdflrQl50_5G357rwFn3M"

  );

const API_SERVICE_PROVIDER = {
    
    
 GET_API_VALUE: async(inputvalue) => {
  try{
  const model =  genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const result = await model.generateContent(inputvalue);
        const response = result.response;
      const text = response.text();
    

  return text
}
catch(error){
  console.log("Something Went Wrong");
}
}




};
export default API_SERVICE_PROVIDER
