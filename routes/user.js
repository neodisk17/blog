var adminduties=require('../admin_duties.json');

exports.addPost=function(req,res){
    var content=[{
        "label":"Title",
        "id":"title",
        "type":"text",
        "attr":{
            "placeholder":"Enter a title",
            "required":"true"
        }
    }]
    res.render('admin/body',{
        duty:adminduties,
        content:content
    });
};

