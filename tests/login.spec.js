import { test, expect } from '@playwright/test';
import { faker, Faker } from '@faker-js/faker';

let name = faker.person.firstName()
let email = faker.internet.email()
let password = faker.internet.password({ length: 6 })

test('Login válido', async ({ page }) => {
    await page.goto('/login')
    await page.locator('#user').fill(email)
    await page.locator('#password').fill(password)
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).click()
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByRole('dialog', { name: 'Login realizado' })).toBeVisible()
});

test('Login com email incorreto', async ({ page }) => {

    await page.goto('/login')
    await page.locator('#user').fill(name)
    await page.locator('#password').fill(password)
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).click()
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByText('E-mail inválido.')).toBeVisible()
});

test('Login sem email', async ({ page }) => {
    await page.goto('/login')
    await page.locator('#password').fill(password)
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).click()
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByText('E-mail inválido.')).toBeVisible()
});

test('Login com senha incorreto', async ({ page }) => {

    var password = faker.internet.password({length: 5})

    await page.goto('/login')
    await page.locator('#user').fill(email)
    await page.locator('#password').fill(password)
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).click()
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByText('Senha inválida.')).toBeVisible()
});

test('Login sem senha', async ({ page }) => {
    await page.goto('/login')
    await page.locator('#user').fill(email)
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).click()
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByText('Senha inválida.')).toBeVisible()
});