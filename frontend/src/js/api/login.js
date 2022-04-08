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
            }).catch((error) => {
                reject(error);
            })
        }).then((res) => {
            localStorage.setItem("jwt", res.token);
            window.location.replace("/dashboard");
        });
    },
    
    logout() {
        localStorage.removeItem("jwt");
    },

    getUser() {
        return localStorage.getItem("jwt");
    }
};

export default login;
