import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();


cloudinary.config({
cloud_name: 'dkynwi65w', 
api_key: '866237411924499', 
api_secret: 'JHmhpFOvw3IrWgkVhP9JtvIKt2U'
});
export default cloudinary;