interface FormData {
    id:string;
    name: string;
    age: number;
    city: string;
}

const createUserObject = (id: string, formData: FormData): {  id:string,name: string, age: number, city: string } => {
    return {
        id: id,
        name: formData.name,
        age: formData.age,
        city: formData.city,
    }
}

export default createUserObject;
