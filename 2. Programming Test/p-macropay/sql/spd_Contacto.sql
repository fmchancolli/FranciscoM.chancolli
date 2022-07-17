
if exists(select * from sys.objects where object_id = OBJECT_ID(N'[dbo].[spd_Contacto]') and type in (N'P', N'PC'))
	drop procedure [dbo].spd_Contacto
go


/*
exec spd_Contacto
	@id='3bf6353d-9142-4f32-bbe0-edc52b8a4eb0'
	select * from [dbo].[pruebaX]

*/


create procedure [dbo].[spd_Contacto]
	@id varchar(200)
as
declare @result int = 0
--funtion 1|0
--valida si el Regdelete es 0
--update a 1


if not exists(select top 1 1 from [dbo].[pruebaX] where id=@id) 
begin 
    set @result=2
end else
begin
    DELETE FROM [dbo].[pruebaX] where id=@id

set @result=1
end



/*
>1-Exito
>2-no exists
*/

select @result as Exito

