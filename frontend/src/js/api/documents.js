import Login from "./login"

const documents = {
    upload(formData, displayData) {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "POST",
                headers: Login.authHeader(),
                body: JSON.stringify({formData, displayData})
            };

            fetch("/file/upload", requestBody)
            .then((res) => {
                console.log(res.status, res.ok, res);
                if(res.ok) resolve("File Successfully Uploaded");
                else resolve("Network Error")
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export default documents;