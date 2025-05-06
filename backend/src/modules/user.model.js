const sql = require('mysql2');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

class User {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.email = data.email;
        this.password = data.password;
        this.isActive = data.isActive != undefined ? data.isActive : true;
        this.isAdmin = data.isAdmin != undefined ? data.isAdmin : false;
        this.password = data.password;
        this.createAt = data.createAt;
        this.updateAt = data.updateAt;
    }

    static async create(userData) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassowrd = await bcrypt.hash(userData.password, salt);

            const pool = global.sqlPool.promise();

            const [result] = await pool.execute(`
                INSERT INTO users (username, firstname, lastname, email, password, isActive, isAdmin, createAt, updateAt)
                  VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
                [
                    userData.username,
                    userData.firstname,
                    userData.lastname,
                    userData.email,
                    hashedPassowrd,
                    userData.isActive ?? true,
                    userData.isAdmin ?? false,
                ]    
            );

            const [rows] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [result.inseredId]);
            if(rows.lenght > 0 )
                return new User(rows[0])
            return null;
        } catch (error) {
            throw error;
        }
    }
}