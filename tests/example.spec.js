// @ts-check
import { test, expect } from '@playwright/test';
import { faker, Faker } from '@faker-js/faker';

test('Login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login')
  await page.locator('#user').fill('teste@teste.com')
  await page.locator('#password').fill('123456')
  await page.getByRole('checkbox', { name: 'Lembrar de mim' }).click()
  await page.getByRole('button', { name: 'login' }).click()
  await expect(page.getByRole('dialog', { name: 'Login realizado' })).toBeVisible()
});

test('registro', async ({ page }) => {

  let name = faker.person.fullName()
  let email = faker.internet.email()
  let password = faker.internet.password({ length: 6 })

  await page.goto('https://automationpratice.com.br/register')
  await page.locator('#user').fill(name)
  await page.locator('#email').fill(email)
  await page.locator('#password').fill(password)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await expect(page.getByRole('dialog', { name: 'Cadastro realizado!' })).toBeVisible()
  await page.getByRole('button', { name: 'OK' }).click()
})
