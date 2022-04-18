const documents = {
    upload(formData) {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "POST",
                body: formData
            };

            fetch("/upload", requestBody)
            .then((res) => {
                if(res.ok) resolve(res.json());
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export default documents;