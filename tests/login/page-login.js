const { expect } = require('@playwright/test')
import { faker } from '@faker-js/faker/locale/pt_BR'

let email = faker.internet.email()
let password = faker.internet.password()

const fazerLogin = async (page) => {
    await page.goto('/login')
    await page.locator('#user').fill(email)
    await page.locator('#password').fill(password)
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check()
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible()
    await expect(page.getByText('Olá, ' + email)).toBeVisible()
}
const abrirSite = async (page) => {
    await page.goto('/login')
}
const clicarLogin = async (page) => {
    await page.getByRole('button', { name: 'login' }).click()
}
const clicarBotaoCheck = async (page) => {
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check()
}
const digitarEmail = async (page) => {
    await page.locator('#user').fill(email)
}
const digitarSenha = async (page) => {
    await page.locator('#password').fill(password)
}
const digitarEmailIncorreto = async (page) => {
    await page.locator('#user').fill('email')
}
const digitarSenhaIncorreta = async (page) => {
    const password = faker.internet.password({length: 5})
    await page.locator('#password').fill(password)
}

module.exports = {
    fazerLogin,
    abrirSite,
    digitarEmail,
    digitarSenha,
    digitarEmailIncorreto,
    digitarSenhaIncorreta,
    clicarBotaoCheck,
    clicarLogin
}
