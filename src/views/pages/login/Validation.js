export default function validate(values) {
    let errors = {};
    if(values.userName == null || values.userName == ''){
     errors.userName="Username is required"
    }else if(values.userName < 3){
    errors.userName = "Username must be 3 or more character"
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 or more characters";
    } else if (!/\d/.test(values.password)) {
      errors.password = "Password must contain atleast 1 number";
    } else if (!/[!@#$%&?]/g.test(values.password)) {
      errors.password = "Password must contain atleast 1 special character";
    } else if (!/[A-Z]/g.test(values.password)) {
      errors.password = "Password must contain atleast 1 capitol letter";
    }
    return errors;
  }
  

