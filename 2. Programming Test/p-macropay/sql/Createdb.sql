use master
IF NOT EXISTS (SELECT name FROM master.dbo.sysdatabases WHERE name = N'DBMacropay')
CREATE DATABASE [DBMacropay] COLLATE SQL_Latin1_General_CP1_CI_AS
