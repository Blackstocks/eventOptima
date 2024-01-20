export async function student({ next, store }) {
    
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user){
        return next({ name: "Login" });
    }

    if((user.user_type == 'Student')||(user.user_type == 'Campus Ambassador')){
        return next();
    }
    
    else{
        return next({ name: "Login" });
    }
  
}

export async function startup({ next, store }) {
    
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user){
        return next({ name: "Login" });
    }

    if((user.user_type == 'Startup')){
        return next();
    }
    
    else{
        return next({ name: "Login" });
    }
  
}

export async function professional({ next, store }) {
    
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user){
        return next({ name: "Login" });
    }

    if((user.user_type == 'Professional')){
        return next();
    }
    
    else{
        return next({ name: "Login" });
    }
  
}

export async function contingent({ next, store }) {
    
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user){
        return next({ name: "Login" });
    }

    if((user.user_type == 'Contingent')){
        return next();
    }
    
    else{
        return next({ name: "Login" });
    }
  
}

export async function admin({ next, store }) {
    
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user){
        return next({ name: "Login" });
    }

    if((user.user_type == 'Admin')){
        return next();
    }
    
    else{
        return next({ name: "Login" });
    }
  
}
