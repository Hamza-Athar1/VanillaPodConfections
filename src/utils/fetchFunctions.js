import { Client, ID, TablesDB, Storage } from "appwrite";

const client=new Client().setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const database=new TablesDB(client);

const storage=new Storage(client);


export const fetchProducts=async()=>{
    try{
    const response= database.listRows({
        databaseId:import.meta.env.VITE_APPWRITE_DATABASE_ID,
        tableId:"products",
    })
     
     return response;

}
catch(error){
    console.error("Error fetching products:",error);
    return [];
}
};

export const fetchImageUrl=async(imageId)=>{
    try{
        const response= await storage.getFileView({bucketId: import.meta.env.VITE_BUCKET_ID,fileId:imageId});
        console.log("Fetched image URL:",response);
        return response;
    }
    catch(error){
        console.error("Error fetching image URL:",error);
        return null;
    }
};