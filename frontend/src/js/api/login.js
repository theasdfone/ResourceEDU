const login = {
    loginUser(loginData) {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(loginData)
            }
    
            fetch("/signin", requestBody)
            .then((res) => {
                if(res.ok) resolve(res.json());
                else reject(new Error("Incorrect Username or Password"));
            }).catch(error => {
                reject(error);
            });
        });
    }
};

export default login;
