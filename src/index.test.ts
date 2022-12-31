import { describe, it, expect } from 'vitest';
import { adminList } from '$lib/config/admins';
import { userList } from '$lib/config/users';

describe('config not empty', () => {
	it('get all admins from config', () => {
		expect(adminList.length).toBeGreaterThan(0);
	});

	it('get all users from config', () => {
		expect(userList.length).toBeGreaterThan(0);
	});
});