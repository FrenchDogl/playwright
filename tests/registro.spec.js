import { test, expect } from '@playwright/test';
import { faker, Faker } from '@faker-js/faker';

test('registro válido', async ({ page }) => {

  let name = faker.person.fullName()
  let email = faker.internet.email()
  let password = faker.internet.password({ length: 6 })

  await page.goto('/register')
  await page.locator('#user').fill(name)
  await page.locator('#email').fill(email)
  await page.locator('#password').fill(password)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await expect(page.getByRole('dialog', { name: 'Cadastro realizado!' })).toBeVisible()
  await page.getByRole('button', { name: 'OK' }).click()
})

test('registro nome inválido', async ({ page }) => {

  let email = faker.internet.email()
  let password = faker.internet.password({ length: 6 })

  await page.goto('/register')
  await page.locator('#email').fill(email)
  await page.locator('#password').fill(password)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await expect(page.getByText('O campo nome deve ser')).toBeVisible()
})

test('registro email inválido', async ({ page }) => {

  let name = faker.person.fullName()
  let password = faker.internet.password({ length: 6 })

  await page.goto('/register')
  await page.locator('#user').fill(name)
  await page.locator('#password').fill(password)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await expect(page.getByText('O campo e-mail deve ser')).toBeVisible()
})

test('registro senha inválida', async ({ page }) => {

  let name = faker.person.fullName()
  let email = faker.internet.email()
  let password = faker.internet.password({ length: 5 })

  await page.goto('/register')
  await page.locator('#user').fill(name)
  await page.locator('#email').fill(email)
  await page.locator('#password').fill(password)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await expect(page.getByText('O campo senha deve ter pelo')).toBeVisible()
})

test('registro sem senha', async ({ page }) => {

  let name = faker.person.fullName()
  let email = faker.internet.email()

  await page.goto('/register')
  await page.locator('#user').fill(name)
  await page.locator('#email').fill(email)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await expect(page.getByText('O campo senha deve ter pelo')).toBeVisible()
})