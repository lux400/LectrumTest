import * as fs from 'fs';

export const readFile = (path: string) => {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf8', (err, content) => {
            if (err) {
                rej(err);
                return;
            }
            try {
                const data = JSON.parse(content);
                res(data);
            } catch (err) {
                rej(err);
            }
        });
    });
};

export const writeToFile = (path: string, data: Object) => {
    return new Promise((res, rej) => {
        try {
            fs.writeFile(path, JSON.stringify(data), err => {
                if (err) {
                    rej(err);
                    return;
                }
                res(data);
            });
        } catch (err) {
            rej(err);
        }
    });
};
