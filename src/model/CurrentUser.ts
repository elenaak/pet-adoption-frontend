class Authority{
    authority: String;
}

export class CurrentUser {
    username: String;
    password: String;
    authorities: Authority[];
}