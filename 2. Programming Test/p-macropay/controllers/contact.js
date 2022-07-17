'use strict'
const sql=require('../db_SqlServer/databaseSqlServer')
const lib = require('mssql');

function pruebas(req,res){
 
    res.status(200).send({
        message:'testing a Contact controller action of api-rest'
    
    });

}
function Respuesta(res,exito,message) 
{
    res.json({
        Exito: exito,
        Mensaje: message,
        Data: [],
    });

}
function RespuestaExeption(res,exito,message,data) 
{
    res.json({
        Exito: exito,
        Mensaje: message,
        Data: [data],
    });
    
}

function getContactID(req,res)
{
    const { id } = req.params;
       
    if (id != undefined) {
        let request = sql
            .request()
            .input('id', lib.VarChar, id)
            .query(
                `Select id,name,phone,addressLines from [dbo].[pruebaX] where id='${id}' order by name asc  `,


                (err, result) => {
                    if (err) {
                        RespuestaExeption(res,0,'Error en la peticion',console.log(err))
                
                      
                    } else {
                        if(!result.recordset[0]){
                            res.status(404).send({message:'El contacto no existe'});
                        

                        }
                        else{
                            res.json({ Exito: 1, Mensaje: '', Data:[result.recordset] });
                        }

                       
                    }
                }
            );
    } else {
        res.status(200).send({message:'faltan parametros'});
     
    }

}
function getcontactNAME(req,res)
{
    var params=req.body;
    var name= params.name;
if(name){
    let request = sql
    .request()
    .input('name', lib.VarChar, name)
    .query(
        `Select id,name,phone,addressLines from [dbo].[pruebaX] where lower(name)like lower('%${name}%') order by name asc `,

        (err, result) => {
            if (err) {
         
                RespuestaExeption(res,0,'Error en la peticion',console.log(err))
        
              
            } else {
                if(!result.recordset[0]){
                
                    RespuestaExeption(res,0,'No se encontro el Contacto',console.log(err))
                

                }
                else{
                    res.json({ Exito: 1, Mensaje: '', Data:[result.recordset] });
                }

               
            }
        }
    );
 

}else{

    res.status(400).send({message:'faltan parametros'});
}

}

function get(req,res){
    var params=req.body;
    const { id } = req.params;
    var name= params.name;

    if(id){
        //res.status(200).send({message:'Es id'});
        let request = sql
        .request()
        .input('id', lib.VarChar, id)
        .query(
            `Select id,name,phone,addressLines from [dbo].[pruebaX] where id='${id}' order by name asc  `,


            (err, result) => {
                if (err) {
                    RespuestaExeption(res,0,'Error en la peticion',console.log(err))
            
                  
                } else {
                    if(!result.recordset[0]){
                        res.status(404).send({message:'El contacto no existe'});
                    

                    }
                    else{
                        res.json({ Exito: 1, Mensaje: '', Data:[result.recordset] });
                    }

                   
                }
            }
        );



    }else if(name){

       // res.status(200).send({message:'Es name'});
       let request = sql
    .request()
    .input('name', lib.VarChar, name)
    .query(
        `Select id,name,phone,addressLines from [dbo].[pruebaX] where lower(name)like lower('%${name}%') order by name asc `,

        (err, result) => {
            if (err) {
         
                RespuestaExeption(res,0,'Error en la peticion',console.log(err))
        
              
            } else {
                if(!result.recordset[0]){
                
                    RespuestaExeption(res,0,'No se encontro el Contacto',console.log(err))
                

                }
                else{
                    res.json({ Exito: 1, Mensaje: '', Data:[result.recordset] });
                }

               
            }
        }
    );



    }else{
       // res.status(200).send({message:'ninguno'});
       let request = sql
       .request()
       .query(
           `Select id,name,phone,addressLines from [dbo].[pruebaX]  order by name asc `,
   
           (err, result) => {
               if (err) {
            
                   RespuestaExeption(res,0,'Error en la peticion',console.log(err))
           
                 
               } else {
                   if(!result.recordset[0]){
                   
                       RespuestaExeption(res,0,'No se encontro el Contacto',console.log(err))
                   
   
                   }
                   else{
                       res.json({ Exito: 1, Mensaje: '', Data:[result.recordset] });
                   }
   
                  
               }
           }
       );

    }



}



function deleteContact(req,res){
   
    const { id } = req.params;
    if (id!= undefined) {
        let request = sql
            .request()
            .input('id', lib.VarChar, id)
            .query(`exec spd_Contacto @id='${id}'`, (err, result) => {
                if (!err) {
                    let aux=JSON.stringify(result.recordset[0]);
                    let valor=aux.toString().replace(/['{}Exito:"]+/g, '');
                    //captura la respuesta del procedimiento almacenado
                    let auxResp;
                    switch (valor) {

                        case '1':
                           //  auxResp=Respuesta(res,1,'Contacto Eliminado');
                             auxResp=res.status(204).send({message:'Contacto Eliminado'});
                        break;
                         case '2':
                            auxResp=res.status(404).send({message:'No existe el contacto'});
                            break;
                    
                        default:
                                auxResp=Respuesta(res,0,'No se encontro el contacto')
                        break;

                    }
                    return auxResp;
                   
                } else {
                    res.json({status:false, mensaje: 'Error al consultar la información', data:[err]})
                
                }
            });
    } else {
        Respuesta(res,0,'Falta de parametros')
       
       
    }
}

module.exports={
    pruebas,
    getContactID,
    getcontactNAME,
    deleteContact,



}; 