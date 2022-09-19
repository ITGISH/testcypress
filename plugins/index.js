module.exports= (on,config)=>{

}
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');

module.exports = (on,config)=>{
    on('task',{parseXlsx({filePath})})
    {
        return new Promise((resolve,rejects)=>{
            try{
                const jsonData = xlsx.parse(fs.readFileSync(filePath));
                resolve(jsonData);

            }catch(e)
            {
                rejects(e);
            }
        });
    }
};
const readXlsx = require('./read-xlsx');
module.exports = (on,config) =>{
    on('task',{'readXlsx':readXlsx.read})
}