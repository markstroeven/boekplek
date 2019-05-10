import {get} from 'http';

export class AuthService {
    static token = AuthService.refreshToken();

    static refreshToken(): void {
        get('foobar', (data: any) => {
            this.token = data.token;
        });
    }
}
