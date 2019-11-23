var UserAuth = (function() {
    var name = '';
    var email = '';
    var auth = false;
  
    var setName = function(name){
        this.name = name;
    }
    var getName = function(){
        return name;
    }
  
    var setEmail = function(user_email){
        email = user_email;
    }
  
    var getEmail = function(){
        return email;
    }
  
    var setAuth = function(authenticate){
        auth = authenticate;
    }
        
    var getAuth = function(){
        if(auth === undefined){
            return false;
        }
        return auth;
    }

    return {
        setName: setName,
        getName: getName,
        setEmail: setEmail,
        getEmail: getEmail,
        setAuth: setAuth,
        getAuth: getAuth
      }

  })();

export default UserAuth;