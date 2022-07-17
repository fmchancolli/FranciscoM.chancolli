
use DBMacropay 
go
IF OBJECT_ID (N'pruebaX', N'U') IS NULL 
begin

CREATE TABLE [pruebaX]
(
 [id] Varchar(200) NULL,
 [name] Varchar(200) NULL,
 [phone] Varchar(50)NULL,
 [addressLines] Varchar(200) NULL
)
end