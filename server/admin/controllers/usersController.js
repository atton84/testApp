const User = require("../models/User");

const usersController = {

    getUsers(request,response,next){
        const schema = User.schema;
        request.body.filters=request.body.filters||{};
        for(var field in schema){
            if(request.body.filters[field])
                request.body.filters[field]=(schema[field].name==="String"?new RegExp(`^${request.body.filters[field]}.*`,"i"):request.body.filters[field]);
        }
        return Promise.all([
            User.model.find(request.body.filters).sort(request.body.sorting).skip(request.body.limit.skip).limit(request.body.limit.limit),
            User.model.count()
        ]).then(([rows,count])=>{
           // console.log(res);
            return response.json({rows:rows,total:count});
        },error=>{
            console.error(error);
        });
    }
}

module.exports = usersController;