interface User { id: number; name: string; email: string; }

class UserService {
    private users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public getUser(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    public deleteUser(id: number): boolean {
        const initialLength = this.users.length;
        this.users = this.users.filter(user => user.id !== id);
        return this.users.length < initialLength;
    }

    public listUsers(): User[] {
        return this.users;
    }
}

const userService = new UserService();
userService.addUser({ id: 1, name: 'Alice', email: 'alice@example.com' });
userService.addUser({ id: 2, name: 'Bob', email: 'bob@example.com' });

console.log(userService.listUsers());