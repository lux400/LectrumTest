import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const saltRounds = 10;

interface User {
    email: string,
    password: string
}

export const encryptPassword = (password?: string) =>
    bcrypt.hash(password, saltRounds);

export const preparePassword = async (password?: string) => ({
    passwordHash: await encryptPassword(password),
    password: undefined,
});

export const prepareUserForRegistration = async (params: User) => {
    const user = {...params};
    Object.assign(user, await preparePassword(user.password));
    delete user.password;

    return user;
};

export const validatePassword = (password: string, passwordHash: string) =>
    bcrypt.compare(password, passwordHash).then((valid) => {
        if (!valid) {
            throw new Error('Invalid password');
        }
    });

const getJWTUserModel = (user:User) => ({
    email: user.email,
});

export const getTokens = (user: User) => ({
    token: getJWT(user),
});

const getJWT = (user: User) => {
    const jwtUserModel = getJWTUserModel(user);
    return jwt.sign(jwtUserModel, 'secret', { expiresIn: 300 });
};
