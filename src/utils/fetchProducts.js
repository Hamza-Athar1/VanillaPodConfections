import { Client, ID, TablesDB } from "appwrite";

const client=new Client().setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const database=new TablesDB(client);
export const fetchProducts=async()=>{
    try{
    const response= database.listRows({
        databaseId:import.meta.env.VITE_APPWRITE_DATABASE_ID,
        tableId:"products",
    })
}
catch(error){
    console.error("Error fetching products:",error);
    return [];
}
};