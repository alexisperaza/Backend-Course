const fs = require('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
    }


    async getAll() {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');
            const response = JSON.parse(content);

            return response;
        } catch (err) {
            throw new Error(err);
        }
    }
    async getById(id) {
        try {
            const content = await this.getAll();
            const item = content.filter(item => item.id === id);
            
            return item[0];
        } catch (err) {
            throw new Error(err);
        }
    }

}

module.exports = {Contenedor};