let accountList = JSON.parse(localStorage.getItem("accountList")) || [];
function signIn(e) {
    e.preventDefault();
    let inpEmail = document.getElementById("email").value;
    let inpPassword = document.getElementById("password").value;
    console.log(inpPassword);
    let check = false;
    let account = {};
    if (inpEmail == "") {
        alert("chưa điền email");
    } else if (inpPassword == "") {
        alert("chưa điền mật khẩu");
    } else {
        for (let i = 0; i < accountList.length; i++) {
            if (inpEmail == accountList[i].emailAddress) {
                account = accountList[i];
                check = true;
                break;
            }
        }
        if (check) {
            if (inpPassword == account.password) {

                window.location.href = "../index.html";
                localStorage.setItem("user", JSON.stringify(account));
            } else {
                alert("sai mật khẩu");
            }
        } else {
            alert("email chưa được đăng kí");
        }
    }
}